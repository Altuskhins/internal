# FridaGadget для разработчиков плагинов

Эта документация для разработчиков других плагинов, которым нужно выполнить Frida JS внутри ExteraGram через `FridaGadget.plugin`.

`FridaGadget` загружает `libfrida-gadget.so`, пишет рядом с ней конфиг, собирает `gadget.js` из скриптов других плагинов и открывает модуль `frida_gadget_api`.

Скрипт Frida выполняется в процессе ExteraGram. Проверяйте код перед загрузкой.

## Короткий пример

Импортируйте API отложенно. Не пишите `import frida_gadget_api` на уровне файла: ваш плагин может загрузиться раньше `FridaGadget`, и импорт упадет.

```python
def _frida_api():
    try:
        import frida_gadget_api as fg
        return fg
    except Exception:
        return None
```

Минимальный плагин:

```python
__id__ = "MyFridaHook"
__name__ = "My Frida Hook"
__description__ = "Пример плагина для FridaGadget"
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
        self.log("FridaGadget result: %s" % result)

    def on_plugin_unload(self):
        fg = _frida_api()
        if fg is not None:
            try:
                fg.unregister_plugin(__id__)
            except Exception as exc:
                self.log("FridaGadget unregister failed: %s" % exc)
```

## Что делает плагин

- Загружает `libfrida-gadget.so` через `System.load(...)`.
- Пишет конфиги Frida Gadget рядом с `.so`.
- Создает общий `gadget.js` из активных записей.
- Открывает модуль `frida_gadget_api` для других плагинов.
- Поднимает `ADB push server` на `127.0.0.1:42792`.
- Хранит JS-логи в памяти и отдает их через API.

## API Python

Модуль:

```python
import frida_gadget_api as fg
```

Текущая версия:

```python
fg.API_VERSION == 2
```

Регистрация скриптов:

```python
fg.register_script(plugin_id, script, name=None, replace=True, autoload=True)
fg.register_script_file(plugin_id, path, name=None, replace=True, autoload=True)
fg.unregister_plugin(plugin_id)
fg.unregister_scripts(plugin_id)
```

Включение и выключение:

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

Состояние и логи:

```python
fg.execute()
fg.status()
fg.registered_plugins()
fg.list_scripts(include_source=False)
fg.scripts(include_source=False)
fg.read_logs(plugin_id=None, after=0, limit=200)
fg.clear_logs()
```

Ответ `register_script(...)`:

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

Для своих логов передавайте `plugin_id=__id__`:

```python
logs = fg.read_logs(plugin_id=__id__, limit=50)
```

## Как подключать из своего плагина

Обычный порядок такой:

1. В `on_plugin_load()` получить `fg = _frida_api()`.
2. Проверить `fg` и `fg.API_VERSION`.
3. Вызвать `fg.register_script(__id__, script, name=..., replace=True, autoload=True)`.
4. В `on_plugin_unload()` вызвать `fg.unregister_plugin(__id__)`.

`replace=True` заменяет старый скрипт при повторной загрузке вашего плагина.

`autoload=True` сразу применяет изменения. Если Gadget еще не загружен, `FridaGadget` запишет конфиг и загрузит `.so`. Если Gadget уже работает в режиме `script`, он перезапишет `gadget.js` и обновит время файла.

Native-библиотеку нельзя нормально выгрузить из процесса. Если Gadget уже загружен в другом режиме, API вернет `restart_required=True`. В этом случае перезапустите ExteraGram.

## Флаги enabled и active

У каждой записи есть два флага:

- `enabled` - постоянное включение записи.
- `active` - участвует ли запись в текущем `gadget.js`.

Для запуска нужны оба:

```text
enabled = True
active = True
```

Если плагин-владелец выключен, `FridaGadget` помечает его записи как неактивные с причиной `owner_unloaded`.

## API внутри JS

Ваш JS запускается так:

```js
function (fridaGadget, console, Java) {
  // ваш код
}
```

Доступные функции:

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

`console.log`, `console.warn` и `console.error` тоже попадают в лог FridaGadget.

Пример без Java:

```js
'use strict';

fridaGadget.log('Frida version', Frida.version);

fridaGadget.onInit(function (stage) {
  fridaGadget.log('init stage', stage);
  fridaGadget.diagnose('native-init');
});
```

`onInit(handler)` вызывается, когда Frida применяет скрипт. Сам JS-код выполняется при загрузке `gadget.js`.

## Java-мост

Во Frida 17.x объекта `Java` нет в GumJS по умолчанию. Чтобы запросить Java-мост, добавьте в скрипт одну из строк:

```js
import Java from "frida-java-bridge";
```

или:

```js
// @frida-gadget use java
```

Строка `import Java from "frida-java-bridge";` служит меткой и удаляется при регистрации. Объект `Java` передается третьим аргументом после подключения `java_bridge_prelude.js`.

```js
'use strict';
// @frida-gadget use java

fridaGadget.onInit(function () {
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

Файл `java_bridge_prelude.js` должен лежать рядом с Gadget:

```text
<app files>/fridagadget_modules/java_bridge_prelude.js
```

Если скрипт просит Java, а файла нет, запуск не падает полностью. Ошибка уйдет в лог:

```text
Script requested Java bridge, but java_bridge_prelude.js is missing
```

## Сервер ADB push

Переключатель `Включить dev сервер` поднимает TCP-сервер внутри приложения. В настройках строка `ADB push server` показывает только адрес:

```text
127.0.0.1:<port>
```

Порт по умолчанию:

```text
42792
```

На ПК пробросьте порт:

```cmd
adb forward tcp:42792 tcp:42792
```

Протокол простой: один JSON на строку, ответ тоже одной строкой.

```json
{"action":"ping"}
```

```json
{"action":"register_script","plugin_id":"adb","name":"test.js","script":"fridaGadget.log('hello from adb')","replace":true,"autoload":true}
```

```json
{"action":"status"}
```

```json
{"action":"logs","plugin_id":"adb","after":0,"limit":100}
```

Действия:

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

`script_b64` передает скрипт в base64. `path` читает файл на стороне устройства, не на ПК.

Пример с ПК:

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

## Настройки

- `Включить dev сервер` - включает сервер ADB push.
- `ADB push server` - показывает `127.0.0.1:<port>` или `Выключен`.
- `Скрипты` - показывает зарегистрированные скрипты.

В списке скриптов действие указано в строке:

```text
Load: plugin/name
Unload: plugin/name
```

`Load` ставит `enabled=True` и `active=True`. `Unload` ставит `active=False`.

## Файлы на устройстве

Рабочая папка:

```text
<app files>/fridagadget_modules/
```

Обычные файлы:

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

## Проверка и отладка

Из зависимого плагина:

```python
fg = _frida_api()
if fg is not None:
    self.log("Frida status: %s" % fg.status())
    self.log("Frida logs: %s" % fg.read_logs(plugin_id=__id__, limit=20))
```

Частые проблемы:

- `Frida Gadget plugin is not loaded`: `FridaGadget` выключен или API импортировали слишком рано.
- `restart_required: True`: Gadget уже загружен не в режиме `script`; нужен перезапуск ExteraGram.
- `.so не найден`: Gadget не скачался или файл не прошел проверку размера.
- `Java is unavailable`: нет `java_bridge_prelude.js`, он не загрузился или Java еще недоступна.
- Скрипт есть в настройках, но не работает: проверьте `enabled`, `active`, `inactive_reason` и `fg.execute()`.
