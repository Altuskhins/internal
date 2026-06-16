# FridaGadget Developer Guide

Документация для разработчиков других плагинов, которые хотят выполнять Frida JS через `FridaGadget.plugin`.

`FridaGadget` - библиотечный ExteraGram-плагин. Он загружает Frida Gadget внутрь процесса клиента, собирает общий `gadget.js` bundle из скриптов других плагинов и дает Python API `frida_gadget_api`.

Плагин выполняет произвольный Frida JS в процессе ExteraGram. 

## Быстрый старт

В зависимом плагине импортируйте API лениво. Не делайте `import frida_gadget_api` на уровне модуля: `FridaGadget` создает этот модуль только после своей загрузки.

```python
def _frida_api():
    try:
        import frida_gadget_api as fg
        return fg
    except Exception:
        return None
```

Минимальный клиентский плагин:

```python
__id__ = "MyFridaHook"
__name__ = "My Frida Hook"
__description__ = "FridaGadget client example"
__author__ = "local"
__version__ = "0.1.0"
__app_version__ = ">=12.5.1"
__min_version__ = "12.1.1"

from base_plugin import BasePlugin


def _frida_api():
    try:
        import frida_gadget_api as fg
        return fg
    except Exception:
        return None


class MyFridaHookPlugin(BasePlugin):
    def on_plugin_load(self):
        fg = _frida_api()
        if fg is None or getattr(fg, "API_VERSION", 0) < 2:
            self.log("FridaGadget API is unavailable")
            return

        result = fg.register_script(
            __id__,
            """
'use strict';

fridaGadget.log('script loaded');

fridaGadget.onInit(function (stage, parameters) {
  fridaGadget.log('init', stage, JSON.stringify(parameters || {}));
  fridaGadget.diagnose('my-hook-init');
});

fridaGadget.onDispose(function () {
  fridaGadget.log('dispose');
});
""",
            name="my-hook.js",
            replace=True,
            autoload=True,
        )
        self.log("FridaGadget register result: %s" % result)

    def on_plugin_unload(self):
        fg = _frida_api()
        if fg is not None:
            try:
                fg.unregister_plugin(__id__)
            except Exception as exc:
                self.log("FridaGadget unregister failed: %s" % exc)
```

## Что делает FridaGadget

- Загружает `libfrida-gadget.so` через `System.load(...)`.
- Пишет конфиги Frida Gadget рядом с `.so`.
- Генерирует общий `gadget.js` из активных registry entries.
- Экспортирует Python API-модуль `frida_gadget_api`.
- Поднимает ADB push server на `127.0.0.1:42792` по умолчанию.
- Собирает JS-логи в память и отдает их через API/dev server.
- Подключает `java_bridge_prelude.js`, если скрипт явно просит Java bridge.

## Основные файлы

- `FridaGadget.plugin` - основной install/share артефакт.
- `FridaGadget.py` - локальная runtime/debug копия для этого checkout.
- `FridaGadget.md` - эта документация.
- `java_bridge_prelude/` - исходники prelude для `frida-java-bridge`.
- `java_bridge_prelude.js` - собранный prelude.
- `fridagadget_modules/` - локальная папка с модульными артефактами в checkout.

В этом окружении нужно держать `FridaGadget.plugin` и `FridaGadget.py` одинаковыми. `.plugin` используется для install/share flow, а локальный loader может смотреть на `.py`.

Проверка:

```cmd
fc /b FridaGadget.plugin FridaGadget.py
```

Синхронизация:

```cmd
copy /Y FridaGadget.plugin FridaGadget.py
```

## Python API

FridaGadget публикует модуль:

```python
import frida_gadget_api as fg
```

Текущая версия API:

```python
fg.API_VERSION == 2
```

Методы регистрации:

```python
fg.register_script(plugin_id, script, name=None, replace=True, autoload=True)
fg.register_script_file(plugin_id, path, name=None, replace=True, autoload=True)
fg.unregister_plugin(plugin_id)
fg.unregister_scripts(plugin_id)
```

Методы активности:

```python
fg.set_plugin_active(plugin_id, active=True, reason="", autoload=True)
fg.activate_plugin(plugin_id, reason="plugin_load", autoload=True)
fg.deactivate_plugin(plugin_id, reason="plugin_unload", autoload=True)

fg.set_script_enabled(entry_id=None, plugin_id=None, name=None, index=None, enabled=True, autoload=True, reason="manual")
fg.set_script_active(entry_id=None, plugin_id=None, name=None, index=None, active=True, autoload=True, reason="manual")
fg.activate_script(entry_id=None, plugin_id=None, name=None, index=None, autoload=True, reason="manual")
fg.deactivate_script(entry_id=None, plugin_id=None, name=None, index=None, autoload=True, reason="manual")
fg.enable_script(...)
fg.disable_script(...)
```

Методы состояния и логов:

```python
fg.execute()
fg.status()
fg.registered_plugins()
fg.list_scripts(include_source=False)
fg.scripts(include_source=False)
fg.read_logs(plugin_id=None, after=0, limit=200)
fg.clear_logs()
```

`register_script(...)` возвращает словарь такого вида:

```python
{
    "ok": True,
    "plugin_id": "MyFridaHook",
    "scripts": 1,
    "entry": {
        "id": "MyFridaHook:...",
        "plugin_id": "MyFridaHook",
        "name": "my-hook.js",
        "enabled": True,
        "active": True,
        "inactive_reason": "",
        "needs_java": False,
        "bytes": 1234,
    },
}
```

`status()` возвращает:

```python
{
    "loaded": True,
    "interaction": "script",
    "registered": [...],
    "scripts": [...],
    "script_path": ".../fridagadget_modules/gadget.js",
    "log_transport": "api-memory",
    "log_port": 12345,
    "push_port": 42792,
    "version": "17.9.10",
    "last_status": "...",
    "last_error": "",
}
```

`read_logs(...)` возвращает:

```python
{
    "next": 10,
    "entries": [
        {
            "line": 1,
            "ts": 1710000000000,
            "source": "MyFridaHook",
            "level": "log",
            "message": "script loaded",
        }
    ],
    "transport": "api-memory",
}
```

Для чтения только своих логов передавайте `plugin_id=__id__`.

## Lifecycle для зависимого плагина

Рекомендуемый flow:

1. В `on_plugin_load()` лениво импортировать `frida_gadget_api`.
2. Проверить `API_VERSION >= 2`.
3. Вызвать `register_script(__id__, script, name=..., replace=True, autoload=True)`.
4. В `on_plugin_unload()` вызвать `unregister_plugin(__id__)`.

`replace=True` удобно использовать при разработке: повторная загрузка вашего плагина заменит старый script entry.

`autoload=True` означает, что FridaGadget сразу попробует применить bundle. Если Gadget еще не загружен, он запишет config и загрузит native library. Если Gadget уже загружен в `script` interaction, он перезапишет `gadget.js` и обновит mtime.

Native Gadget нельзя нормально выгрузить из процесса. Если он уже загружен в другом interaction mode, API вернет `restart_required=True`; тогда нужен restart ExteraGram.

## enabled и active

Каждый script entry имеет два флага:

- `enabled` - persistent-флаг, который выключает entry до явного включения.
- `active` - текущая активность entry в bundle.

Активный script должен иметь оба флага:

```text
enabled = True
active = True
```

Если owner-плагин найден и отключен, FridaGadget registry watcher помечает его entries как inactive с `inactive_reason="owner_unloaded"`. Когда owner снова включается, активность может быть восстановлена.

## JS runtime API

Каждый зарегистрированный JS запускается внутри wrapper-функции:

```js
function (fridaGadget, console, Java) {
  // user script
}
```

Доступные helpers:

```js
fridaGadget.log(...args)
fridaGadget.warn(...args)
fridaGadget.error(...args)
fridaGadget.mark(stage)
fridaGadget.onInit(handler)
fridaGadget.onDispose(handler)
fridaGadget.diagnose(stage)
fridaGadget.javaState()
fridaGadget.javaNotice()
```

`console.log`, `console.warn` и `console.error` переадресованы в `fridaGadget.log/warn/error`. Эти записи доступны через `fg.read_logs(...)` и ADB push API.

Native-only пример:

```js
'use strict';

fridaGadget.log('Frida version', Frida.version);

fridaGadget.onInit(function (stage) {
  fridaGadget.log('init stage', stage);
  fridaGadget.diagnose('native-init');
});
```

`onInit(handler)` вызывается из `rpc.exports.init`, когда Frida Gadget применяет script interaction. Сам user script также выполняется сразу при загрузке bundle.

`onDispose(handler)` регистрируется для unload/reload path внутри generated bundle. Native library при этом из процесса не выгружается.

## Java bridge

Во Frida 17.x `Java` больше не встроен в GumJS. Чтобы запросить Java bridge, добавьте в script одну из строк:

```js
import Java from "frida-java-bridge";
```

или:

```js
// @frida-gadget use java
```

`import Java from "frida-java-bridge";` используется как marker и удаляется при регистрации. Сам объект `Java` передается третьим аргументом wrapper-функции после подключения `java_bridge_prelude.js`.

Пример:

```js
'use strict';
// @frida-gadget use java

fridaGadget.onInit(function () {
  fridaGadget.log('java state', JSON.stringify(fridaGadget.javaState()));

  if (!Java || !Java.available) {
    fridaGadget.javaNotice();
    return;
  }

  Java.perform(function () {
    var Log = Java.use('android.util.Log');
    Log.i('FridaGadget', 'Java bridge works');
  });
});
```

`java_bridge_prelude.js` должен лежать на устройстве рядом с Gadget:

```text
<app files>/fridagadget_modules/java_bridge_prelude.js
```

Если active script требует Java, но prelude отсутствует, bundle загрузится, а в логах будет ошибка вида:

```text
Script requested Java bridge, but java_bridge_prelude.js is missing
```

## ADB push server

Switch `Включить dev сервер` поднимает TCP server внутри приложения. В settings UI строка `ADB push server` показывает только адрес:

```text
127.0.0.1:<port>
```

Порт по умолчанию:

```text
42792
```

С ПК нужно вручную сделать port forward:

```cmd
adb forward tcp:42792 tcp:42792
```

Протокол: один JSON object на строку, ответ тоже JSON на строку.

Ping:

```json
{"action":"ping"}
```

Регистрация script:

```json
{"action":"register_script","plugin_id":"adb","name":"test.js","script":"fridaGadget.log('hello from adb')","replace":true,"autoload":true}
```

Статус:

```json
{"action":"status"}
```

Логи:

```json
{"action":"logs","plugin_id":"adb","after":0,"limit":100}
```

Поддерживаемые actions:

- `ping`
- `status`
- `scripts`, `list_scripts`, `list`
- `logs`, `read_logs`
- `clear_logs`
- `execute`, `run`
- `register_script`, `push_script`, `push`
- `unregister_plugin`, `unregister`
- `set_plugin_active`, `activate_plugin`, `deactivate_plugin`
- `set_script_active`, `activate_script`, `deactivate_script`, `toggle_script`
- `set_script_enabled`, `enable_script_persistent`, `disable_script_persistent`

Если передать `script_b64`, сервер декодирует base64. Если передать `path`, файл читается на стороне устройства, не на ПК.

Минимальный ПК-клиент:

```python
import json
import socket

req = {
    "action": "register_script",
    "plugin_id": "adb",
    "name": "hello.js",
    "script": "fridaGadget.log('hello')",
    "replace": True,
    "autoload": True,
}

sock = socket.create_connection(("127.0.0.1", 42792), timeout=5)
sock.sendall((json.dumps(req) + "\n").encode("utf-8"))
print(sock.recv(1024 * 1024).decode("utf-8", "replace"))
sock.close()
```

## Settings UI

Текущий runtime UI FridaGadget:

- `Включить dev сервер` - включает или выключает ADB push API.
- `ADB push server` - показывает `127.0.0.1:<port>` или `Выключен`.
- `Скрипты` - список registered entries.

В списке скриптов действие видно прямо в заголовке строки:

```text
Load: plugin/name
Unload: plugin/name
```

`Load` ставит `enabled=True` и `active=True`. `Unload` ставит `active=False`.

## Файлы на устройстве

После инициализации FridaGadget работает в папке:

```text
<app files>/fridagadget_modules/
```

Типичный layout:

```text
fridagadget_modules/
  libfrida-gadget.so
  libfrida-gadget.version
  libfrida-gadget.config
  libfrida-gadget.so.config
  libfrida-gadget.config.so
  gadget.js
  java_bridge_prelude.js
  frida-script-hit.txt
```

## Диагностика

Проверить API из зависимого плагина:

```python
fg = _frida_api()
if fg is not None:
    self.log("Frida status: %s" % fg.status())
    self.log("Frida logs: %s" % fg.read_logs(plugin_id=__id__, limit=20))
```


- Не добавлять непроверенные metadata поля вроде `__sdk_version__`.
- После изменения `FridaGadget.plugin` синхронизировать `FridaGadget.py`.
- После изменения settings UI держать подписи короткими.
- После изменения download URL проверять реальный HTTP status, размер и формат файла.
- После изменения prelude пересобрать `java_bridge_prelude.js` и проверить `node static-check.js`.
