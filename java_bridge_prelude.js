(()=>{var or=Object.defineProperty;var xo=(t,e,n)=>e in t?or(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oo=(t,e)=>{for(var n in e)or(t,n,{get:e[n],enumerable:!0})};var ue=(t,e,n)=>xo(t,typeof e!="symbol"?e+"":e,n);var Lt={};Oo(Lt,{ArtMethod:()=>bt,ArtStackVisitor:()=>pn,DVM_JNI_ENV_OFFSET_SELF:()=>Lr,HandleVector:()=>Ye,VariableSizedHandleScope:()=>Xe,backtrace:()=>wn,deoptimizeBootImage:()=>jn,deoptimizeEverything:()=>Mn,deoptimizeMethod:()=>An,ensureClassInitialized:()=>ri,getAndroidApiLevel:()=>X,getAndroidVersion:()=>et,getApi:()=>J,getArtApexVersion:()=>yn,getArtClassSpec:()=>Sn,getArtFieldSpec:()=>It,getArtMethodSpec:()=>pe,getArtThreadFromEnv:()=>Tt,getArtThreadSpec:()=>ze,makeArtClassLoaderVisitor:()=>Ln,makeArtClassVisitor:()=>Tn,makeMethodMangler:()=>Ki,makeObjectVisitorPredicate:()=>On,revertGlobalPatches:()=>kn,translateMethod:()=>Qi,withAllArtThreadsSuspended:()=>In,withRunnableArtThread:()=>_e});var{pageSize:xt,pointerSize:Po}=Process,Ot=class{constructor(e){this.sliceSize=e,this.slicesPerPage=xt/e,this.pages=[],this.free=[]}allocateSlice(e,n){let r=e.near===void 0,o=n===1;if(r&&o){let s=this.free.pop();if(s!==void 0)return s}else if(n<xt){let{free:s}=this,i=s.length,l=o?null:ptr(n-1);for(let a=0;a!==i;a++){let c=s[a],d=r||this._isSliceNear(c,e),f=o||c.and(l).isNull();if(d&&f)return s.splice(a,1)[0]}}return this._allocatePage(e)}_allocatePage(e){let n=Memory.alloc(xt,e),{sliceSize:r,slicesPerPage:o}=this;for(let s=1;s!==o;s++){let i=n.add(s*r);this.free.push(i)}return this.pages.push(n),n}_isSliceNear(e,n){let r=e.add(this.sliceSize),{near:o,maxDistance:s}=n,i=sr(o.sub(e)),l=sr(o.sub(r));return i.compare(s)<=0&&l.compare(s)<=0}freeSlice(e){this.free.push(e)}};function sr(t){let e=Po===4?31:63,n=ptr(1).shl(e).not();return t.and(n)}function Pt(t){return new Ot(t)}function ie(t,e){if(e!==0)throw new Error(t+" failed: "+e)}var lt={v1_0:805371904,v1_2:805372416},ct={canTagObjects:1},{pointerSize:Ro}=Process,Fo={exceptions:"propagate"};function Ce(t,e){this.handle=t,this.vm=e,this.vtable=t.readPointer()}Ce.prototype.deallocate=Ze(47,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});Ce.prototype.getLoadedClasses=Ze(78,"int32",["pointer","pointer","pointer"],function(t,e,n){let r=t(this.handle,e,n);ie("EnvJvmti::getLoadedClasses",r)});Ce.prototype.iterateOverInstancesOfClass=Ze(112,"int32",["pointer","pointer","int","pointer","pointer"],function(t,e,n,r,o){let s=t(this.handle,e,n,r,o);ie("EnvJvmti::iterateOverInstancesOfClass",s)});Ce.prototype.getObjectsWithTags=Ze(114,"int32",["pointer","int","pointer","pointer","pointer","pointer"],function(t,e,n,r,o,s){let i=t(this.handle,e,n,r,o,s);ie("EnvJvmti::getObjectsWithTags",i)});Ce.prototype.addCapabilities=Ze(142,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});function Ze(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(this.vtable.add((t-1)*Ro).readPointer(),e,n,Fo));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}function Ie(t,e,{limit:n}){let r=t,o=null;for(let s=0;s!==n;s++){let i=Instruction.parse(r),l=e(i,o);if(l!==null)return l;r=i.next,o=i}return null}function ae(t){let e=null,n=!1;return function(...r){return n||(e=t(...r),n=!0),e}}function b(t,e){this.handle=t,this.vm=e}var dt=Process.pointerSize,we=2,Do=28,zo=34,Uo=37,Vo=40,Jo=43,Go=46,Ho=49,$o=52,Zo=55,Bo=58,qo=61,Wo=64,Ko=67,Qo=70,Yo=73,Xo=76,es=79,ts=82,ns=85,rs=88,os=91,ss=114,as=117,is=120,ls=123,cs=126,ds=129,us=132,ps=135,fs=138,hs=141,_s=95,ms=96,gs=97,bs=98,vs=99,ys=100,Es=101,Ss=102,Cs=103,Is=104,Ts=105,Ls=106,ws=107,ks=108,Ns=109,As=110,Ms=111,js=112,xs=145,Os=146,Ps=147,Rs=148,Fs=149,Ds=150,zs=151,Us=152,Vs=153,Js=154,Gs=155,Hs=156,$s=157,Zs=158,Bs=159,qs=160,Ws=161,Ks=162,Qs={pointer:zo,uint8:Uo,int8:Vo,uint16:Jo,int16:Go,int32:Ho,int64:$o,float:Zo,double:Bo,void:qo},Ys={pointer:Wo,uint8:Ko,int8:Qo,uint16:Yo,int16:Xo,int32:es,int64:ts,float:ns,double:rs,void:os},Xs={pointer:ss,uint8:as,int8:is,uint16:ls,int16:cs,int32:ds,int64:us,float:ps,double:fs,void:hs},ea={pointer:_s,uint8:ms,int8:gs,uint16:bs,int16:vs,int32:ys,int64:Es,float:Ss,double:Cs},ta={pointer:Is,uint8:Ts,int8:Ls,uint16:ws,int16:ks,int32:Ns,int64:As,float:Ms,double:js},na={pointer:xs,uint8:Os,int8:Ps,uint16:Rs,int16:Fs,int32:Ds,int64:zs,float:Us,double:Vs},ra={pointer:Js,uint8:Gs,int8:Hs,uint16:$s,int16:Zs,int32:Bs,int64:qs,float:Ws,double:Ks},ir={exceptions:"propagate"},Rt=null,Bt=[];b.dispose=function(t){Bt.forEach(t.deleteGlobalRef,t),Bt=[]};function Ae(t){return Bt.push(t),t}function ut(t){return Rt===null&&(Rt=t.handle.readPointer()),Rt}function k(t,e,n,r){let o=null;return function(){o===null&&(o=new NativeFunction(ut(this).add(t*dt).readPointer(),e,n,ir));let s=[o];return s=s.concat.apply(s,arguments),r.apply(this,s)}}b.prototype.getVersion=k(4,"int32",["pointer"],function(t){return t(this.handle)});b.prototype.findClass=k(6,"pointer",["pointer","pointer"],function(t,e){let n=t(this.handle,Memory.allocUtf8String(e));return this.throwIfExceptionPending(),n});b.prototype.throwIfExceptionPending=function(){let t=this.exceptionOccurred();if(t.isNull())return;this.exceptionClear();let e=this.newGlobalRef(t);this.deleteLocalRef(t);let n=this.vaMethod("pointer",[])(this.handle,e,this.javaLangObject().toString),r=this.stringFromJni(n);this.deleteLocalRef(n);let o=new Error(r);throw o.$h=e,Script.bindWeak(o,oa(this.vm,e)),o};function oa(t,e){return function(){t.perform(n=>{n.deleteGlobalRef(e)})}}b.prototype.fromReflectedMethod=k(7,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.fromReflectedField=k(8,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.toReflectedMethod=k(9,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});b.prototype.getSuperclass=k(10,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.isAssignableFrom=k(11,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});b.prototype.toReflectedField=k(12,"pointer",["pointer","pointer","pointer","uint8"],function(t,e,n,r){return t(this.handle,e,n,r)});b.prototype.throw=k(13,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.exceptionOccurred=k(15,"pointer",["pointer"],function(t){return t(this.handle)});b.prototype.exceptionDescribe=k(16,"void",["pointer"],function(t){t(this.handle)});b.prototype.exceptionClear=k(17,"void",["pointer"],function(t){t(this.handle)});b.prototype.pushLocalFrame=k(19,"int32",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.popLocalFrame=k(20,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.newGlobalRef=k(21,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.deleteGlobalRef=k(22,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});b.prototype.deleteLocalRef=k(23,"void",["pointer","pointer"],function(t,e){t(this.handle,e)});b.prototype.isSameObject=k(24,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});b.prototype.newLocalRef=k(25,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.allocObject=k(27,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.getObjectClass=k(31,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.isInstanceOf=k(32,"uint8",["pointer","pointer","pointer"],function(t,e,n){return!!t(this.handle,e,n)});b.prototype.getMethodId=k(33,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});b.prototype.getFieldId=k(94,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});b.prototype.getIntField=k(100,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});b.prototype.getStaticMethodId=k(113,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});b.prototype.getStaticFieldId=k(144,"pointer",["pointer","pointer","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,Memory.allocUtf8String(n),Memory.allocUtf8String(r))});b.prototype.getStaticIntField=k(150,"int32",["pointer","pointer","pointer"],function(t,e,n){return t(this.handle,e,n)});b.prototype.getStringLength=k(164,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.getStringChars=k(165,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.releaseStringChars=k(166,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});b.prototype.newStringUtf=k(167,"pointer",["pointer","pointer"],function(t,e){let n=Memory.allocUtf8String(e);return t(this.handle,n)});b.prototype.getStringUtfChars=k(169,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.releaseStringUtfChars=k(170,"void",["pointer","pointer","pointer"],function(t,e,n){t(this.handle,e,n)});b.prototype.getArrayLength=k(171,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.newObjectArray=k(172,"pointer",["pointer","int32","pointer","pointer"],function(t,e,n,r){return t(this.handle,e,n,r)});b.prototype.getObjectArrayElement=k(173,"pointer",["pointer","pointer","int32"],function(t,e,n){return t(this.handle,e,n)});b.prototype.setObjectArrayElement=k(174,"void",["pointer","pointer","int32","pointer"],function(t,e,n,r){t(this.handle,e,n,r)});b.prototype.newBooleanArray=k(175,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newByteArray=k(176,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newCharArray=k(177,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newShortArray=k(178,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newIntArray=k(179,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newLongArray=k(180,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newFloatArray=k(181,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.newDoubleArray=k(182,"pointer",["pointer","int32"],function(t,e){return t(this.handle,e)});b.prototype.getBooleanArrayElements=k(183,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getByteArrayElements=k(184,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getCharArrayElements=k(185,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getShortArrayElements=k(186,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getIntArrayElements=k(187,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getLongArrayElements=k(188,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getFloatArrayElements=k(189,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.getDoubleArrayElements=k(190,"pointer",["pointer","pointer","pointer"],function(t,e){return t(this.handle,e,NULL)});b.prototype.releaseBooleanArrayElements=k(191,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseByteArrayElements=k(192,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseCharArrayElements=k(193,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseShortArrayElements=k(194,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseIntArrayElements=k(195,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseLongArrayElements=k(196,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseFloatArrayElements=k(197,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.releaseDoubleArrayElements=k(198,"pointer",["pointer","pointer","pointer","int32"],function(t,e,n){t(this.handle,e,n,we)});b.prototype.getByteArrayRegion=k(200,"void",["pointer","pointer","int","int","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setBooleanArrayRegion=k(207,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setByteArrayRegion=k(208,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setCharArrayRegion=k(209,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setShortArrayRegion=k(210,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setIntArrayRegion=k(211,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setLongArrayRegion=k(212,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setFloatArrayRegion=k(213,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.setDoubleArrayRegion=k(214,"void",["pointer","pointer","int32","int32","pointer"],function(t,e,n,r,o){t(this.handle,e,n,r,o)});b.prototype.registerNatives=k(215,"int32",["pointer","pointer","pointer","int32"],function(t,e,n,r){return t(this.handle,e,n,r)});b.prototype.monitorEnter=k(217,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.monitorExit=k(218,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.getDirectBufferAddress=k(230,"pointer",["pointer","pointer"],function(t,e){return t(this.handle,e)});b.prototype.getObjectRefType=k(232,"int32",["pointer","pointer"],function(t,e){return t(this.handle,e)});var ar=new Map;function pt(t,e,n,r){return Wt(this,"p",aa,t,e,n,r)}function qt(t,e,n,r){return Wt(this,"v",ia,t,e,n,r)}function sa(t,e,n,r){return Wt(this,"n",la,t,e,n,r)}function Wt(t,e,n,r,o,s,i){if(i!==void 0)return n(t,r,o,s,i);let l=[r,e,o].concat(s).join("|"),a=ar.get(l);return a===void 0&&(a=n(t,r,o,s,ir),ar.set(l,a)),a}function aa(t,e,n,r,o){return new NativeFunction(ut(t).add(e*dt).readPointer(),n,["pointer","pointer","pointer"].concat(r),o)}function ia(t,e,n,r,o){return new NativeFunction(ut(t).add(e*dt).readPointer(),n,["pointer","pointer","pointer","..."].concat(r),o)}function la(t,e,n,r,o){return new NativeFunction(ut(t).add(e*dt).readPointer(),n,["pointer","pointer","pointer","pointer","..."].concat(r),o)}b.prototype.constructor=function(t,e){return qt.call(this,Do,"pointer",t,e)};b.prototype.vaMethod=function(t,e,n){let r=Qs[t];if(r===void 0)throw new Error("Unsupported type: "+t);return qt.call(this,r,t,e,n)};b.prototype.nonvirtualVaMethod=function(t,e,n){let r=Ys[t];if(r===void 0)throw new Error("Unsupported type: "+t);return sa.call(this,r,t,e,n)};b.prototype.staticVaMethod=function(t,e,n){let r=Xs[t];if(r===void 0)throw new Error("Unsupported type: "+t);return qt.call(this,r,t,e,n)};b.prototype.getField=function(t){let e=ea[t];if(e===void 0)throw new Error("Unsupported type: "+t);return pt.call(this,e,t,[])};b.prototype.getStaticField=function(t){let e=na[t];if(e===void 0)throw new Error("Unsupported type: "+t);return pt.call(this,e,t,[])};b.prototype.setField=function(t){let e=ta[t];if(e===void 0)throw new Error("Unsupported type: "+t);return pt.call(this,e,"void",[t])};b.prototype.setStaticField=function(t){let e=ra[t];if(e===void 0)throw new Error("Unsupported type: "+t);return pt.call(this,e,"void",[t])};var Ft=null;b.prototype.javaLangClass=function(){if(Ft===null){let t=this.findClass("java/lang/Class");try{let e=this.getMethodId.bind(this,t);Ft={handle:Ae(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getSimpleName:e("getSimpleName","()Ljava/lang/String;"),getGenericSuperclass:e("getGenericSuperclass","()Ljava/lang/reflect/Type;"),getDeclaredConstructors:e("getDeclaredConstructors","()[Ljava/lang/reflect/Constructor;"),getDeclaredMethods:e("getDeclaredMethods","()[Ljava/lang/reflect/Method;"),getDeclaredFields:e("getDeclaredFields","()[Ljava/lang/reflect/Field;"),isArray:e("isArray","()Z"),isPrimitive:e("isPrimitive","()Z"),isInterface:e("isInterface","()Z"),getComponentType:e("getComponentType","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return Ft};var Dt=null;b.prototype.javaLangObject=function(){if(Dt===null){let t=this.findClass("java/lang/Object");try{let e=this.getMethodId.bind(this,t);Dt={handle:Ae(this.newGlobalRef(t)),toString:e("toString","()Ljava/lang/String;"),getClass:e("getClass","()Ljava/lang/Class;")}}finally{this.deleteLocalRef(t)}}return Dt};var zt=null;b.prototype.javaLangReflectConstructor=function(){if(zt===null){let t=this.findClass("java/lang/reflect/Constructor");try{zt={getGenericParameterTypes:this.getMethodId(t,"getGenericParameterTypes","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return zt};var Ut=null;b.prototype.javaLangReflectMethod=function(){if(Ut===null){let t=this.findClass("java/lang/reflect/Method");try{let e=this.getMethodId.bind(this,t);Ut={getName:e("getName","()Ljava/lang/String;"),getGenericParameterTypes:e("getGenericParameterTypes","()[Ljava/lang/reflect/Type;"),getParameterTypes:e("getParameterTypes","()[Ljava/lang/Class;"),getGenericReturnType:e("getGenericReturnType","()Ljava/lang/reflect/Type;"),getGenericExceptionTypes:e("getGenericExceptionTypes","()[Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),isVarArgs:e("isVarArgs","()Z")}}finally{this.deleteLocalRef(t)}}return Ut};var Vt=null;b.prototype.javaLangReflectField=function(){if(Vt===null){let t=this.findClass("java/lang/reflect/Field");try{let e=this.getMethodId.bind(this,t);Vt={getName:e("getName","()Ljava/lang/String;"),getType:e("getType","()Ljava/lang/Class;"),getGenericType:e("getGenericType","()Ljava/lang/reflect/Type;"),getModifiers:e("getModifiers","()I"),toString:e("toString","()Ljava/lang/String;")}}finally{this.deleteLocalRef(t)}}return Vt};var Jt=null;b.prototype.javaLangReflectTypeVariable=function(){if(Jt===null){let t=this.findClass("java/lang/reflect/TypeVariable");try{let e=this.getMethodId.bind(this,t);Jt={handle:Ae(this.newGlobalRef(t)),getName:e("getName","()Ljava/lang/String;"),getBounds:e("getBounds","()[Ljava/lang/reflect/Type;"),getGenericDeclaration:e("getGenericDeclaration","()Ljava/lang/reflect/GenericDeclaration;")}}finally{this.deleteLocalRef(t)}}return Jt};var Gt=null;b.prototype.javaLangReflectWildcardType=function(){if(Gt===null){let t=this.findClass("java/lang/reflect/WildcardType");try{let e=this.getMethodId.bind(this,t);Gt={handle:Ae(this.newGlobalRef(t)),getLowerBounds:e("getLowerBounds","()[Ljava/lang/reflect/Type;"),getUpperBounds:e("getUpperBounds","()[Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Gt};var Ht=null;b.prototype.javaLangReflectGenericArrayType=function(){if(Ht===null){let t=this.findClass("java/lang/reflect/GenericArrayType");try{Ht={handle:Ae(this.newGlobalRef(t)),getGenericComponentType:this.getMethodId(t,"getGenericComponentType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return Ht};var $t=null;b.prototype.javaLangReflectParameterizedType=function(){if($t===null){let t=this.findClass("java/lang/reflect/ParameterizedType");try{let e=this.getMethodId.bind(this,t);$t={handle:Ae(this.newGlobalRef(t)),getActualTypeArguments:e("getActualTypeArguments","()[Ljava/lang/reflect/Type;"),getRawType:e("getRawType","()Ljava/lang/reflect/Type;"),getOwnerType:e("getOwnerType","()Ljava/lang/reflect/Type;")}}finally{this.deleteLocalRef(t)}}return $t};var Zt=null;b.prototype.javaLangString=function(){if(Zt===null){let t=this.findClass("java/lang/String");try{Zt={handle:Ae(this.newGlobalRef(t))}}finally{this.deleteLocalRef(t)}}return Zt};b.prototype.getClassName=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangClass().getName);try{return this.stringFromJni(e)}finally{this.deleteLocalRef(e)}};b.prototype.getObjectClassName=function(t){let e=this.getObjectClass(t);try{return this.getClassName(e)}finally{this.deleteLocalRef(e)}};b.prototype.getActualTypeArgument=function(t){let e=this.vaMethod("pointer",[])(this.handle,t,this.javaLangReflectParameterizedType().getActualTypeArguments);if(this.throwIfExceptionPending(),!e.isNull())try{return this.getTypeNameFromFirstTypeElement(e)}finally{this.deleteLocalRef(e)}};b.prototype.getTypeNameFromFirstTypeElement=function(t){if(this.getArrayLength(t)>0){let n=this.getObjectArrayElement(t,0);try{return this.getTypeName(n)}finally{this.deleteLocalRef(n)}}else return"java.lang.Object"};b.prototype.getTypeName=function(t,e){let n=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle))return this.getArrayTypeName(t);if(this.isInstanceOf(t,this.javaLangReflectParameterizedType().handle)){let r=n(this.handle,t,this.javaLangReflectParameterizedType().getRawType);this.throwIfExceptionPending();let o;try{o=this.getTypeName(r)}finally{this.deleteLocalRef(r)}return e&&(o+="<"+this.getActualTypeArgument(t)+">"),o}else return this.isInstanceOf(t,this.javaLangReflectTypeVariable().handle)||this.isInstanceOf(t,this.javaLangReflectWildcardType().handle),"java.lang.Object"};b.prototype.getArrayTypeName=function(t){let e=this.vaMethod("pointer",[]);if(this.isInstanceOf(t,this.javaLangClass().handle))return this.getClassName(t);if(this.isInstanceOf(t,this.javaLangReflectGenericArrayType().handle)){let n=e(this.handle,t,this.javaLangReflectGenericArrayType().getGenericComponentType);this.throwIfExceptionPending();try{return"[L"+this.getTypeName(n)+";"}finally{this.deleteLocalRef(n)}}else return"[Ljava.lang.Object;"};b.prototype.stringFromJni=function(t){let e=this.getStringChars(t);if(e.isNull())throw new Error("Unable to access string");try{let n=this.getStringLength(t);return e.readUtf16String(n)}finally{this.releaseStringChars(t,e)}};var lr=65542,Fe=Process.pointerSize,Kt=Process.getCurrentThreadId(),Me=new Map,Be=new Map;function ve(t){let e=t.vm,n=null,r=null,o=null;function s(){let l=e.readPointer(),a={exceptions:"propagate"};n=new NativeFunction(l.add(4*Fe).readPointer(),"int32",["pointer","pointer","pointer"],a),r=new NativeFunction(l.add(5*Fe).readPointer(),"int32",["pointer"],a),o=new NativeFunction(l.add(6*Fe).readPointer(),"int32",["pointer","pointer","int32"],a)}this.handle=e,this.perform=function(l){let a=Process.getCurrentThreadId(),c=i(a);if(c!==null)return l(c);let d=this._tryGetEnv(),f=d!==null;f||(d=this.attachCurrentThread(),Me.set(a,!0)),this.link(a,d);try{return l(d)}finally{let p=a===Kt;if(p||this.unlink(a),!f&&!p){let u=Me.get(a);Me.delete(a),u&&this.detachCurrentThread()}}},this.attachCurrentThread=function(){let l=Memory.alloc(Fe);return ie("VM::AttachCurrentThread",n(e,l,NULL)),new b(l.readPointer(),this)},this.detachCurrentThread=function(){ie("VM::DetachCurrentThread",r(e))},this.preventDetachDueToClassLoader=function(){let l=Process.getCurrentThreadId();Me.has(l)&&Me.set(l,!1)},this.getEnv=function(){let l=i(Process.getCurrentThreadId());if(l!==null)return l;let a=Memory.alloc(Fe),c=o(e,a,lr);if(c===-2)throw new Error("Current thread is not attached to the Java VM; please move this code inside a Java.perform() callback");return ie("VM::GetEnv",c),new b(a.readPointer(),this)},this.tryGetEnv=function(){let l=i(Process.getCurrentThreadId());return l!==null?l:this._tryGetEnv()},this._tryGetEnv=function(){let l=this.tryGetEnvHandle(lr);return l===null?null:new b(l,this)},this.tryGetEnvHandle=function(l){let a=Memory.alloc(Fe);return o(e,a,l)!==0?null:a.readPointer()},this.makeHandleDestructor=function(l){return()=>{this.perform(a=>{a.deleteGlobalRef(l)})}},this.link=function(l,a){let c=Be.get(l);c===void 0?Be.set(l,[a,1]):c[1]++},this.unlink=function(l){let a=Be.get(l);a[1]===1?Be.delete(l):a[1]--};function i(l){let a=Be.get(l);return a===void 0?null:a[0]}s.call(this)}ve.dispose=function(t){Me.get(Kt)===!0&&(Me.delete(Kt),t.detachCurrentThread())};var ca=4,y=Process.pointerSize,{readU32:da,readPointer:ua,writeU32:pa,writePointer:fa}=NativePointer.prototype,ha=1,_a=8,ma=16,mt=256,ga=524288,ba=2097152,Tr=1073741824,va=524288,ya=134217728,cr=1048576,Ea=2097152,Sa=268435456,Ca=268435456,Ia=0,ln=3,cn=5,vn=ptr(1).not(),Ta=2147467263,La=4294963200,Ct=17*y,wa=18*y,Lr=12,ka=112,Na=116,Aa=0,Yt=56,dr=4,Ma=8,ja=10,xa=12,Oa=14,Pa=28,Ra=36,Fa=0,Da=1,za=2,Ua=3,Va=4,Ja=5,Ga=6,Ha=7,ur=2147483648,$a=28,Qe=3*y,Za=3*y,Ba=1,qa=1,wr=ae(si),Wa=ae(bi),pe=ae(yi),ze=ae(Ei),Ka=ae(Si),Qa=ae(Mi),et=ae(Li),kr=ae(wi),X=ae(ki),yn=ae(Ni),Ya=ae(Pi),Xa=Process.arch==="ia32"?El:yl,q={exceptions:"propagate"},qe={},Xt=null,en=null,Nr=null,ne=null,En=[],gt=new Map,Ar=[],tn=null,pr=0,fr=!1,hr=!1,We=null,ei=[],nn=null,ft=null;function J(){return Xt===null&&(Xt=ti()),Xt}function ti(){let t=Process.enumerateModules().filter(u=>/^lib(art|dvm).so$/.test(u.name)).filter(u=>!/\/system\/fake-libs/.test(u.path));if(t.length===0)return null;let e=t[0],n=e.name.indexOf("art")!==-1?"art":"dalvik",r=n==="art",o={module:e,find(u){let{module:_}=this,h=_.findExportByName(u);return h===null&&(h=_.findSymbolByName(u)),h},flavor:n,addLocalReference:null};o.isApiLevel34OrApexEquivalent=r&&(o.find("_ZN3art7AppInfo29GetPrimaryApkReferenceProfileEv")!==null||o.find("_ZN3art6Thread15RunFlipFunctionEPS0_")!==null);let s=r?{functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],artInterpreterToCompiledCodeBridge:function(u){this.artInterpreterToCompiledCodeBridge=u},_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE:["art::JavaVMExt::AddGlobalRef","pointer",["pointer","pointer","pointer"]],_ZN3art17ReaderWriterMutex13ExclusiveLockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveLock","void",["pointer","pointer"]],_ZN3art17ReaderWriterMutex15ExclusiveUnlockEPNS_6ThreadE:["art::ReaderWriterMutex::ExclusiveUnlock","void",["pointer","pointer"]],_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],q)},_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE:function(u){this["art::IndirectReferenceTable::Add"]=new NativeFunction(u,"pointer",["pointer","uint","pointer"],q)},_ZN3art9JavaVMExt12DecodeGlobalEPv:function(u){let _;X()>=26?_=Xa(u,["pointer","pointer"]):_=new NativeFunction(u,"pointer",["pointer","pointer"],q),this["art::JavaVMExt::DecodeGlobal"]=function(h,m,g){return _(h,g)}},_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv:["art::JavaVMExt::DecodeGlobal","pointer",["pointer","pointer","pointer"]],_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZNK3art6Thread13DecodeJObjectEP8_jobject:["art::Thread::DecodeJObject","pointer",["pointer","pointer"]],_ZN3art10ThreadList10SuspendAllEPKcb:["art::ThreadList::SuspendAll","void",["pointer","pointer","bool"]],_ZN3art10ThreadList10SuspendAllEv:function(u){let _=new NativeFunction(u,"void",["pointer"],q);this["art::ThreadList::SuspendAll"]=function(h,m,g){return _(h)}},_ZN3art10ThreadList9ResumeAllEv:["art::ThreadList::ResumeAll","void",["pointer"]],_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE:["art::ClassLinker::VisitClasses","void",["pointer","pointer"]],_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_:function(u){let _=new NativeFunction(u,"void",["pointer","pointer","pointer"],q);this["art::ClassLinker::VisitClasses"]=function(h,m){_(h,m,NULL)}},_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE:["art::ClassLinker::VisitClassLoaders","void",["pointer","pointer"]],_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_:["art::gc::Heap::VisitObjects","void",["pointer","pointer","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:["art::gc::Heap::GetInstances","void",["pointer","pointer","pointer","int","pointer"]],_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE:function(u){let _=new NativeFunction(u,"void",["pointer","pointer","pointer","bool","int","pointer"],q);this["art::gc::Heap::GetInstances"]=function(h,m,g,v,I){_(h,m,g,0,v,I)}},_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","uint","bool"]],_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb:["art::StackVisitor::StackVisitor","void",["pointer","pointer","pointer","uint","size_t","bool"]],_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb:["art::StackVisitor::WalkStack","void",["pointer","bool"]],_ZNK3art12StackVisitor9GetMethodEv:["art::StackVisitor::GetMethod","pointer",["pointer"]],_ZNK3art12StackVisitor16DescribeLocationEv:function(u){this["art::StackVisitor::DescribeLocation"]=_t(u,["pointer"])},_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv:function(u){this["art::StackVisitor::GetCurrentQuickFrameInfo"]=Oi(u)},_ZN3art7Context6CreateEv:["art::Context::Create","pointer",[]],_ZN3art6Thread18GetLongJumpContextEv:["art::Thread::GetLongJumpContext","pointer",["pointer"]],_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE:function(u){this["art::mirror::Class::GetDescriptor"]=u},_ZN3art6mirror5Class11GetLocationEv:function(u){this["art::mirror::Class::GetLocation"]=_t(u,["pointer"])},_ZN3art9ArtMethod12PrettyMethodEb:function(u){this["art::ArtMethod::PrettyMethod"]=_t(u,["pointer","bool"])},_ZN3art12PrettyMethodEPNS_9ArtMethodEb:function(u){this["art::ArtMethod::PrettyMethodNullSafe"]=_t(u,["pointer","bool"])},_ZN3art6Thread14CurrentFromGdbEv:["art::Thread::CurrentFromGdb","pointer",[]],_ZN3art6mirror6Object5CloneEPNS_6ThreadE:function(u){this["art::mirror::Object::Clone"]=new NativeFunction(u,"pointer",["pointer","pointer"],q)},_ZN3art6mirror6Object5CloneEPNS_6ThreadEm:function(u){let _=new NativeFunction(u,"pointer",["pointer","pointer","pointer"],q);this["art::mirror::Object::Clone"]=function(h,m){let g=NULL;return _(h,m,g)}},_ZN3art6mirror6Object5CloneEPNS_6ThreadEj:function(u){let _=new NativeFunction(u,"pointer",["pointer","pointer","uint"],q);this["art::mirror::Object::Clone"]=function(h,m){return _(h,m,0)}},_ZN3art3Dbg14SetJdwpAllowedEb:["art::Dbg::SetJdwpAllowed","void",["bool"]],_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE:["art::Dbg::ConfigureJdwp","void",["pointer"]],_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv:["art::InternalDebuggerControlCallback::StartDebugger","void",["pointer"]],_ZN3art3Dbg9StartJdwpEv:["art::Dbg::StartJdwp","void",[]],_ZN3art3Dbg8GoActiveEv:["art::Dbg::GoActive","void",[]],_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE:["art::Dbg::RequestDeoptimization","void",["pointer"]],_ZN3art3Dbg20ManageDeoptimizationEv:["art::Dbg::ManageDeoptimization","void",[]],_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv:["art::Instrumentation::EnableDeoptimization","void",["pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc:["art::Instrumentation::DeoptimizeEverything","void",["pointer","pointer"]],_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv:function(u){let _=new NativeFunction(u,"void",["pointer"],q);this["art::Instrumentation::DeoptimizeEverything"]=function(h,m){_(h)}},_ZN3art7Runtime19DeoptimizeBootImageEv:["art::Runtime::DeoptimizeBootImage","void",["pointer"]],_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE:["art::Instrumentation::Deoptimize","void",["pointer","pointer"]],_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID:["art::jni::JniIdManager::DecodeMethodId","pointer",["pointer","pointer"]],_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID:["art::jni::JniIdManager::DecodeFieldId","pointer",["pointer","pointer"]],_ZN3art11interpreter18GetNterpEntryPointEv:["art::interpreter::GetNterpEntryPoint","pointer",[]],_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi:["art::Monitor::TranslateLocation","void",["pointer","uint32","pointer","pointer"]]},variables:{_ZN3art3Dbg9gRegistryE:function(u){this.isJdwpStarted=()=>!u.readPointer().isNull()},_ZN3art3Dbg15gDebuggerActiveE:function(u){this.isDebuggerActive=()=>!!u.readU8()}},optionals:new Set(["artInterpreterToCompiledCodeBridge","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art9JavaVMExt12AddGlobalRefEPNS_6ThreadEPNS_6mirror6ObjectE","_ZN3art9JavaVMExt12DecodeGlobalEPv","_ZN3art9JavaVMExt12DecodeGlobalEPNS_6ThreadEPv","_ZNK3art6Thread19DecodeGlobalJObjectEP8_jobject","_ZNK3art6Thread13DecodeJObjectEP8_jobject","_ZN3art10ThreadList10SuspendAllEPKcb","_ZN3art10ThreadList10SuspendAllEv","_ZN3art11ClassLinker12VisitClassesEPNS_12ClassVisitorE","_ZN3art11ClassLinker12VisitClassesEPFbPNS_6mirror5ClassEPvES4_","_ZNK3art11ClassLinker17VisitClassLoadersEPNS_18ClassLoaderVisitorE","_ZN3art6mirror6Object5CloneEPNS_6ThreadE","_ZN3art6mirror6Object5CloneEPNS_6ThreadEm","_ZN3art6mirror6Object5CloneEPNS_6ThreadEj","_ZN3art22IndirectReferenceTable3AddEjPNS_6mirror6ObjectE","_ZN3art22IndirectReferenceTable3AddENS_15IRTSegmentStateENS_6ObjPtrINS_6mirror6ObjectEEE","_ZN3art2gc4Heap12VisitObjectsEPFvPNS_6mirror6ObjectEPvES5_","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art2gc4Heap12GetInstancesERNS_24VariableSizedHandleScopeENS_6HandleINS_6mirror5ClassEEEbiRNSt3__16vectorINS4_INS5_6ObjectEEENS8_9allocatorISB_EEEE","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEjb","_ZN3art12StackVisitorC2EPNS_6ThreadEPNS_7ContextENS0_13StackWalkKindEmb","_ZN3art12StackVisitor9WalkStackILNS0_16CountTransitionsE0EEEvb","_ZNK3art12StackVisitor9GetMethodEv","_ZNK3art12StackVisitor16DescribeLocationEv","_ZNK3art12StackVisitor24GetCurrentQuickFrameInfoEv","_ZN3art7Context6CreateEv","_ZN3art6Thread18GetLongJumpContextEv","_ZN3art6mirror5Class13GetDescriptorEPNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE","_ZN3art6mirror5Class11GetLocationEv","_ZN3art9ArtMethod12PrettyMethodEb","_ZN3art12PrettyMethodEPNS_9ArtMethodEb","_ZN3art3Dbg13ConfigureJdwpERKNS_4JDWP11JdwpOptionsE","_ZN3art31InternalDebuggerControlCallback13StartDebuggerEv","_ZN3art3Dbg15gDebuggerActiveE","_ZN3art15instrumentation15Instrumentation20EnableDeoptimizationEv","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEPKc","_ZN3art15instrumentation15Instrumentation20DeoptimizeEverythingEv","_ZN3art7Runtime19DeoptimizeBootImageEv","_ZN3art15instrumentation15Instrumentation10DeoptimizeEPNS_9ArtMethodE","_ZN3art3Dbg9StartJdwpEv","_ZN3art3Dbg8GoActiveEv","_ZN3art3Dbg21RequestDeoptimizationERKNS_21DeoptimizationRequestE","_ZN3art3Dbg20ManageDeoptimizationEv","_ZN3art3Dbg9gRegistryE","_ZN3art3jni12JniIdManager14DecodeMethodIdEP10_jmethodID","_ZN3art3jni12JniIdManager13DecodeFieldIdEP9_jfieldID","_ZN3art11interpreter18GetNterpEntryPointEv","_ZN3art7Monitor17TranslateLocationEPNS_9ArtMethodEjPPKcPi"])}:{functions:{_Z20dvmDecodeIndirectRefP6ThreadP8_jobject:["dvmDecodeIndirectRef","pointer",["pointer","pointer"]],_Z15dvmUseJNIBridgeP6MethodPv:["dvmUseJNIBridge","void",["pointer","pointer"]],_Z20dvmHeapSourceGetBasev:["dvmHeapSourceGetBase","pointer",[]],_Z21dvmHeapSourceGetLimitv:["dvmHeapSourceGetLimit","pointer",[]],_Z16dvmIsValidObjectPK6Object:["dvmIsValidObject","uint8",["pointer"]],JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]]},variables:{gDvmJni:function(u){this.gDvmJni=u},gDvm:function(u){this.gDvm=u}}},{functions:i={},variables:l={},optionals:a=new Set}=s,c=[];for(let[u,_]of Object.entries(i)){let h=o.find(u);h!==null?typeof _=="function"?_.call(o,h):o[_[0]]=new NativeFunction(h,_[1],_[2],q):a.has(u)||c.push(u)}for(let[u,_]of Object.entries(l)){let h=o.find(u);h!==null?_.call(o,h):a.has(u)||c.push(u)}if(c.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+c.join(", "));let d=Memory.alloc(y),f=Memory.alloc(ca);if(ie("JNI_GetCreatedJavaVMs",o.JNI_GetCreatedJavaVMs(d,1,f)),f.readInt()===0)return null;if(o.vm=d.readPointer(),r){let u=X(),_;u>=27?_=33554432:u>=24?_=16777216:_=0,o.kAccCompileDontBother=_;let h=o.vm.add(y).readPointer();o.artRuntime=h;let m=wr(o),g=m.offset,v=g.instrumentation;o.artInstrumentation=v!==null?h.add(v):null,yn()>=36e7&&o.artInstrumentation!=null&&(o.artInstrumentation=o.artInstrumentation.readPointer()),o.artHeap=h.add(g.heap).readPointer(),o.artThreadList=h.add(g.threadList).readPointer();let L=h.add(g.classLinker).readPointer(),M=vi(h,m).offset,x=L.add(M.quickResolutionTrampoline).readPointer(),A=L.add(M.quickImtConflictTrampoline).readPointer(),N=L.add(M.quickGenericJniTrampoline).readPointer(),E=L.add(M.quickToInterpreterBridgeTrampoline).readPointer();o.artClassLinker={address:L,quickResolutionTrampoline:x,quickImtConflictTrampoline:A,quickGenericJniTrampoline:N,quickToInterpreterBridgeTrampoline:E};let w=new ve(o);o.artQuickGenericJniTrampoline=rn(N,w),o.artQuickToInterpreterBridge=rn(E,w),o.artQuickResolutionTrampoline=rn(x,w),o["art::JavaVMExt::AddGlobalRef"]===void 0&&(o["art::JavaVMExt::AddGlobalRef"]=hl(o)),o["art::JavaVMExt::DecodeGlobal"]===void 0&&(o["art::JavaVMExt::DecodeGlobal"]=_l(o)),o["art::ArtMethod::PrettyMethod"]===void 0&&(o["art::ArtMethod::PrettyMethod"]=o["art::ArtMethod::PrettyMethodNullSafe"]),o["art::interpreter::GetNterpEntryPoint"]!==void 0?o.artNterpEntryPoint=o["art::interpreter::GetNterpEntryPoint"]():o.artNterpEntryPoint=o.find("ExecuteNterpImpl"),ne=Di(o,w),vl(o);let j=null;Object.defineProperty(o,"jvmti",{get(){return j===null&&(j=[ni(w,this.artRuntime)]),j[0]}})}let p=e.enumerateImports().filter(u=>u.name.indexOf("_Z")===0).reduce((u,_)=>(u[_.name]=_.address,u),{});return o.$new=new NativeFunction(p._Znwm||p._Znwj,"pointer",["ulong"],q),o.$delete=new NativeFunction(p._ZdlPv,"void",["pointer"],q),Nr=r?_n:mn,o}function ni(t,e){let n=null;return t.perform(()=>{let r=J().find("_ZN3art7Runtime18EnsurePluginLoadedEPKcPNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEE");if(r===null)return;let o=new NativeFunction(r,"bool",["pointer","pointer","pointer"]),s=Memory.alloc(y);if(!o(e,Memory.allocUtf8String("libopenjdkjvmti.so"),s))return;let l=lt.v1_2|1073741824,a=t.tryGetEnvHandle(l);if(a===null)return;n=new Ce(a,t);let c=Memory.alloc(8);c.writeU64(ct.canTagObjects),n.addCapabilities(c)!==0&&(n=null)}),n}function ri(t,e){J().flavor==="art"&&t.getClassName(e)}function oi(t){return{offset:y===4?{globalsLock:32,globals:72}:{globalsLock:64,globals:112}}}function si(t){let e=t.vm,n=t.artRuntime,r=y===4?200:384,o=r+100*y,s=X(),i=kr(),{isApiLevel34OrApexEquivalent:l}=t,a=null;for(let d=r;d!==o;d+=y)if(n.add(d).readPointer().equals(e)){let p,u=null;s>=33||i==="Tiramisu"||l?(p=[d-4*y],u=d-y):s>=30||i==="R"?(p=[d-3*y,d-4*y],u=d-y):s>=29?p=[d-2*y]:s>=27?p=[d-Qe-3*y]:p=[d-Qe-2*y];for(let _ of p){let h=_-y,m=h-y,g;l?g=m-9*y:s>=24?g=m-8*y:s>=23?g=m-7*y:g=m-4*y;let v={offset:{heap:g,threadList:m,internTable:h,classLinker:_,jniIdManager:u}};if(Mr(n,v)!==null){a=v;break}}break}if(a===null)throw new Error("Unable to determine Runtime field offsets");let c=yn()>=36e7;return a.offset.instrumentation=c?ui(t):ii(t),a.offset.jniIdsIndirection=_i(t),a}var ai={ia32:_r,x64:_r,arm:li,arm64:ci};function ii(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Ie(e,ai[Process.arch],{limit:30})}function _r(t){if(t.mnemonic!=="lea")return null;let e=t.operands[1].value.disp;return e<256||e>1024?null:e}function li(t){if(t.mnemonic!=="add.w")return null;let e=t.operands;if(e.length!==3)return null;let n=e[2];return n.type!=="imm"?null:n.value}function ci(t){if(t.mnemonic!=="add")return null;let e=t.operands;if(e.length!==3||e[0].value==="sp"||e[1].value==="sp")return null;let n=e[2];if(n.type!=="imm")return null;let r=n.value.valueOf();return r<256||r>1024?null:r}var di={ia32:mr,x64:mr,arm:pi,arm64:fi};function ui(t){let e=t["art::Runtime::DeoptimizeBootImage"];return e===void 0?null:Ie(e,di[Process.arch],{limit:30})}function mr(t){if(t.mnemonic!=="mov")return null;let e=t.operands;if(e[0].value!=="rax")return null;let r=e[1];if(r.type!=="mem")return null;let o=r.value;if(o.base!=="rdi")return null;let s=o.disp;return s<256||s>1024?null:s}function pi(t){return null}function fi(t){if(t.mnemonic!=="ldr")return null;let e=t.operands;if(e[0].value==="x0")return null;let n=e[1].value;if(n.base!=="x0")return null;let r=n.disp;return r<256||r>1024?null:r}var hi={ia32:gr,x64:gr,arm:mi,arm64:gi};function _i(t){let e=t.find("_ZN3art7Runtime12SetJniIdTypeENS_9JniIdTypeE");if(e===null)return null;let n=Ie(e,hi[Process.arch],{limit:20});if(n===null)throw new Error("Unable to determine Runtime.jni_ids_indirection_ offset");return n}function gr(t){return t.mnemonic==="cmp"?t.operands[0].value.disp:null}function mi(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function gi(t,e){if(e===null)return null;let{mnemonic:n}=t,{mnemonic:r}=e;return n==="cmp"&&r==="ldr"||n==="bl"&&r==="str"?e.operands[1].value.disp:null}function bi(){let e={"4-21":136,"4-22":136,"4-23":172,"4-24":196,"4-25":196,"4-26":196,"4-27":196,"4-28":212,"4-29":172,"4-30":180,"4-31":180,"8-21":224,"8-22":224,"8-23":296,"8-24":344,"8-25":344,"8-26":352,"8-27":352,"8-28":392,"8-29":328,"8-30":336,"8-31":336}[`${y}-${X()}`];if(e===void 0)throw new Error("Unable to determine Instrumentation field offsets");return{offset:{forcedInterpretOnly:4,deoptimizationEnabled:e}}}function vi(t,e){let n=Mr(t,e);if(n===null)throw new Error("Unable to determine ClassLinker field offsets");return n}function Mr(t,e){if(en!==null)return en;let{classLinker:n,internTable:r}=e.offset,o=t.add(n).readPointer(),s=t.add(r).readPointer(),i=y===4?100:200,l=i+100*y,a=X(),c=null;for(let d=i;d!==l;d+=y)if(o.add(d).readPointer().equals(s)){let p;a>=30||kr()==="R"?p=6:a>=29?p=4:a>=23?p=3:p=5;let u=d+p*y,_;a>=23?_=u-2*y:_=u-3*y,c={offset:{quickResolutionTrampoline:_,quickImtConflictTrampoline:u-y,quickGenericJniTrampoline:u,quickToInterpreterBridgeTrampoline:u+y}};break}return c!==null&&(en=c),c}function Sn(t){let n=null;return t.perform(r=>{let o=It(t),s=pe(t),i={artArrayLengthSize:4,artArrayEntrySize:o.size,artArrayMax:50},l={artArrayLengthSize:y,artArrayEntrySize:s.size,artArrayMax:100},a=(p,u,_)=>{let h=p.add(u).readPointer();if(h.isNull())return null;let m=_===4?h.readU32():h.readU64().valueOf();return m<=0?null:{length:m,data:h.add(_)}},c=(p,u,_,h)=>{try{let m=a(p,u,h.artArrayLengthSize);if(m===null)return!1;let g=Math.min(m.length,h.artArrayMax);for(let v=0;v!==g;v++)if(m.data.add(v*h.artArrayEntrySize).equals(_))return!0}catch{}return!1},d=r.findClass("java/lang/Thread"),f=r.newGlobalRef(d);try{let p;_e(t,r,N=>{p=J()["art::JavaVMExt::DecodeGlobal"](t,N,f)});let u=yr(r.getFieldId(f,"name","Ljava/lang/String;")),_=yr(r.getStaticFieldId(f,"MAX_PRIORITY","I")),h=-1,m=-1;for(let N=0;N!==256;N+=4)h===-1&&c(p,N,_,i)&&(h=N),m===-1&&c(p,N,u,i)&&(m=N);if(m===-1||h===-1)throw new Error("Unable to find fields in java/lang/Thread; please file a bug");let g=m!==h?h:0,v=m,I=-1,L=Nn(r.getMethodId(f,"getName","()Ljava/lang/String;"));for(let N=0;N!==256;N+=4)I===-1&&c(p,N,L,l)&&(I=N);if(I===-1)throw new Error("Unable to find methods in java/lang/Thread; please file a bug");let M=-1,A=a(p,I,l.artArrayLengthSize).length;for(let N=I;N!==256;N+=4)if(p.add(N).readU16()===A){M=N;break}if(M===-1)throw new Error("Unable to find copied methods in java/lang/Thread; please file a bug");n={offset:{ifields:v,methods:I,sfields:g,copiedMethodsOffset:M}}}finally{r.deleteLocalRef(d),r.deleteGlobalRef(f)}}),n}function yi(t){let e=J(),n;return t.perform(r=>{let o=r.findClass("android/os/Process"),s=Nn(r.getStaticMethodId(o,"getElapsedCpuTime","()J"));r.deleteLocalRef(o);let i=Process.getModuleByName("libandroid_runtime.so"),l=i.base,a=l.add(i.size),c=X(),d=c<=21?8:y,f=ha|_a|ma|mt,p=~(Tr|Sa|Ea)>>>0,u=null,_=null,h=2;for(let v=0;v!==64&&h!==0;v+=4){let I=s.add(v);if(u===null){let L=I.readPointer();L.compare(l)>=0&&L.compare(a)<0&&(u=v,h--)}_===null&&(I.readU32()&p)===f&&(_=v,h--)}if(h!==0)throw new Error("Unable to determine ArtMethod field offsets");let m=u+d;n={size:c<=21?m+32:m+y,offset:{jniCode:u,quickCode:m,accessFlags:_}},"artInterpreterToCompiledCodeBridge"in e&&(n.offset.interpreterCode=u-d)}),n}function It(t){let e=X();return e>=23?{size:16,offset:{accessFlags:4}}:e>=21?{size:24,offset:{accessFlags:12}}:null}function Ei(t){let e=X(),n;return t.perform(r=>{let o=Tt(r),s=r.handle,i=null,l=null,a=null,c=null,d=null,f=null;for(let p=144;p!==256;p+=y)if(o.add(p).readPointer().equals(s)){l=p-6*y,d=p-4*y,f=p+2*y,e<=22&&(l-=y,i=l-y-72-12,a=p+6*y,d-=y,f-=y),c=p+9*y,e<=22&&(c+=2*y+4,y===8&&(c+=4)),e>=23&&(c+=y);break}if(c===null)throw new Error("Unable to determine ArtThread field offsets");n={offset:{isExceptionReportedToInstrumentation:i,exception:l,throwLocation:a,topHandleScope:c,managedStack:d,self:f}}}),n}function Si(){return X()>=23?{offset:{topQuickFrame:0,link:y}}:{offset:{topQuickFrame:2*y,link:0}}}var Ci={ia32:br,x64:br,arm:Ii,arm64:Ti};function rn(t,e){let n;return e.perform(r=>{let o=Tt(r),s=Ci[Process.arch],i=Instruction.parse(t),l=s(i);l!==null?n=o.add(l).readPointer():n=t}),n}function br(t){return t.mnemonic==="jmp"?t.operands[0].value.disp:null}function Ii(t){return t.mnemonic==="ldr.w"?t.operands[1].value.disp:null}function Ti(t){return t.mnemonic==="ldr"?t.operands[1].value.disp:null}function Tt(t){return t.handle.add(y).readPointer()}function Li(){return Cn("ro.build.version.release")}function wi(){return Cn("ro.build.version.codename")}function ki(){return parseInt(Cn("ro.build.version.sdk"),10)}function Ni(){try{let t=File.readAllText("/proc/self/mountinfo"),e=null,n=new Map;for(let o of t.trimEnd().split(`
`)){let s=o.split(" "),i=s[4];if(!i.startsWith("/apex/com.android.art"))continue;let l=s[10];i.includes("@")?n.set(l,i.split("@")[1]):e=l}let r=n.get(e);return r!==void 0?parseInt(r):vr()}catch{return vr()}}function vr(){return X()*1e7}var on=null,Ai=92;function Cn(t){on===null&&(on=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("__system_property_get"),"int",["pointer","pointer"],q));let e=Memory.alloc(Ai);return on(Memory.allocUtf8String(t),e),e.readUtf8String()}function _e(t,e,n){let r=Qa(t,e),o=Tt(e).toString();if(qe[o]=n,r(e.handle),qe[o]!==void 0)throw delete qe[o],new Error("Unable to perform state transition; please file a bug")}function Mi(t,e){let n=new NativeCallback(ji,"void",["pointer"]);return Or(t,e,n)}function ji(t){let e=t.toString(),n=qe[e];delete qe[e],n(t)}function In(t){let e=J(),n=e.artThreadList;e["art::ThreadList::SuspendAll"](n,Memory.allocUtf8String("frida"),!1?1:0);try{t()}finally{e["art::ThreadList::ResumeAll"](n)}}var dn=class{constructor(e){let n=Memory.alloc(4*y),r=n.add(y);n.writePointer(r);let o=new NativeCallback((s,i)=>e(i)===!0?1:0,"bool",["pointer","pointer"]);r.add(2*y).writePointer(o),this.handle=n,this._onVisit=o}};function Tn(t){return J()["art::ClassLinker::VisitClasses"]instanceof NativeFunction?new dn(t):new NativeCallback(n=>t(n)===!0?1:0,"bool",["pointer","pointer"])}var un=class{constructor(e){let n=Memory.alloc(4*y),r=n.add(y);n.writePointer(r);let o=new NativeCallback((s,i)=>{e(i)},"void",["pointer","pointer"]);r.add(2*y).writePointer(o),this.handle=n,this._onVisit=o}};function Ln(t){return new un(t)}var xi={"include-inlined-frames":0,"skip-inlined-frames":1},pn=class{constructor(e,n,r,o=0,s=!0){let i=J(),l=512,a=3*y,c=Memory.alloc(l+a);i["art::StackVisitor::StackVisitor"](c,e,n,xi[r],o,s?1:0);let d=c.add(l);c.writePointer(d);let f=new NativeCallback(this._visitFrame.bind(this),"bool",["pointer"]);d.add(2*y).writePointer(f),this.handle=c,this._onVisitFrame=f;let p=c.add(y===4?12:24);this._curShadowFrame=p,this._curQuickFrame=p.add(y),this._curQuickFramePc=p.add(2*y),this._curOatQuickMethodHeader=p.add(3*y),this._getMethodImpl=i["art::StackVisitor::GetMethod"],this._descLocImpl=i["art::StackVisitor::DescribeLocation"],this._getCQFIImpl=i["art::StackVisitor::GetCurrentQuickFrameInfo"]}walkStack(e=!1){J()["art::StackVisitor::WalkStack"](this.handle,e?1:0)}_visitFrame(){return this.visitFrame()?1:0}visitFrame(){throw new Error("Subclass must implement visitFrame")}getMethod(){let e=this._getMethodImpl(this.handle);return e.isNull()?null:new bt(e)}getCurrentQuickFramePc(){return this._curQuickFramePc.readPointer()}getCurrentQuickFrame(){return this._curQuickFrame.readPointer()}getCurrentShadowFrame(){return this._curShadowFrame.readPointer()}describeLocation(){let e=new Et;return this._descLocImpl(e,this.handle),e.disposeToString()}getCurrentOatQuickMethodHeader(){return this._curOatQuickMethodHeader.readPointer()}getCurrentQuickFrameInfo(){return this._getCQFIImpl(this.handle)}},bt=class{constructor(e){this.handle=e}prettyMethod(e=!0){let n=new Et;return J()["art::ArtMethod::PrettyMethod"](n,this.handle,e?1:0),n.disposeToString()}toString(){return`ArtMethod(handle=${this.handle})`}};function Oi(t){return function(e){let n=Memory.alloc(12);return Ya(t)(n,e),{frameSizeInBytes:n.readU32(),coreSpillMask:n.add(4).readU32(),fpSpillMask:n.add(8).readU32()}}}function Pi(t){let e=NULL;switch(Process.arch){case"ia32":e=De(32,n=>{n.putMovRegRegOffsetPtr("ecx","esp",4),n.putMovRegRegOffsetPtr("edx","esp",8),n.putCallAddressWithArguments(t,["ecx","edx"]),n.putMovRegReg("esp","ebp"),n.putPopReg("ebp"),n.putRet()});break;case"x64":e=De(32,n=>{n.putPushReg("rdi"),n.putCallAddressWithArguments(t,["rsi"]),n.putPopReg("rdi"),n.putMovRegPtrReg("rdi","rax"),n.putMovRegOffsetPtrReg("rdi",8,"edx"),n.putRet()});break;case"arm":e=De(16,n=>{n.putCallAddressWithArguments(t,["r0","r1"]),n.putPopRegs(["r0","lr"]),n.putMovRegReg("pc","lr")});break;case"arm64":e=De(64,n=>{n.putPushRegReg("x0","lr"),n.putCallAddressWithArguments(t,["x1"]),n.putPopRegReg("x2","lr"),n.putStrRegRegOffset("x0","x2",0),n.putStrRegRegOffset("w1","x2",8),n.putRet()});break}return new NativeFunction(e,"void",["pointer","pointer"],q)}var Ri={ia32:globalThis.X86Relocator,x64:globalThis.X86Relocator,arm:globalThis.ThumbRelocator,arm64:globalThis.Arm64Relocator},fn={ia32:globalThis.X86Writer,x64:globalThis.X86Writer,arm:globalThis.ThumbWriter,arm64:globalThis.Arm64Writer};function De(t,e){tn===null&&(tn=Memory.alloc(Process.pageSize));let n=tn.add(pr),r=Process.arch,o=fn[r];return Memory.patchCode(n,t,s=>{let i=new o(s,{pc:n});if(e(i),i.flush(),i.offset>t)throw new Error(`Wrote ${i.offset}, exceeding maximum of ${t}`)}),pr+=t,r==="arm"?n.or(1):n}function Fi(t,e){zi(e),Hi(e)}function Di(t,e){let n=ze(e).offset,r=Ka().offset,o=`
#include <gum/guminterceptor.h>

extern GMutex lock;
extern GHashTable * methods;
extern GHashTable * replacements;
extern gpointer last_seen_art_method;

extern gpointer get_oat_quick_method_header_impl (gpointer method, gpointer pc);

void
init (void)
{
  g_mutex_init (&lock);
  methods = g_hash_table_new_full (NULL, NULL, NULL, NULL);
  replacements = g_hash_table_new_full (NULL, NULL, NULL, NULL);
}

void
finalize (void)
{
  g_hash_table_unref (replacements);
  g_hash_table_unref (methods);
  g_mutex_clear (&lock);
}

gboolean
is_replacement_method (gpointer method)
{
  gboolean is_replacement;

  g_mutex_lock (&lock);

  is_replacement = g_hash_table_contains (replacements, method);

  g_mutex_unlock (&lock);

  return is_replacement;
}

gpointer
get_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);

  g_mutex_unlock (&lock);

  return replacement_method;
}

void
set_replacement_method (gpointer original_method,
                        gpointer replacement_method)
{
  g_mutex_lock (&lock);

  g_hash_table_insert (methods, original_method, replacement_method);
  g_hash_table_insert (replacements, replacement_method, original_method);

  g_mutex_unlock (&lock);
}

void
synchronize_replacement_methods (guint quick_code_offset,
                                 void * nterp_entrypoint,
                                 void * quick_to_interpreter_bridge)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
  {
    void ** quick_code;

    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

    quick_code = hooked_method + quick_code_offset;
    if (*quick_code == nterp_entrypoint)
      *quick_code = quick_to_interpreter_bridge;
  }

  g_mutex_unlock (&lock);
}

void
delete_replacement_method (gpointer original_method)
{
  gpointer replacement_method;

  g_mutex_lock (&lock);

  replacement_method = g_hash_table_lookup (methods, original_method);
  if (replacement_method != NULL)
  {
    g_hash_table_remove (methods, original_method);
    g_hash_table_remove (replacements, replacement_method);
  }

  g_mutex_unlock (&lock);
}

gpointer
translate_method (gpointer method)
{
  gpointer translated_method;

  g_mutex_lock (&lock);

  translated_method = g_hash_table_lookup (replacements, method);

  g_mutex_unlock (&lock);

  return (translated_method != NULL) ? translated_method : method;
}

gpointer
find_replacement_method_from_quick_code (gpointer method,
                                         gpointer thread)
{
  gpointer replacement_method;
  gpointer managed_stack;
  gpointer top_quick_frame;
  gpointer link_managed_stack;
  gpointer * link_top_quick_frame;

  replacement_method = get_replacement_method (method);
  if (replacement_method == NULL)
    return NULL;

  /*
   * Stack check.
   *
   * Return NULL to indicate that the original method should be invoked, otherwise
   * return a pointer to the replacement ArtMethod.
   *
   * If the caller is our own JNI replacement stub, then a stack transition must
   * have been pushed onto the current thread's linked list.
   *
   * Therefore, we invoke the original method if the following conditions are met:
   *   1- The current managed stack is empty.
   *   2- The ArtMethod * inside the linked managed stack's top quick frame is the
   *      same as our replacement.
   */
  managed_stack = thread + ${n.managedStack};
  top_quick_frame = *((gpointer *) (managed_stack + ${r.topQuickFrame}));
  if (top_quick_frame != NULL)
    return replacement_method;

  link_managed_stack = *((gpointer *) (managed_stack + ${r.link}));
  if (link_managed_stack == NULL)
    return replacement_method;

  link_top_quick_frame = GSIZE_TO_POINTER (*((gsize *) (link_managed_stack + ${r.topQuickFrame})) & ~((gsize) 1));
  if (link_top_quick_frame == NULL || *link_top_quick_frame != replacement_method)
    return replacement_method;

  return NULL;
}

void
on_interpreter_do_call (GumInvocationContext * ic)
{
  gpointer method, replacement_method;

  method = gum_invocation_context_get_nth_argument (ic, 0);

  replacement_method = get_replacement_method (method);
  if (replacement_method != NULL)
    gum_invocation_context_replace_nth_argument (ic, 0, replacement_method);
}

gpointer
on_art_method_get_oat_quick_method_header (gpointer method,
                                           gpointer pc)
{
  if (is_replacement_method (method))
    return NULL;

  return get_oat_quick_method_header_impl (method, pc);
}

void
on_art_method_pretty_method (GumInvocationContext * ic)
{
  const guint this_arg_index = ${Process.arch==="arm64"?0:1};
  gpointer method;

  method = gum_invocation_context_get_nth_argument (ic, this_arg_index);
  if (method == NULL)
    gum_invocation_context_replace_nth_argument (ic, this_arg_index, last_seen_art_method);
  else
    last_seen_art_method = method;
}

void
on_leave_gc_concurrent_copying_copying_phase (GumInvocationContext * ic)
{
  GHashTableIter iter;
  gpointer hooked_method, replacement_method;

  g_mutex_lock (&lock);

  g_hash_table_iter_init (&iter, methods);
  while (g_hash_table_iter_next (&iter, &hooked_method, &replacement_method))
    *((uint32_t *) replacement_method) = *((uint32_t *) hooked_method);

  g_mutex_unlock (&lock);
}
`,s=8,i=y,l=y,a=y,d=Memory.alloc(s+i+l+a),f=d.add(s),p=f.add(i),u=p.add(l),_=t.find(y===4?"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEj":"_ZN3art9ArtMethod23GetOatQuickMethodHeaderEm"),h=new CModule(o,{lock:d,methods:f,replacements:p,last_seen_art_method:u,get_oat_quick_method_header_impl:_??ptr("0xdeadbeef")}),m={exceptions:"propagate",scheduling:"exclusive"};return{handle:h,replacedMethods:{isReplacement:new NativeFunction(h.is_replacement_method,"bool",["pointer"],m),get:new NativeFunction(h.get_replacement_method,"pointer",["pointer"],m),set:new NativeFunction(h.set_replacement_method,"void",["pointer","pointer"],m),synchronize:new NativeFunction(h.synchronize_replacement_methods,"void",["uint","pointer","pointer"],m),delete:new NativeFunction(h.delete_replacement_method,"void",["pointer"],m),translate:new NativeFunction(h.translate_method,"pointer",["pointer"],m),findReplacementFromQuickCode:h.find_replacement_method_from_quick_code},getOatQuickMethodHeaderImpl:_,hooks:{Interpreter:{doCall:h.on_interpreter_do_call},ArtMethod:{getOatQuickMethodHeader:h.on_art_method_get_oat_quick_method_header,prettyMethod:h.on_art_method_pretty_method},Gc:{copyingPhase:{onLeave:h.on_leave_gc_concurrent_copying_copying_phase},runFlip:{onEnter:h.on_leave_gc_concurrent_copying_copying_phase}}}}}function zi(t){hr||(hr=!0,Ui(t),Vi(),Ji(),Gi())}function Ui(t){let e=J();[e.artQuickGenericJniTrampoline,e.artQuickToInterpreterBridge,e.artQuickResolutionTrampoline].forEach(r=>{Memory.protect(r,32,"rwx");let o=new yt(r);o.activate(t),Ar.push(o)})}function Vi(){let t=J(),e=X(),{isApiLevel34OrApexEquivalent:n}=t,r;if(e<=22)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_6mirror9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(e<=33&&!n)r=/^_ZN3art11interpreter6DoCallILb[0-1]ELb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtPNS_6JValueE$/;else if(n)r=/^_ZN3art11interpreter6DoCallILb[0-1]EEEbPNS_9ArtMethodEPNS_6ThreadERNS_11ShadowFrameEPKNS_11InstructionEtbPNS_6JValueE$/;else throw new Error("Unable to find method invocation in ART; please file a bug");let o=t.module,s=[...o.enumerateExports(),...o.enumerateSymbols()].filter(i=>r.test(i.name));if(s.length===0)throw new Error("Unable to find method invocation in ART; please file a bug");for(let i of s)Interceptor.attach(i.address,ne.hooks.Interpreter.doCall)}function Ji(){let t=J(),n=t.module.findSymbolByName("_ZN3art2gc4Heap22CollectGarbageInternalENS0_9collector6GcTypeENS0_7GcCauseEbj");if(n===null)return;let{artNterpEntryPoint:r,artQuickToInterpreterBridge:o}=t,s=pe(t.vm).offset.quickCode;Interceptor.attach(n,{onLeave(){ne.replacedMethods.synchronize(s,r,o)}})}function Gi(){let t=[["_ZN3art11ClassLinker26VisiblyInitializedCallback22MarkVisiblyInitializedEPNS_6ThreadE","e90340f8 : ff0ff0ff"],["_ZN3art11ClassLinker26VisiblyInitializedCallback29AdjustThreadVisibilityCounterEPNS_6ThreadEl","7f0f00f9 : 1ffcffff"]],e=J(),n=e.module;for(let[r,o]of t){let s=n.findSymbolByName(r);if(s===null)continue;let i=Memory.scanSync(s,8192,o);if(i.length===0)return;let{artNterpEntryPoint:l,artQuickToInterpreterBridge:a}=e,c=pe(e.vm).offset.quickCode;Interceptor.attach(i[0].address,function(){ne.replacedMethods.synchronize(c,l,a)});return}}function Hi(t){if(fr)return;if(fr=!0,!Zi()){let{getOatQuickMethodHeaderImpl:s}=ne;if(s===null)return;try{Interceptor.replace(s,ne.hooks.ArtMethod.getOatQuickMethodHeader)}catch{}}let e=X(),n=null,r=J();e>28?n=r.find("_ZN3art2gc9collector17ConcurrentCopying12CopyingPhaseEv"):e>22&&(n=r.find("_ZN3art2gc9collector17ConcurrentCopying12MarkingPhaseEv")),n!==null&&Interceptor.attach(n,ne.hooks.Gc.copyingPhase);let o=null;o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_"),o===null&&(o=r.find("_ZN3art6Thread15RunFlipFunctionEPS0_b")),o!==null&&Interceptor.attach(o,ne.hooks.Gc.runFlip)}var $i={arm:{signatures:[{pattern:["b0 68","01 30","0c d0","1b 98",":","c0 ff","c0 ff","00 ff","00 2f"],validateMatch:sn},{pattern:["d8 f8 08 00","01 30","0c d0","1b 98",":","f0 ff ff 0f","ff ff","00 ff","00 2f"],validateMatch:sn},{pattern:["b0 68","01 30","40 f0 c3 80","00 25",":","c0 ff","c0 ff","c0 fb 00 d0","ff f8"],validateMatch:sn}],instrument:qi},arm64:{signatures:[{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","88 39 00 f0",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 00 00 9f"],offset:1,validateMatch:an},{pattern:["0a 40 b9","1f 05 00 31","40 01 00 54","00 0e 40 f9",":","fc ff ff","1f fc ff ff","1f 00 00 ff","00 fc ff ff"],offset:1,validateMatch:an},{pattern:["0a 40 b9","1f 05 00 31","01 34 00 54","e0 03 1f aa",":","fc ff ff","1f fc ff ff","1f 00 00 ff","e0 ff ff ff"],offset:1,validateMatch:an}],instrument:Wi}};function sn({address:t,size:e}){let n=Instruction.parse(t.or(1)),[r,o]=n.operands,s=o.value.base,i=r.value,l=Instruction.parse(n.next.add(2)),a=ptr(l.operands[0].value),c=l.address.add(l.size),d,f;return l.mnemonic==="beq"?(d=c,f=a):(d=a,f=c),Ie(d.or(1),p,{limit:3});function p(u){let{mnemonic:_}=u;if(!(_==="ldr"||_==="ldr.w"))return null;let{base:h,disp:m}=u.operands[1].value;return h===s&&m===20?{methodReg:s,scratchReg:i,target:{whenTrue:a,whenRegularMethod:d,whenRuntimeMethod:f}}:null}}function an({address:t,size:e}){let[n,r]=Instruction.parse(t).operands,o=r.value.base,s="x"+n.value.substring(1),i=Instruction.parse(t.add(8)),l=ptr(i.operands[0].value),a=t.add(12),c,d;return i.mnemonic==="b.eq"?(c=a,d=l):(c=l,d=a),Ie(c,f,{limit:3});function f(p){if(p.mnemonic!=="ldr")return null;let{base:u,disp:_}=p.operands[1].value;return u===o&&_===24?{methodReg:o,scratchReg:s,target:{whenTrue:l,whenRegularMethod:c,whenRuntimeMethod:d}}:null}}function Zi(){if(X()<31)return!1;let t=$i[Process.arch];if(t===void 0)return!1;let e=t.signatures.map(({pattern:r,offset:o=0,validateMatch:s=Bi})=>({pattern:new MatchPattern(r.join("")),offset:o,validateMatch:s})),n=[];for(let{base:r,size:o}of J().module.enumerateRanges("--x"))for(let{pattern:s,offset:i,validateMatch:l}of e){let a=Memory.scanSync(r,o,s).map(({address:c,size:d})=>({address:c.sub(i),size:d+i})).filter(c=>{let d=l(c);return d===null?!1:(c.validationResult=d,!0)});n.push(...a)}return n.length===0?!1:(n.forEach(t.instrument),!0)}function Bi(){return{}}var vt=class{constructor(e,n,r){this.address=e,this.size=n,this.originalCode=e.readByteArray(n),this.trampoline=r}revert(){Memory.patchCode(this.address,this.size,e=>{e.writeByteArray(this.originalCode)})}};function qi({address:t,size:e,validationResult:n}){let{methodReg:r,target:o}=n,s=Memory.alloc(Process.pageSize),i=e;Memory.patchCode(s,256,l=>{let a=new ThumbWriter(l,{pc:s}),c=new ThumbRelocator(t,a);for(let _=0;_!==2;_++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=[45,237,16,10];a.putBytes(d);let f=["r0","r1","r2","r3"];a.putPushRegs(f),a.putCallAddressWithArguments(ne.replacedMethods.isReplacement,[r]),a.putCmpRegImm("r0",0),a.putPopRegs(f);let p=[189,236,16,10];a.putBytes(p),a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let u=c.input.address.equals(o.whenRegularMethod);for(a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne();i<10;){let _=c.readOne();if(_===0){i=10;break}i=_}c.writeAll(),a.putBranchAddress(t.add(i+1)),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(o.whenTrue),a.flush()}),En.push(new vt(t,i,s)),Memory.patchCode(t,i,l=>{let a=new ThumbWriter(l,{pc:t});a.putLdrRegAddress("pc",s.or(1)),a.flush()})}function Wi({address:t,size:e,validationResult:n}){let{methodReg:r,scratchReg:o,target:s}=n,i=Memory.alloc(Process.pageSize);Memory.patchCode(i,256,l=>{let a=new Arm64Writer(l,{pc:i}),c=new Arm64Relocator(t,a);for(let _=0;_!==2;_++)c.readOne();c.writeAll(),c.readOne(),c.skipOne(),a.putBCondLabel("eq","runtime_or_replacement_method");let d=["d0","d1","d2","d3","d4","d5","d6","d7","x0","x1","x2","x3","x4","x5","x6","x7","x8","x9","x10","x11","x12","x13","x14","x15","x16","x17"],f=d.length;for(let _=0;_!==f;_+=2)a.putPushRegReg(d[_],d[_+1]);a.putCallAddressWithArguments(ne.replacedMethods.isReplacement,[r]),a.putCmpRegReg("x0","xzr");for(let _=f-2;_>=0;_-=2)a.putPopRegReg(d[_],d[_+1]);a.putBCondLabel("ne","runtime_or_replacement_method"),a.putBLabel("regular_method"),c.readOne();let p=c.input,u=p.address.equals(s.whenRegularMethod);a.putLabel(u?"regular_method":"runtime_or_replacement_method"),c.writeOne(),a.putBranchAddress(p.next),a.putLabel(u?"runtime_or_replacement_method":"regular_method"),a.putBranchAddress(s.whenTrue),a.flush()}),En.push(new vt(t,e,i)),Memory.patchCode(t,e,l=>{let a=new Arm64Writer(l,{pc:t});a.putLdrRegAddress(o,i),a.putBrReg(o),a.flush()})}function Ki(t){return new Nr(t)}function Qi(t){return ne.replacedMethods.translate(t)}function wn(t,e={}){let{limit:n=16}=e,r=t.getEnv();return We===null&&(We=Yi(t,r)),We.backtrace(r,n)}function Yi(t,e){let n=J(),r=Memory.alloc(Process.pointerSize),o=new CModule(`
#include <glib.h>
#include <stdbool.h>
#include <string.h>
#include <gum/gumtls.h>
#include <json-glib/json-glib.h>

typedef struct _ArtBacktrace ArtBacktrace;
typedef struct _ArtStackFrame ArtStackFrame;

typedef struct _ArtStackVisitor ArtStackVisitor;
typedef struct _ArtStackVisitorVTable ArtStackVisitorVTable;

typedef struct _ArtClass ArtClass;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtThread ArtThread;
typedef struct _ArtContext ArtContext;

typedef struct _JNIEnv JNIEnv;

typedef struct _StdString StdString;
typedef struct _StdTinyString StdTinyString;
typedef struct _StdLargeString StdLargeString;

typedef enum {
  STACK_WALK_INCLUDE_INLINED_FRAMES,
  STACK_WALK_SKIP_INLINED_FRAMES,
} StackWalkKind;

struct _StdTinyString
{
  guint8 unused;
  gchar data[(3 * sizeof (gpointer)) - 1];
};

struct _StdLargeString
{
  gsize capacity;
  gsize size;
  gchar * data;
};

struct _StdString
{
  union
  {
    guint8 flags;
    StdTinyString tiny;
    StdLargeString large;
  };
};

struct _ArtBacktrace
{
  GChecksum * id;
  GArray * frames;
  gchar * frames_json;
};

struct _ArtStackFrame
{
  ArtMethod * method;
  gsize dexpc;
  StdString description;
};

struct _ArtStackVisitorVTable
{
  void (* unused1) (void);
  void (* unused2) (void);
  bool (* visit) (ArtStackVisitor * visitor);
};

struct _ArtStackVisitor
{
  ArtStackVisitorVTable * vtable;

  guint8 padding[512];

  ArtStackVisitorVTable vtable_storage;

  ArtBacktrace * backtrace;
};

struct _ArtMethod
{
  guint32 declaring_class;
  guint32 access_flags;
};

extern GumTlsKey current_backtrace;

extern void (* perform_art_thread_state_transition) (JNIEnv * env);

extern ArtContext * art_make_context (ArtThread * thread);

extern void art_stack_visitor_init (ArtStackVisitor * visitor, ArtThread * thread, void * context, StackWalkKind walk_kind,
    size_t num_frames, bool check_suspended);
extern void art_stack_visitor_walk_stack (ArtStackVisitor * visitor, bool include_transitions);
extern ArtMethod * art_stack_visitor_get_method (ArtStackVisitor * visitor);
extern void art_stack_visitor_describe_location (StdString * description, ArtStackVisitor * visitor);
extern ArtMethod * translate_method (ArtMethod * method);
extern void translate_location (ArtMethod * method, guint32 pc, const gchar ** source_file, gint32 * line_number);
extern void get_class_location (StdString * result, ArtClass * klass);
extern void cxx_delete (void * mem);
extern unsigned long strtoul (const char * str, char ** endptr, int base);

static bool visit_frame (ArtStackVisitor * visitor);
static void art_stack_frame_destroy (ArtStackFrame * frame);

static void append_jni_type_name (GString * s, const gchar * name, gsize length);

static void std_string_destroy (StdString * str);
static gchar * std_string_get_data (StdString * str);

void
init (void)
{
  current_backtrace = gum_tls_key_new ();
}

void
finalize (void)
{
  gum_tls_key_free (current_backtrace);
}

ArtBacktrace *
_create (JNIEnv * env,
         guint limit)
{
  ArtBacktrace * bt;

  bt = g_new (ArtBacktrace, 1);
  bt->id = g_checksum_new (G_CHECKSUM_SHA1);
  bt->frames = (limit != 0)
      ? g_array_sized_new (FALSE, FALSE, sizeof (ArtStackFrame), limit)
      : g_array_new (FALSE, FALSE, sizeof (ArtStackFrame));
  g_array_set_clear_func (bt->frames, (GDestroyNotify) art_stack_frame_destroy);
  bt->frames_json = NULL;

  gum_tls_key_set_value (current_backtrace, bt);

  perform_art_thread_state_transition (env);

  gum_tls_key_set_value (current_backtrace, NULL);

  return bt;
}

void
_on_thread_state_transition_complete (ArtThread * thread)
{
  ArtContext * context;
  ArtStackVisitor visitor = {
    .vtable_storage = {
      .visit = visit_frame,
    },
  };

  context = art_make_context (thread);

  art_stack_visitor_init (&visitor, thread, context, STACK_WALK_SKIP_INLINED_FRAMES, 0, true);
  visitor.vtable = &visitor.vtable_storage;
  visitor.backtrace = gum_tls_key_get_value (current_backtrace);

  art_stack_visitor_walk_stack (&visitor, false);

  cxx_delete (context);
}

static bool
visit_frame (ArtStackVisitor * visitor)
{
  ArtBacktrace * bt = visitor->backtrace;
  ArtStackFrame frame;
  const gchar * description, * dexpc_part;

  frame.method = art_stack_visitor_get_method (visitor);

  art_stack_visitor_describe_location (&frame.description, visitor);

  description = std_string_get_data (&frame.description);
  if (strstr (description, " '<") != NULL)
    goto skip;

  dexpc_part = strstr (description, " at dex PC 0x");
  if (dexpc_part == NULL)
    goto skip;
  frame.dexpc = strtoul (dexpc_part + 13, NULL, 16);

  g_array_append_val (bt->frames, frame);

  g_checksum_update (bt->id, (guchar *) &frame.method, sizeof (frame.method));
  g_checksum_update (bt->id, (guchar *) &frame.dexpc, sizeof (frame.dexpc));

  return true;

skip:
  std_string_destroy (&frame.description);
  return true;
}

static void
art_stack_frame_destroy (ArtStackFrame * frame)
{
  std_string_destroy (&frame->description);
}

void
_destroy (ArtBacktrace * backtrace)
{
  g_free (backtrace->frames_json);
  g_array_free (backtrace->frames, TRUE);
  g_checksum_free (backtrace->id);
  g_free (backtrace);
}

const gchar *
_get_id (ArtBacktrace * backtrace)
{
  return g_checksum_get_string (backtrace->id);
}

const gchar *
_get_frames (ArtBacktrace * backtrace)
{
  GArray * frames = backtrace->frames;
  JsonBuilder * b;
  guint i;
  JsonNode * root;

  if (backtrace->frames_json != NULL)
    return backtrace->frames_json;

  b = json_builder_new_immutable ();

  json_builder_begin_array (b);

  for (i = 0; i != frames->len; i++)
  {
    ArtStackFrame * frame = &g_array_index (frames, ArtStackFrame, i);
    gchar * description, * ret_type, * paren_open, * paren_close, * arg_types, * token, * method_name, * class_name;
    GString * signature;
    gchar * cursor;
    ArtMethod * translated_method;
    StdString location;
    gsize dexpc;
    const gchar * source_file;
    gint32 line_number;

    description = std_string_get_data (&frame->description);

    ret_type = strchr (description, '\\'') + 1;

    paren_open = strchr (ret_type, '(');
    paren_close = strchr (paren_open, ')');
    *paren_open = '\\0';
    *paren_close = '\\0';

    arg_types = paren_open + 1;

    token = strrchr (ret_type, '.');
    *token = '\\0';

    method_name = token + 1;

    token = strrchr (ret_type, ' ');
    *token = '\\0';

    class_name = token + 1;

    signature = g_string_sized_new (128);

    append_jni_type_name (signature, class_name, method_name - class_name - 1);
    g_string_append_c (signature, ',');
    g_string_append (signature, method_name);
    g_string_append (signature, ",(");

    if (arg_types != paren_close)
    {
      for (cursor = arg_types; cursor != NULL;)
      {
        gsize length;
        gchar * next;

        token = strstr (cursor, ", ");
        if (token != NULL)
        {
          length = token - cursor;
          next = token + 2;
        }
        else
        {
          length = paren_close - cursor;
          next = NULL;
        }

        append_jni_type_name (signature, cursor, length);

        cursor = next;
      }
    }

    g_string_append_c (signature, ')');

    append_jni_type_name (signature, ret_type, class_name - ret_type - 1);

    translated_method = translate_method (frame->method);
    dexpc = (translated_method == frame->method) ? frame->dexpc : 0;

    get_class_location (&location, GSIZE_TO_POINTER (translated_method->declaring_class));

    translate_location (translated_method, dexpc, &source_file, &line_number);

    json_builder_begin_object (b);

    json_builder_set_member_name (b, "signature");
    json_builder_add_string_value (b, signature->str);

    json_builder_set_member_name (b, "origin");
    json_builder_add_string_value (b, std_string_get_data (&location));

    json_builder_set_member_name (b, "className");
    json_builder_add_string_value (b, class_name);

    json_builder_set_member_name (b, "methodName");
    json_builder_add_string_value (b, method_name);

    json_builder_set_member_name (b, "methodFlags");
    json_builder_add_int_value (b, translated_method->access_flags);

    json_builder_set_member_name (b, "fileName");
    json_builder_add_string_value (b, source_file);

    json_builder_set_member_name (b, "lineNumber");
    json_builder_add_int_value (b, line_number);

    json_builder_end_object (b);

    std_string_destroy (&location);
    g_string_free (signature, TRUE);
  }

  json_builder_end_array (b);

  root = json_builder_get_root (b);
  backtrace->frames_json = json_to_string (root, FALSE);
  json_node_unref (root);

  return backtrace->frames_json;
}

static void
append_jni_type_name (GString * s,
                      const gchar * name,
                      gsize length)
{
  gchar shorty = '\\0';
  gsize i;

  switch (name[0])
  {
    case 'b':
      if (strncmp (name, "boolean", length) == 0)
        shorty = 'Z';
      else if (strncmp (name, "byte", length) == 0)
        shorty = 'B';
      break;
    case 'c':
      if (strncmp (name, "char", length) == 0)
        shorty = 'C';
      break;
    case 'd':
      if (strncmp (name, "double", length) == 0)
        shorty = 'D';
      break;
    case 'f':
      if (strncmp (name, "float", length) == 0)
        shorty = 'F';
      break;
    case 'i':
      if (strncmp (name, "int", length) == 0)
        shorty = 'I';
      break;
    case 'l':
      if (strncmp (name, "long", length) == 0)
        shorty = 'J';
      break;
    case 's':
      if (strncmp (name, "short", length) == 0)
        shorty = 'S';
      break;
    case 'v':
      if (strncmp (name, "void", length) == 0)
        shorty = 'V';
      break;
  }

  if (shorty != '\\0')
  {
    g_string_append_c (s, shorty);

    return;
  }

  if (length > 2 && name[length - 2] == '[' && name[length - 1] == ']')
  {
    g_string_append_c (s, '[');
    append_jni_type_name (s, name, length - 2);

    return;
  }

  g_string_append_c (s, 'L');

  for (i = 0; i != length; i++)
  {
    gchar ch = name[i];
    if (ch != '.')
      g_string_append_c (s, ch);
    else
      g_string_append_c (s, '/');
  }

  g_string_append_c (s, ';');
}

static void
std_string_destroy (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  if (is_large)
    cxx_delete (str->large.data);
}

static gchar *
std_string_get_data (StdString * str)
{
  bool is_large = (str->flags & 1) != 0;
  return is_large ? str->large.data : str->tiny.data;
}
`,{current_backtrace:Memory.alloc(Process.pointerSize),perform_art_thread_state_transition:r,art_make_context:n["art::Thread::GetLongJumpContext"]??n["art::Context::Create"],art_stack_visitor_init:n["art::StackVisitor::StackVisitor"],art_stack_visitor_walk_stack:n["art::StackVisitor::WalkStack"],art_stack_visitor_get_method:n["art::StackVisitor::GetMethod"],art_stack_visitor_describe_location:n["art::StackVisitor::DescribeLocation"],translate_method:ne.replacedMethods.translate,translate_location:n["art::Monitor::TranslateLocation"],get_class_location:n["art::mirror::Class::GetLocation"],cxx_delete:n.$delete,strtoul:Process.getModuleByName("libc.so").getExportByName("strtoul")}),s=new NativeFunction(o._create,"pointer",["pointer","uint"],q),i=new NativeFunction(o._destroy,"void",["pointer"],q),l={exceptions:"propagate",scheduling:"exclusive"},a=new NativeFunction(o._get_id,"pointer",["pointer"],l),c=new NativeFunction(o._get_frames,"pointer",["pointer"],l),d=Or(t,e,o._on_thread_state_transition_complete);o._performData=d,r.writePointer(d),o.backtrace=(p,u)=>{let _=s(p,u),h=new hn(_);return Script.bindWeak(h,f.bind(null,_)),h};function f(p){i(p)}return o.getId=p=>a(p).readUtf8String(),o.getFrames=p=>JSON.parse(c(p).readUtf8String()),o}var hn=class{constructor(e){this.handle=e}get id(){return We.getId(this.handle)}get frames(){return We.getFrames(this.handle)}};function kn(){gt.forEach(t=>{t.vtablePtr.writePointer(t.vtable),t.vtableCountPtr.writeS32(t.vtableCount)}),gt.clear();for(let t of Ar.splice(0))t.deactivate();for(let t of En.splice(0))t.revert()}function Nn(t){return jr(t,"art::jni::JniIdManager::DecodeMethodId")}function yr(t){return jr(t,"art::jni::JniIdManager::DecodeFieldId")}function jr(t,e){let n=J(),r=wr(n).offset,o=r.jniIdManager,s=r.jniIdsIndirection;if(o!==null&&s!==null){let i=n.artRuntime;if(i.add(s).readInt()!==Ia){let a=i.add(o).readPointer();return n[e](a,t)}}return t}var Xi={ia32:el,x64:tl,arm:nl,arm64:rl};function el(t,e,n,r,o){let s=ze(o).offset,i=pe(o).offset,l;return Memory.patchCode(t,128,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),f=[15,174,4,36],p=[15,174,12,36];c.putPushax(),c.putMovRegReg("ebp","esp"),c.putAndRegU32("esp",4294967280),c.putSubRegImm("esp",512),c.putBytes(f),c.putMovRegFsU32Ptr("ebx",s.self),c.putCallAddressWithAlignedArguments(ne.replacedMethods.findReplacementFromQuickCode,["eax","ebx"]),c.putTestRegReg("eax","eax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("ebp",28,"eax"),c.putLabel("restore_registers"),c.putBytes(p),c.putMovRegReg("esp","ebp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("eax",i.quickCode),c.flush()}),l}function tl(t,e,n,r,o){let s=ze(o).offset,i=pe(o).offset,l;return Memory.patchCode(t,256,a=>{let c=new X86Writer(a,{pc:t}),d=new X86Relocator(e,c),f=[15,174,4,36],p=[15,174,12,36];c.putPushax(),c.putMovRegReg("rbp","rsp"),c.putAndRegU32("rsp",4294967280),c.putSubRegImm("rsp",512),c.putBytes(f),c.putMovRegGsU32Ptr("rbx",s.self),c.putCallAddressWithAlignedArguments(ne.replacedMethods.findReplacementFromQuickCode,["rdi","rbx"]),c.putTestRegReg("rax","rax"),c.putJccShortLabel("je","restore_registers","no-hint"),c.putMovRegOffsetPtrReg("rbp",64,"rax"),c.putLabel("restore_registers"),c.putBytes(p),c.putMovRegReg("rsp","rbp"),c.putPopax(),c.putJccShortLabel("jne","invoke_replacement","no-hint");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putJmpAddress(e.add(l)),c.putLabel("invoke_replacement"),c.putJmpRegOffsetPtr("rdi",i.quickCode),c.flush()}),l}function nl(t,e,n,r,o){let s=pe(o).offset,i=e.and(vn),l;return Memory.patchCode(t,128,a=>{let c=new ThumbWriter(a,{pc:t}),d=new ThumbRelocator(i,c),f=[45,237,16,10],p=[189,236,16,10];c.putPushRegs(["r1","r2","r3","r5","r6","r7","r8","r10","r11","lr"]),c.putBytes(f),c.putSubRegRegImm("sp","sp",8),c.putStrRegRegOffset("r0","sp",0),c.putCallAddressWithArguments(ne.replacedMethods.findReplacementFromQuickCode,["r0","r9"]),c.putCmpRegImm("r0",0),c.putBCondLabel("eq","restore_registers"),c.putStrRegRegOffset("r0","sp",0),c.putLabel("restore_registers"),c.putLdrRegRegOffset("r0","sp",0),c.putAddRegRegImm("sp","sp",8),c.putBytes(p),c.putPopRegs(["lr","r11","r10","r8","r7","r6","r5","r3","r2","r1"]),c.putBCondLabel("ne","invoke_replacement");do l=d.readOne();while(l<n&&!d.eoi);d.writeAll(),d.eoi||c.putLdrRegAddress("pc",e.add(l)),c.putLabel("invoke_replacement"),c.putLdrRegRegOffset("pc","r0",s.quickCode),c.flush()}),l}function rl(t,e,n,{availableScratchRegs:r},o){let s=pe(o).offset,i;return Memory.patchCode(t,256,l=>{let a=new Arm64Writer(l,{pc:t}),c=new Arm64Relocator(e,a);a.putPushRegReg("d0","d1"),a.putPushRegReg("d2","d3"),a.putPushRegReg("d4","d5"),a.putPushRegReg("d6","d7"),a.putPushRegReg("x1","x2"),a.putPushRegReg("x3","x4"),a.putPushRegReg("x5","x6"),a.putPushRegReg("x7","x20"),a.putPushRegReg("x21","x22"),a.putPushRegReg("x23","x24"),a.putPushRegReg("x25","x26"),a.putPushRegReg("x27","x28"),a.putPushRegReg("x29","lr"),a.putSubRegRegImm("sp","sp",16),a.putStrRegRegOffset("x0","sp",0),a.putCallAddressWithArguments(ne.replacedMethods.findReplacementFromQuickCode,["x0","x19"]),a.putCmpRegReg("x0","xzr"),a.putBCondLabel("eq","restore_registers"),a.putStrRegRegOffset("x0","sp",0),a.putLabel("restore_registers"),a.putLdrRegRegOffset("x0","sp",0),a.putAddRegRegImm("sp","sp",16),a.putPopRegReg("x29","lr"),a.putPopRegReg("x27","x28"),a.putPopRegReg("x25","x26"),a.putPopRegReg("x23","x24"),a.putPopRegReg("x21","x22"),a.putPopRegReg("x7","x20"),a.putPopRegReg("x5","x6"),a.putPopRegReg("x3","x4"),a.putPopRegReg("x1","x2"),a.putPopRegReg("d6","d7"),a.putPopRegReg("d4","d5"),a.putPopRegReg("d2","d3"),a.putPopRegReg("d0","d1"),a.putBCondLabel("ne","invoke_replacement");do i=c.readOne();while(i<n&&!c.eoi);if(c.writeAll(),!c.eoi){let d=Array.from(r)[0];a.putLdrRegAddress(d,e.add(i)),a.putBrReg(d)}a.putLabel("invoke_replacement"),a.putLdrRegRegOffset("x16","x0",s.quickCode),a.putBrReg("x16"),a.flush()}),i}var ol={ia32:Er,x64:Er,arm:sl,arm64:al};function Er(t,e,n){Memory.patchCode(t,16,r=>{let o=new X86Writer(r,{pc:t});o.putJmpAddress(e),o.flush()})}function sl(t,e,n){let r=t.and(vn);Memory.patchCode(r,16,o=>{let s=new ThumbWriter(o,{pc:r});s.putLdrRegAddress("pc",e.or(1)),s.flush()})}function al(t,e,n){Memory.patchCode(t,16,r=>{let o=new Arm64Writer(r,{pc:t});n===16?o.putLdrRegAddress("x16",e):o.putAdrpRegAddress("x16",e),o.putBrReg("x16"),o.flush()})}var il={ia32:5,x64:16,arm:8,arm64:16},yt=class{constructor(e){this.quickCode=e,this.quickCodeAddress=Process.arch==="arm"?e.and(vn):e,this.redirectSize=0,this.trampoline=null,this.overwrittenPrologue=null,this.overwrittenPrologueLength=0}_canRelocateCode(e,n){let r=fn[Process.arch],o=Ri[Process.arch],{quickCodeAddress:s}=this,i=new r(s),l=new o(s,i),a;if(Process.arch==="arm64"){let c=new Set(["x16","x17"]);do{let d=l.readOne(),f=new Set(c),{read:p,written:u}=l.input.regsAccessed;for(let _ of[p,u])for(let h of _){let m;h.startsWith("w")?m="x"+h.substring(1):m=h,f.delete(m)}if(f.size===0)break;a=d,c=f}while(a<e&&!l.eoi);n.availableScratchRegs=c}else do a=l.readOne();while(a<e&&!l.eoi);return a>=e}_allocateTrampoline(){ft===null&&(ft=Pt(y===4?128:256));let e=il[Process.arch],n,r,o=1,s={};if(y===4||this._canRelocateCode(e,s))n=e,r={};else{let i;Process.arch==="x64"?(n=5,i=Ta):Process.arch==="arm64"&&(n=8,i=La,o=4096),r={near:this.quickCodeAddress,maxDistance:i}}return this.redirectSize=n,this.trampoline=ft.allocateSlice(r,o),s}_destroyTrampoline(){ft.freeSlice(this.trampoline)}activate(e){let n=this._allocateTrampoline(),{trampoline:r,quickCode:o,redirectSize:s}=this,i=Xi[Process.arch],l=i(r,o,s,n,e);this.overwrittenPrologueLength=l,this.overwrittenPrologue=Memory.dup(this.quickCodeAddress,l);let a=ol[Process.arch];a(o,r,s)}deactivate(){let{quickCodeAddress:e,overwrittenPrologueLength:n}=this,r=fn[Process.arch];Memory.patchCode(e,n,o=>{let s=new r(o,{pc:e}),{overwrittenPrologue:i}=this;s.putBytes(i.readByteArray(n)),s.flush()}),this._destroyTrampoline()}};function ll(t){let e=J(),{module:n,artClassLinker:r}=e;return t.equals(r.quickGenericJniTrampoline)||t.equals(r.quickToInterpreterBridgeTrampoline)||t.equals(r.quickResolutionTrampoline)||t.equals(r.quickImtConflictTrampoline)||t.compare(n.base)>=0&&t.compare(n.base.add(n.size))<0}var _n=class{constructor(e){let n=Nn(e);this.methodId=n,this.originalMethod=null,this.hookedMethodId=n,this.replacementMethodId=null,this.interceptor=null}replace(e,n,r,o,s){let{kAccCompileDontBother:i,artNterpEntryPoint:l}=s;this.originalMethod=Sr(this.methodId,o);let a=this.originalMethod.accessFlags;if((a&Ca)!==0&&cl()){let u=this.originalMethod.jniCode;this.hookedMethodId=u.add(2*y).readPointer(),this.originalMethod=Sr(this.hookedMethodId,o)}let{hookedMethodId:c}=this,d=ul(c,o);this.replacementMethodId=d,ht(d,{jniCode:e,accessFlags:(a&~(ba|ga|cr)|mt|i)>>>0,quickCode:s.artClassLinker.quickGenericJniTrampoline,interpreterCode:s.artInterpreterToCompiledCodeBridge},o);let f=Tr|ya|cr;(a&mt)===0&&(f|=va),ht(c,{accessFlags:(a&~f|i)>>>0},o);let p=this.originalMethod.quickCode;if(l!==null&&p.equals(l)&&ht(c,{quickCode:s.artQuickToInterpreterBridge},o),!ll(p)){let u=new yt(p);u.activate(o),this.interceptor=u}ne.replacedMethods.set(c,d),Fi(c,o)}revert(e){let{hookedMethodId:n,interceptor:r}=this;ht(n,this.originalMethod,e),ne.replacedMethods.delete(n),r!==null&&(r.deactivate(),this.interceptor=null)}resolveTarget(e,n,r,o){return this.hookedMethodId}};function cl(){return X()<28}function Sr(t,e){let r=pe(e).offset;return["jniCode","accessFlags","quickCode","interpreterCode"].reduce((o,s)=>{let i=r[s];if(i===void 0)return o;let l=t.add(i),a=s==="accessFlags"?da:ua;return o[s]=a.call(l),o},{})}function ht(t,e,n){let o=pe(n).offset;Object.keys(e).forEach(s=>{let i=o[s];if(i===void 0)return;let l=t.add(i);(s==="accessFlags"?pa:fa).call(l,e[s])})}var mn=class{constructor(e){this.methodId=e,this.originalMethod=null}replace(e,n,r,o,s){let{methodId:i}=this;this.originalMethod=Memory.dup(i,Yt);let l=r.reduce((p,u)=>p+u.size,0);n&&l++;let a=(i.add(dr).readU32()|mt)>>>0,c=l,d=0,f=l;i.add(dr).writeU32(a),i.add(ja).writeU16(c),i.add(xa).writeU16(d),i.add(Oa).writeU16(f),i.add(Ra).writeU32(dl(i)),s.dvmUseJNIBridge(i,e)}revert(e){Memory.copy(this.methodId,this.originalMethod,Yt)}resolveTarget(e,n,r,o){let s=r.handle.add(Lr).readPointer(),i;if(n)i=o.dvmDecodeIndirectRef(s,e.$h);else{let p=e.$borrowClassHandle(r);i=o.dvmDecodeIndirectRef(s,p.value),p.unref(r)}let l;n?l=i.add(Aa).readPointer():l=i;let a=l.toString(16),c=gt.get(a);if(c===void 0){let p=l.add(Na),u=l.add(ka),_=p.readPointer(),h=u.readS32(),m=h*y,g=Memory.alloc(2*m);Memory.copy(g,_,m),p.writePointer(g),c={classObject:l,vtablePtr:p,vtableCountPtr:u,vtable:_,vtableCount:h,shadowVtable:g,shadowVtableCount:h,targetMethods:new Map},gt.set(a,c)}let d=this.methodId.toString(16),f=c.targetMethods.get(d);if(f===void 0){f=Memory.dup(this.originalMethod,Yt);let p=c.shadowVtableCount++;c.shadowVtable.add(p*y).writePointer(f),f.add(Ma).writeU16(p),c.vtableCountPtr.writeS32(c.shadowVtableCount),c.targetMethods.set(d,f)}return f}};function dl(t){if(Process.arch!=="ia32")return ur;let e=t.add(Pa).readPointer().readCString();if(e===null||e.length===0||e.length>65535)return ur;let n;switch(e[0]){case"V":n=Fa;break;case"F":n=Da;break;case"D":n=za;break;case"J":n=Ua;break;case"Z":case"B":n=Ha;break;case"C":n=Ga;break;case"S":n=Ja;break;default:n=Va;break}let r=0;for(let o=e.length-1;o>0;o--){let s=e[o];r+=s==="D"||s==="J"?2:1}return n<<$a|r}function ul(t,e){let n=J();if(X()<23){let r=n["art::Thread::CurrentFromGdb"]();return n["art::mirror::Object::Clone"](t,r)}return Memory.dup(t,pe(e).size)}function An(t,e,n){xr(t,e,cn,n)}function Mn(t,e){xr(t,e,ln)}function jn(t,e){let n=J();if(X()<26)throw new Error("This API is only available on Android >= 8.0");_e(t,e,r=>{n["art::Runtime::DeoptimizeBootImage"](n.artRuntime)})}function xr(t,e,n,r){let o=J();if(X()<24)throw new Error("This API is only available on Android >= 7.0");_e(t,e,s=>{if(X()<30){if(!o.isJdwpStarted()){let l=pl(o);ei.push(l)}o.isDebuggerActive()||o["art::Dbg::GoActive"]();let i=Memory.alloc(8+y);switch(i.writeU32(n),n){case ln:break;case cn:i.add(8).writePointer(r);break;default:throw new Error("Unsupported deoptimization kind")}o["art::Dbg::RequestDeoptimization"](i),o["art::Dbg::ManageDeoptimization"]()}else{let i=o.artInstrumentation;if(i===null)throw new Error("Unable to find Instrumentation class in ART; please file a bug");let l=o["art::Instrumentation::EnableDeoptimization"];switch(l!==void 0&&(i.add(Wa().offset.deoptimizationEnabled).readU8()||l(i)),n){case ln:o["art::Instrumentation::DeoptimizeEverything"](i,Memory.allocUtf8String("frida"));break;case cn:o["art::Instrumentation::Deoptimize"](i,r);break;default:throw new Error("Unsupported deoptimization kind")}}})}var gn=class{constructor(){let e=Process.getModuleByName("libart.so"),n=e.getExportByName("_ZN3art4JDWP12JdwpAdbState6AcceptEv"),r=e.getExportByName("_ZN3art4JDWP12JdwpAdbState15ReceiveClientFdEv"),o=Cr(),s=Cr();this._controlFd=o[0],this._clientFd=s[0];let i=null;i=Interceptor.attach(n,function(l){let a=l[0];Memory.scanSync(a.add(8252),256,"00 ff ff ff ff 00")[0].address.add(1).writeS32(o[1]),i.detach()}),Interceptor.replace(r,new NativeCallback(function(l){return Interceptor.revert(r),s[1]},"int",["pointer"])),Interceptor.flush(),this._handshakeRequest=this._performHandshake()}async _performHandshake(){let e=new UnixInputStream(this._clientFd,{autoClose:!1}),n=new UnixOutputStream(this._clientFd,{autoClose:!1}),r=[74,68,87,80,45,72,97,110,100,115,104,97,107,101];try{await n.writeAll(r),await e.readAll(r.length)}catch{}}};function pl(t){let e=new gn;t["art::Dbg::SetJdwpAllowed"](1);let n=fl();t["art::Dbg::ConfigureJdwp"](n);let r=t["art::InternalDebuggerControlCallback::StartDebugger"];return r!==void 0?r(NULL):t["art::Dbg::StartJdwp"](),e}function fl(){let t=X()<28?2:3,e=0,n=t,r=!0,o=!1,s=e,i=8+Qe+2,l=Memory.alloc(i);return l.writeU32(n).add(4).writeU8(r?1:0).add(1).writeU8(o?1:0).add(1).add(Qe).writeU16(s),l}function Cr(){nn===null&&(nn=new NativeFunction(Process.getModuleByName("libc.so").getExportByName("socketpair"),"int",["int","int","int","pointer"]));let t=Memory.alloc(8);if(nn(Ba,qa,0,t)===-1)throw new Error("Unable to create socketpair for JDWP");return[t.readS32(),t.add(4).readS32()]}function hl(t){let e=oi().offset,n=t.vm.add(e.globalsLock),r=t.vm.add(e.globals),o=t["art::IndirectReferenceTable::Add"],s=t["art::ReaderWriterMutex::ExclusiveLock"],i=t["art::ReaderWriterMutex::ExclusiveUnlock"],l=0;return function(a,c,d){s(n,c);try{return o(r,l,d)}finally{i(n,c)}}}function _l(t){let e=t["art::Thread::DecodeJObject"];if(e===void 0)throw new Error("art::Thread::DecodeJObject is not available; please file a bug");return function(n,r,o){return e(r,o)}}var ml={ia32:Ir,x64:Ir,arm:gl,arm64:bl};function Or(t,e,n){let r=J(),o=e.handle.readPointer(),s,i=r.find("_ZN3art3JNIILb1EE14ExceptionClearEP7_JNIEnv");i!==null?s=i:s=o.add(Ct).readPointer();let l,a=r.find("_ZN3art3JNIILb1EE10FatalErrorEP7_JNIEnvPKc");a!==null?l=a:l=o.add(wa).readPointer();let c=ml[Process.arch];if(c===void 0)throw new Error("Not yet implemented for "+Process.arch);let d=null,f=ze(t).offset,p=f.exception,u=new Set,_=f.isExceptionReportedToInstrumentation;_!==null&&u.add(_);let h=f.throwLocation;h!==null&&(u.add(h),u.add(h+y),u.add(h+2*y));let m=65536,g=Memory.alloc(m);return Memory.patchCode(g,m,v=>{d=c(v,g,s,l,p,u,n)}),d._code=g,d._callback=n,d}function Ir(t,e,n,r,o,s,i){let l={},a=new Set,c=[n];for(;c.length>0;){let h=c.shift();if(Object.values(l).some(({begin:M,end:x})=>h.compare(M)>=0&&h.compare(x)<0))continue;let g=h.toString(),v={begin:h},I=null,L=!1;do{if(h.equals(r)){L=!0;break}let M=Instruction.parse(h);I=M;let x=l[M.address.toString()];if(x!==void 0){delete l[x.begin.toString()],l[g]=x,x.begin=v.begin,v=null;break}let A=null;switch(M.mnemonic){case"jmp":A=ptr(M.operands[0].value),L=!0;break;case"je":case"jg":case"jle":case"jne":case"js":A=ptr(M.operands[0].value);break;case"ret":L=!0;break}A!==null&&(a.add(A.toString()),c.push(A),c.sort((N,E)=>N.compare(E))),h=M.next}while(!L);v!==null&&(v.end=I.address.add(I.size),l[g]=v)}let d=Object.keys(l).map(h=>l[h]);d.sort((h,m)=>h.begin.compare(m.begin));let f=l[n.toString()];d.splice(d.indexOf(f),1),d.unshift(f);let p=new X86Writer(t,{pc:e}),u=!1,_=null;return d.forEach(h=>{let m=h.end.sub(h.begin).toInt32(),g=new X86Relocator(h.begin,p),v;for(;(v=g.readOne())!==0;){let I=g.input,{mnemonic:L}=I,M=I.address.toString();a.has(M)&&p.putLabel(M);let x=!0;switch(L){case"jmp":p.putJmpNearLabel(ce(I.operands[0])),x=!1;break;case"je":case"jg":case"jle":case"jne":case"js":p.putJccNearLabel(L,ce(I.operands[0]),"no-hint"),x=!1;break;case"mov":{let[A,N]=I.operands;if(A.type==="mem"&&N.type==="imm"){let E=A.value,w=E.disp;if(w===o&&N.value.valueOf()===0){if(_=E.base,p.putPushfx(),p.putPushax(),p.putMovRegReg("xbp","xsp"),y===4)p.putAndRegU32("esp",4294967280);else{let j=_!=="rdi"?"rdi":"rsi";p.putMovRegU64(j,uint64("0xfffffffffffffff0")),p.putAndRegReg("rsp",j)}p.putCallAddressWithAlignedArguments(i,[_]),p.putMovRegReg("xsp","xbp"),p.putPopax(),p.putPopfx(),u=!0,x=!1}else s.has(w)&&E.base===_&&(x=!1)}break}case"call":{let A=I.operands[0];A.type==="mem"&&A.value.disp===Ct&&(y===4?(p.putPopReg("eax"),p.putMovRegRegOffsetPtr("eax","eax",4),p.putPushReg("eax")):p.putMovRegRegOffsetPtr("rdi","rdi",8),p.putCallAddressWithArguments(i,[]),u=!0,x=!1);break}}if(x?g.writeAll():g.skipOne(),v===m)break}g.dispose()}),p.dispose(),u||xn(),new NativeFunction(e,"void",["pointer"],q)}function gl(t,e,n,r,o,s,i){let l={},a=new Set,c=ptr(1).not(),d=[n];for(;d.length>0;){let g=d.shift();if(Object.values(l).some(({begin:w,end:j})=>g.compare(w)>=0&&g.compare(j)<0))continue;let I=g.and(c),L=I.toString(),M=g.and(1),x={begin:I},A=null,N=!1,E=0;do{if(g.equals(r)){N=!0;break}let w=Instruction.parse(g),{mnemonic:j}=w;A=w;let O=g.and(c).toString(),F=l[O];if(F!==void 0){delete l[F.begin.toString()],l[L]=F,F.begin=x.begin,x=null;break}let D=E===0,R=null;switch(j){case"b":R=ptr(w.operands[0].value),N=D;break;case"beq.w":case"beq":case"bne":case"bne.w":case"bgt":R=ptr(w.operands[0].value);break;case"cbz":case"cbnz":R=ptr(w.operands[1].value);break;case"pop.w":D&&(N=w.operands.filter(U=>U.value==="pc").length===1);break}switch(j){case"it":E=1;break;case"itt":E=2;break;case"ittt":E=3;break;case"itttt":E=4;break;default:E>0&&E--;break}R!==null&&(a.add(R.toString()),d.push(R.or(M)),d.sort((U,Y)=>U.compare(Y))),g=w.next}while(!N);x!==null&&(x.end=A.address.add(A.size),l[L]=x)}let f=Object.keys(l).map(g=>l[g]);f.sort((g,v)=>g.begin.compare(v.begin));let p=l[n.and(c).toString()];f.splice(f.indexOf(p),1),f.unshift(p);let u=new ThumbWriter(t,{pc:e}),_=!1,h=null,m=null;return f.forEach(g=>{let v=new ThumbRelocator(g.begin,u),I=g.begin,L=g.end,M=0;do{if(v.readOne()===0)throw new Error("Unexpected end of block");let A=v.input;I=A.address,M=A.size;let{mnemonic:N}=A,E=I.toString();a.has(E)&&u.putLabel(E);let w=!0;switch(N){case"b":u.putBLabel(ce(A.operands[0])),w=!1;break;case"beq.w":u.putBCondLabelWide("eq",ce(A.operands[0])),w=!1;break;case"bne.w":u.putBCondLabelWide("ne",ce(A.operands[0])),w=!1;break;case"beq":case"bne":case"bgt":u.putBCondLabelWide(N.substr(1),ce(A.operands[0])),w=!1;break;case"cbz":{let j=A.operands;u.putCbzRegLabel(j[0].value,ce(j[1])),w=!1;break}case"cbnz":{let j=A.operands;u.putCbnzRegLabel(j[0].value,ce(j[1])),w=!1;break}case"str":case"str.w":{let j=A.operands[1].value,S=j.disp;if(S===o){h=j.base;let O=h!=="r4"?"r4":"r5",F=["r0","r1","r2","r3",O,"r9","r12","lr"];u.putPushRegs(F),u.putMrsRegReg(O,"apsr-nzcvq"),u.putCallAddressWithArguments(i,[h]),u.putMsrRegReg("apsr-nzcvq",O),u.putPopRegs(F),_=!0,w=!1}else s.has(S)&&j.base===h&&(w=!1);break}case"ldr":{let[j,S]=A.operands;if(S.type==="mem"){let O=S.value;O.base[0]==="r"&&O.disp===Ct&&(m=j.value)}break}case"blx":A.operands[0].value===m&&(u.putLdrRegRegOffset("r0","r0",4),u.putCallAddressWithArguments(i,["r0"]),_=!0,m=null,w=!1);break}w?v.writeAll():v.skipOne()}while(!I.add(M).equals(L));v.dispose()}),u.dispose(),_||xn(),new NativeFunction(e.or(1),"void",["pointer"],q)}function bl(t,e,n,r,o,s,i){let l={},a=new Set,c=[n];for(;c.length>0;){let g=c.shift();if(Object.values(l).some(({begin:A,end:N})=>g.compare(A)>=0&&g.compare(N)<0))continue;let I=g.toString(),L={begin:g},M=null,x=!1;do{if(g.equals(r)){x=!0;break}let A;try{A=Instruction.parse(g)}catch(w){if(g.readU32()===0){x=!0;break}else throw w}M=A;let N=l[A.address.toString()];if(N!==void 0){delete l[N.begin.toString()],l[I]=N,N.begin=L.begin,L=null;break}let E=null;switch(A.mnemonic){case"b":E=ptr(A.operands[0].value),x=!0;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":E=ptr(A.operands[0].value);break;case"cbz":case"cbnz":E=ptr(A.operands[1].value);break;case"tbz":case"tbnz":E=ptr(A.operands[2].value);break;case"ret":x=!0;break}E!==null&&(a.add(E.toString()),c.push(E),c.sort((w,j)=>w.compare(j))),g=A.next}while(!x);L!==null&&(L.end=M.address.add(M.size),l[I]=L)}let d=Object.keys(l).map(g=>l[g]);d.sort((g,v)=>g.begin.compare(v.begin));let f=l[n.toString()];d.splice(d.indexOf(f),1),d.unshift(f);let p=new Arm64Writer(t,{pc:e});p.putBLabel("performTransition");let u=e.add(p.offset);p.putPushAllXRegisters(),p.putCallAddressWithArguments(i,["x0"]),p.putPopAllXRegisters(),p.putRet(),p.putLabel("performTransition");let _=!1,h=null,m=null;return d.forEach(g=>{let v=g.end.sub(g.begin).toInt32(),I=new Arm64Relocator(g.begin,p),L;for(;(L=I.readOne())!==0;){let M=I.input,{mnemonic:x}=M,A=M.address.toString();a.has(A)&&p.putLabel(A);let N=!0;switch(x){case"b":p.putBLabel(ce(M.operands[0])),N=!1;break;case"b.eq":case"b.ne":case"b.le":case"b.gt":p.putBCondLabel(x.substr(2),ce(M.operands[0])),N=!1;break;case"cbz":{let E=M.operands;p.putCbzRegLabel(E[0].value,ce(E[1])),N=!1;break}case"cbnz":{let E=M.operands;p.putCbnzRegLabel(E[0].value,ce(E[1])),N=!1;break}case"tbz":{let E=M.operands;p.putTbzRegImmLabel(E[0].value,E[1].value.valueOf(),ce(E[2])),N=!1;break}case"tbnz":{let E=M.operands;p.putTbnzRegImmLabel(E[0].value,E[1].value.valueOf(),ce(E[2])),N=!1;break}case"str":{let E=M.operands,w=E[0].value,j=E[1].value,S=j.disp;w==="xzr"&&S===o?(h=j.base,p.putPushRegReg("x0","lr"),p.putMovRegReg("x0",h),p.putBlImm(u),p.putPopRegReg("x0","lr"),_=!0,N=!1):s.has(S)&&j.base===h&&(N=!1);break}case"ldr":{let E=M.operands,w=E[1].value;w.base[0]==="x"&&w.disp===Ct&&(m=E[0].value);break}case"blr":M.operands[0].value===m&&(p.putLdrRegRegOffset("x0","x0",8),p.putCallAddressWithArguments(i,["x0"]),_=!0,m=null,N=!1);break}if(N?I.writeAll():I.skipOne(),L===v)break}I.dispose()}),p.dispose(),_||xn(),new NativeFunction(e,"void",["pointer"],q)}function xn(){throw new Error("Unable to parse ART internals; please file a bug")}function vl(t){let e=t["art::ArtMethod::PrettyMethod"];e!==void 0&&(Interceptor.attach(e.impl,ne.hooks.ArtMethod.prettyMethod),Interceptor.flush())}function ce(t){return ptr(t.value).toString()}function yl(t,e){return new NativeFunction(t,"pointer",e,q)}function El(t,e){let n=new NativeFunction(t,"void",["pointer"].concat(e),q);return function(){let r=Memory.alloc(y);return n(r,...arguments),r.readPointer()}}function _t(t,e){let{arch:n}=Process;switch(n){case"ia32":case"arm64":{let r;n==="ia32"?r=De(64,i=>{let l=1+e.length,a=l*4;i.putSubRegImm("esp",a);for(let c=0;c!==l;c++){let d=c*4;i.putMovRegRegOffsetPtr("eax","esp",a+4+d),i.putMovRegOffsetPtrReg("esp",d,"eax")}i.putCallAddress(t),i.putAddRegImm("esp",a-4),i.putRet()}):r=De(32,i=>{i.putMovRegReg("x8","x0"),e.forEach((l,a)=>{i.putMovRegReg("x"+a,"x"+(a+1))}),i.putLdrRegAddress("x7",t),i.putBrReg("x7")});let o=new NativeFunction(r,"void",["pointer"].concat(e),q),s=function(...i){o(...i)};return s.handle=r,s.impl=t,s}default:{let r=new NativeFunction(t,"void",["pointer"].concat(e),q);return r.impl=t,r}}}var Et=class{constructor(){this.handle=Memory.alloc(Qe)}dispose(){let[e,n]=this._getData();n||J().$delete(e)}disposeToString(){let e=this.toString();return this.dispose(),e}toString(){let[e]=this._getData();return e.readUtf8String()}_getData(){let e=this.handle,n=(e.readU8()&1)===0;return[n?e.add(1):e.add(2*y).readPointer(),n]}},bn=class{$delete(){this.dispose(),J().$delete(this)}constructor(e,n){this.handle=e,this._begin=e,this._end=e.add(y),this._storage=e.add(2*y),this._elementSize=n}init(){this.begin=NULL,this.end=NULL,this.storage=NULL}dispose(){J().$delete(this.begin)}get begin(){return this._begin.readPointer()}set begin(e){this._begin.writePointer(e)}get end(){return this._end.readPointer()}set end(e){this._end.writePointer(e)}get storage(){return this._storage.readPointer()}set storage(e){this._storage.writePointer(e)}get size(){return this.end.sub(this.begin).toInt32()/this._elementSize}},Ye=class t extends bn{static $new(){let e=new t(J().$new(Za));return e.init(),e}constructor(e){super(e,y)}get handles(){let e=[],n=this.begin,r=this.end;for(;!n.equals(r);)e.push(n.readPointer()),n=n.add(y);return e}},Sl=0,Pr=y,Rr=Pr+4,Cl=-1,St=class t{$delete(){this.dispose(),J().$delete(this)}constructor(e){this.handle=e,this._link=e.add(Sl),this._numberOfReferences=e.add(Pr)}init(e,n){this.link=e,this.numberOfReferences=n}dispose(){}get link(){return new t(this._link.readPointer())}set link(e){this._link.writePointer(e)}get numberOfReferences(){return this._numberOfReferences.readS32()}set numberOfReferences(e){this._numberOfReferences.writeS32(e)}},Fr=wl(Rr),Dr=Fr+y,Il=Dr+y,Xe=class t extends St{static $new(e,n){let r=new t(J().$new(Il));return r.init(e,n),r}constructor(e){super(e),this._self=e.add(Fr),this._currentScope=e.add(Dr);let o=(64-y-4-4)/4;this._scopeLayout=Ke.layoutForCapacity(o),this._topHandleScopePtr=null}init(e,n){let r=e.add(ze(n).offset.topHandleScope);this._topHandleScopePtr=r,super.init(r.readPointer(),Cl),this.self=e,this.currentScope=Ke.$new(this._scopeLayout),r.writePointer(this)}dispose(){this._topHandleScopePtr.writePointer(this.link);let e;for(;(e=this.currentScope)!==null;){let n=e.link;e.$delete(),this.currentScope=n}}get self(){return this._self.readPointer()}set self(e){this._self.writePointer(e)}get currentScope(){let e=this._currentScope.readPointer();return e.isNull()?null:new Ke(e,this._scopeLayout)}set currentScope(e){this._currentScope.writePointer(e)}newHandle(e){return this.currentScope.newHandle(e)}},Ke=class t extends St{static $new(e){let n=new t(J().$new(e.size),e);return n.init(),n}constructor(e,n){super(e);let{offset:r}=n;this._refsStorage=e.add(r.refsStorage),this._pos=e.add(r.pos),this._layout=n}init(){super.init(NULL,this._layout.numberOfReferences),this.pos=0}get pos(){return this._pos.readU32()}set pos(e){this._pos.writeU32(e)}newHandle(e){let n=this.pos,r=this._refsStorage.add(n*4);return r.writeS32(e.toInt32()),this.pos=n+1,r}static layoutForCapacity(e){let n=Rr,r=n+e*4;return{size:r+4,numberOfReferences:e,offset:{refsStorage:n,pos:r}}}},Tl={arm:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[26625,18947,17041,53505,19202,18200,18288,48896],i=s.length*2,l=i+4,a=l+4;return Memory.patchCode(r,a,function(c){s.forEach((d,f)=>{c.add(f*2).writeU16(d)}),c.add(i).writeS32(t),c.add(l).writePointer(o)}),r.or(1)},arm64:function(t,e){let n=Process.pageSize,r=Memory.alloc(n);Memory.protect(r,n,"rwx");let o=new NativeCallback(e,"void",["pointer"]);r._onMatchCallback=o;let s=[3107979265,402653378,1795293247,1409286241,1476395139,3592355936,3596551104],i=s.length*4,l=i+4,a=l+8;return Memory.patchCode(r,a,function(c){s.forEach((d,f)=>{c.add(f*4).writeU32(d)}),c.add(i).writeS32(t),c.add(l).writePointer(o)}),r}};function On(t,e){return(Tl[Process.arch]||Ll)(t,e)}function Ll(t,e){return new NativeCallback(n=>{n.readS32()===t&&e(n)},"void",["pointer","pointer"])}function wl(t){let e=t%y;return e!==0?t+y-e:t}var kl=4,{pointerSize:V}=Process,Nl=256,Al=65536,Ml=131072,jl=33554432,xl=67108864,Ol=134217728,je={exceptions:"propagate"},Jr=ae(Bl),Pl=ae(Wl),Rl=ae(Hl),Pn=null,Rn=!1,wt=new Map,tt=new Map;function ye(){return Pn===null&&(Pn=Fl()),Pn}function Fl(){let t=Process.enumerateModules().filter(a=>/jvm.(dll|dylib|so)$/.test(a.name));if(t.length===0)return null;let e=t[0],n={flavor:"jvm"},r=Process.platform==="windows"?[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]],"VMThread::execute":["VMThread::execute","void",["pointer"]],"Method::size":["Method::size","int",["int"]],"Method::set_native_function":["Method::set_native_function","void",["pointer","pointer","int"]],"Method::clear_native_function":["Method::clear_native_function","void",["pointer"]],"Method::jmethod_id":["Method::jmethod_id","pointer",["pointer"]],"ClassLoaderDataGraph::classes_do":["ClassLoaderDataGraph::classes_do","void",["pointer"]],"NMethodSweeper::sweep_code_cache":["NMethodSweeper::sweep_code_cache","void",[]],"OopMapCache::flush_obsolete_entries":["OopMapCache::flush_obsolete_entries","void",["pointer"]]},variables:{"VM_RedefineClasses::`vftable'":function(a){this.vtableRedefineClasses=a},"VM_RedefineClasses::doit":function(a){this.redefineClassesDoIt=a},"VM_RedefineClasses::doit_prologue":function(a){this.redefineClassesDoItPrologue=a},"VM_RedefineClasses::doit_epilogue":function(a){this.redefineClassesDoItEpilogue=a},"VM_RedefineClasses::allow_nested_vm_operations":function(a){this.redefineClassesAllow=a},"NMethodSweeper::_traversals":function(a){this.traversals=a},"NMethodSweeper::_should_sweep":function(a){this.shouldSweep=a}},optionals:[]}]:[{module:e,functions:{JNI_GetCreatedJavaVMs:["JNI_GetCreatedJavaVMs","int",["pointer","int","pointer"]],_ZN6Method4sizeEb:["Method::size","int",["int"]],_ZN6Method19set_native_functionEPhb:["Method::set_native_function","void",["pointer","pointer","int"]],_ZN6Method21clear_native_functionEv:["Method::clear_native_function","void",["pointer"]],_ZN6Method24restore_unshareable_infoEP10JavaThread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method24restore_unshareable_infoEP6Thread:["Method::restore_unshareable_info","void",["pointer","pointer"]],_ZN6Method11link_methodERK12methodHandleP10JavaThread:["Method::link_method","void",["pointer","pointer","pointer"]],_ZN6Method10jmethod_idEv:["Method::jmethod_id","pointer",["pointer"]],_ZN6Method10clear_codeEv:function(a){let c=new NativeFunction(a,"void",["pointer"],je);this["Method::clear_code"]=function(d){c(d)}},_ZN6Method10clear_codeEb:function(a){let c=new NativeFunction(a,"void",["pointer","int"],je),d=0;this["Method::clear_code"]=function(f){c(f,d)}},_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass:["VM_RedefineClasses::mark_dependent_code","void",["pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeEv:["VM_RedefineClasses::flush_dependent_code","void",[]],_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread:["VM_RedefineClasses::flush_dependent_code","void",["pointer","pointer","pointer"]],_ZN19ResolvedMethodTable21adjust_method_entriesEPb:["ResolvedMethodTable::adjust_method_entries","void",["pointer"]],_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb:["MemberNameTable::adjust_method_entries","void",["pointer","pointer","pointer"]],_ZN17ConstantPoolCache21adjust_method_entriesEPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer"],je);this["ConstantPoolCache::adjust_method_entries"]=function(d,f,p){c(d,p)}},_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb:function(a){let c=new NativeFunction(a,"void",["pointer","pointer","pointer"],je);this["ConstantPoolCache::adjust_method_entries"]=function(d,f,p){c(d,f,p)}},_ZN20ClassLoaderDataGraph10classes_doEP12KlassClosure:["ClassLoaderDataGraph::classes_do","void",["pointer"]],_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb:["ClassLoaderDataGraph::clean_deallocate_lists","void",["int"]],_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_:["JavaThread::thread_from_jni_environment","pointer",["pointer"]],_ZN8VMThread7executeEP12VM_Operation:["VMThread::execute","void",["pointer"]],_ZN11OopMapCache22flush_obsolete_entriesEv:["OopMapCache::flush_obsolete_entries","void",["pointer"]],_ZN14NMethodSweeper11force_sweepEv:["NMethodSweeper::force_sweep","void",[]],_ZN14NMethodSweeper16sweep_code_cacheEv:["NMethodSweeper::sweep_code_cache","void",[]],_ZN14NMethodSweeper17sweep_in_progressEv:["NMethodSweeper::sweep_in_progress","bool",[]],JVM_Sleep:["JVM_Sleep","void",["pointer","pointer","long"]]},variables:{_ZN18VM_RedefineClasses14_the_class_oopE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses10_the_classE:function(a){this.redefineClass=a},_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass:function(a){this.doKlass=a},_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass:function(a){this.doKlass=a},_ZTV18VM_RedefineClasses:function(a){this.vtableRedefineClasses=a},_ZN18VM_RedefineClasses4doitEv:function(a){this.redefineClassesDoIt=a},_ZN18VM_RedefineClasses13doit_prologueEv:function(a){this.redefineClassesDoItPrologue=a},_ZN18VM_RedefineClasses13doit_epilogueEv:function(a){this.redefineClassesDoItEpilogue=a},_ZN18VM_RedefineClassesD0Ev:function(a){this.redefineClassesDispose0=a},_ZN18VM_RedefineClassesD1Ev:function(a){this.redefineClassesDispose1=a},_ZNK18VM_RedefineClasses26allow_nested_vm_operationsEv:function(a){this.redefineClassesAllow=a},_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream:function(a){this.redefineClassesOnError=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread:function(a){this.createNewDefaultVtableIndices=a},_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread:function(a){this.createNewDefaultVtableIndices=a},_ZN19Abstract_VM_Version19jre_release_versionEv:function(a){let d=new NativeFunction(a,"pointer",[],je)().readCString();this.version=d.startsWith("1.8")?8:d.startsWith("9.")?9:parseInt(d.slice(0,2),10),this.versionS=d},_ZN14NMethodSweeper11_traversalsE:function(a){this.traversals=a},_ZN14NMethodSweeper21_sweep_fractions_leftE:function(a){this.fractions=a},_ZN14NMethodSweeper13_should_sweepE:function(a){this.shouldSweep=a}},optionals:["_ZN6Method24restore_unshareable_infoEP10JavaThread","_ZN6Method24restore_unshareable_infoEP6Thread","_ZN6Method11link_methodERK12methodHandleP10JavaThread","_ZN6Method10clear_codeEv","_ZN6Method10clear_codeEb","_ZN18VM_RedefineClasses19mark_dependent_codeEP13InstanceKlass","_ZN18VM_RedefineClasses20flush_dependent_codeEv","_ZN18VM_RedefineClasses20flush_dependent_codeEP13InstanceKlassP6Thread","_ZN18VM_RedefineClasses20flush_dependent_codeE19instanceKlassHandleP6Thread","_ZN19ResolvedMethodTable21adjust_method_entriesEPb","_ZN15MemberNameTable21adjust_method_entriesEP13InstanceKlassPb","_ZN17ConstantPoolCache21adjust_method_entriesEPb","_ZN17ConstantPoolCache21adjust_method_entriesEP13InstanceKlassPb","_ZN20ClassLoaderDataGraph22clean_deallocate_listsEb","_ZN10JavaThread27thread_from_jni_environmentEP7JNIEnv_","_ZN14NMethodSweeper11force_sweepEv","_ZN14NMethodSweeper17sweep_in_progressEv","_ZN18VM_RedefineClasses14_the_class_oopE","_ZN18VM_RedefineClasses10_the_classE","_ZN18VM_RedefineClasses25AdjustCpoolCacheAndVtable8do_klassEP5Klass","_ZN18VM_RedefineClasses22AdjustAndCleanMetadata8do_klassEP5Klass","_ZN18VM_RedefineClassesD0Ev","_ZN18VM_RedefineClassesD1Ev","_ZNK18VM_RedefineClasses14print_on_errorEP12outputStream","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP10JavaThread","_ZN13InstanceKlass33create_new_default_vtable_indicesEiP6Thread","_ZN14NMethodSweeper21_sweep_fractions_leftE"]}],o=[];if(r.forEach(function(a){let c=a.module,d=a.functions||{},f=a.variables||{},p=new Set(a.optionals||[]),u=c.enumerateExports().reduce(function(h,m){return h[m.name]=m,h},{}),_=c.enumerateSymbols().reduce(function(h,m){return h[m.name]=m,h},u);Object.keys(d).forEach(function(h){let m=_[h];if(m!==void 0){let g=d[h];typeof g=="function"?g.call(n,m.address):n[g[0]]=new NativeFunction(m.address,g[1],g[2],je)}else p.has(h)||o.push(h)}),Object.keys(f).forEach(function(h){let m=_[h];m!==void 0?f[h].call(n,m.address):p.has(h)||o.push(h)})}),o.length>0)throw new Error("Java API only partially available; please file a bug. Missing: "+o.join(", "));let s=Memory.alloc(V),i=Memory.alloc(kl);if(ie("JNI_GetCreatedJavaVMs",n.JNI_GetCreatedJavaVMs(s,1,i)),i.readInt()===0)return null;n.vm=s.readPointer();let l=Process.platform==="windows"?{$new:["??2@YAPEAX_K@Z","pointer",["ulong"]],$delete:["??3@YAXPEAX@Z","void",["pointer"]]}:{$new:["_Znwm","pointer",["ulong"]],$delete:["_ZdlPv","void",["pointer"]]};for(let[a,[c,d,f]]of Object.entries(l)){let p=Module.findGlobalExportByName(c);if(p===null&&(p=DebugSymbol.fromName(c).address,p.isNull()))throw new Error(`unable to find C++ allocator API, missing: '${c}'`);n[a]=new NativeFunction(p,d,f,je)}return n.jvmti=Dl(n),n["JavaThread::thread_from_jni_environment"]===void 0&&(n["JavaThread::thread_from_jni_environment"]=Ul(n)),n}function Dl(t){let e=new ve(t),n;return e.perform(()=>{let r=e.tryGetEnvHandle(lt.v1_0);if(r===null)throw new Error("JVMTI not available");n=new Ce(r,e);let o=Memory.alloc(8);o.writeU64(ct.canTagObjects);let s=n.addCapabilities(o);ie("getEnvJvmti::AddCapabilities",s)}),n}var zl={x64:Vl};function Ul(t){let e=null,n=zl[Process.arch];if(n!==void 0){let o=new ve(t).perform(s=>s.handle.readPointer().add(6*V).readPointer());e=Ie(o,n,{limit:11})}return e===null?()=>{throw new Error("Unable to make thread_from_jni_environment() helper for the current architecture")}:r=>r.add(e)}function Vl(t){if(t.mnemonic!=="lea")return null;let{base:e,disp:n}=t.operands[1].value;return e==="rdi"&&n<0?n:null}function Gr(t,e){}var Fn=class{constructor(e){this.methodId=e,this.method=e.readPointer(),this.originalMethod=null,this.newMethod=null,this.resolved=null,this.impl=null,this.key=e.toString(16)}replace(e,n,r,o,s){let{key:i}=this,l=tt.get(i);l!==void 0&&(tt.delete(i),this.method=l.method,this.originalMethod=l.originalMethod,this.newMethod=l.newMethod,this.resolved=l.resolved),this.impl=e,wt.set(i,this),zr(o)}revert(e){let{key:n}=this;wt.delete(n),tt.set(n,this),zr(e)}resolveTarget(e,n,r,o){let{resolved:s,originalMethod:i,methodId:l}=this;if(s!==null)return s;if(i===null)return l;i.oldMethod.vtableIndexPtr.writeS32(-2);let c=Memory.alloc(V);return c.writePointer(this.method),this.resolved=c,c}};function zr(t){Rn||(Rn=!0,Script.nextTick(Jl,t))}function Jl(t){let e=new Map(wt),n=new Map(tt);wt.clear(),tt.clear(),Rn=!1,t.perform(r=>{let o=ye(),s=o["JavaThread::thread_from_jni_environment"](r.handle),i=!1;Hr(()=>{e.forEach(l=>{let{method:a,originalMethod:c,impl:d,methodId:f,newMethod:p}=l;c===null?(l.originalMethod=Zr(a),l.newMethod=$l(a,d,s),Ur(l.newMethod,f,s)):o["Method::set_native_function"](p.method,d,0)}),n.forEach(l=>{let{originalMethod:a,methodId:c,newMethod:d}=l;if(a!==null){Zl(a);let f=a.oldMethod;f.oldMethod=d,Ur(f,c,s),i=!0}})}),i&&Gl(r.handle)})}function Gl(t){let{fractions:e,shouldSweep:n,traversals:r,"NMethodSweeper::sweep_code_cache":o,"NMethodSweeper::sweep_in_progress":s,"NMethodSweeper::force_sweep":i,JVM_Sleep:l}=ye();if(i!==void 0)Thread.sleep(.05),i(),Thread.sleep(.05),i();else{let a=r.readS64(),c=a+2;for(;c>a;)e.writeS32(1),l(t,NULL,50),s()||Hr(()=>{Thread.sleep(.05)}),n.readU8()===0&&(e.writeS32(1),o()),a=r.readS64()}}function Hr(t,e,n){let{execute:r,vtable:o,vtableSize:s,doItOffset:i,prologueOffset:l,epilogueOffset:a}=Rl(),c=Memory.dup(o,s),d=Memory.alloc(V*25);d.writePointer(c);let f=new NativeCallback(t,"void",["pointer"]);c.add(i).writePointer(f);let p=null;e!==void 0&&(p=new NativeCallback(e,"int",["pointer"]),c.add(l).writePointer(p));let u=null;n!==void 0&&(u=new NativeCallback(n,"void",["pointer"]),c.add(a).writePointer(u)),r(d)}function Hl(){let{vtableRedefineClasses:t,redefineClassesDoIt:e,redefineClassesDoItPrologue:n,redefineClassesDoItEpilogue:r,redefineClassesOnError:o,redefineClassesAllow:s,redefineClassesDispose0:i,redefineClassesDispose1:l,"VMThread::execute":a}=ye(),c=t.add(2*V),d=15*V,f=Memory.dup(c,d),p=new NativeCallback(()=>{},"void",["pointer"]),u,_,h;for(let m=0;m!==d;m+=V){let g=f.add(m),v=g.readPointer();o!==void 0&&v.equals(o)||i!==void 0&&v.equals(i)||l!==void 0&&v.equals(l)?g.writePointer(p):v.equals(e)?u=m:v.equals(n)?(_=m,g.writePointer(s)):v.equals(r)&&(h=m,g.writePointer(p))}return{execute:a,emptyCallback:p,vtable:f,vtableSize:d,doItOffset:u,prologueOffset:_,epilogueOffset:h}}function $r(t){return new Fn(t)}function Ur(t,e,n){let{method:r,oldMethod:o}=t,s=ye();t.methodsArray.add(t.methodIndex*V).writePointer(r),t.vtableIndex>=0&&t.vtable.add(t.vtableIndex*V).writePointer(r),e.writePointer(r),o.accessFlagsPtr.writeU32((o.accessFlags|Al|Ml)>>>0);let i=s["OopMapCache::flush_obsolete_entries"];if(i!==void 0){let{oopMapCache:_}=t;_.isNull()||i(_)}let l=s["VM_RedefineClasses::mark_dependent_code"],a=s["VM_RedefineClasses::flush_dependent_code"];l!==void 0?(l(NULL,t.instanceKlass),a()):a(NULL,t.instanceKlass,n);let c=Memory.alloc(1);c.writeU8(1),s["ConstantPoolCache::adjust_method_entries"](t.cache,t.instanceKlass,c);let d=Memory.alloc(3*V),f=Memory.alloc(V);f.writePointer(s.doKlass),d.writePointer(f),d.add(V).writePointer(n),d.add(2*V).writePointer(n),s.redefineClass!==void 0&&s.redefineClass.writePointer(t.instanceKlass),s["ClassLoaderDataGraph::classes_do"](d);let p=s["ResolvedMethodTable::adjust_method_entries"];if(p!==void 0)p(c);else{let{memberNames:_}=t;if(!_.isNull()){let h=s["MemberNameTable::adjust_method_entries"];h!==void 0&&h(_,t.instanceKlass,c)}}let u=s["ClassLoaderDataGraph::clean_deallocate_lists"];u!==void 0&&u(0)}function $l(t,e,n){let r=ye(),o=Zr(t);o.constPtr.writePointer(o.const);let s=(o.accessFlags|Nl|jl|xl|Ol)>>>0;if(o.accessFlagsPtr.writeU32(s),o.signatureHandler.writePointer(NULL),o.adapter.writePointer(NULL),o.i2iEntry.writePointer(NULL),r["Method::clear_code"](o.method),o.dataPtr.writePointer(NULL),o.countersPtr.writePointer(NULL),o.stackmapPtr.writePointer(NULL),r["Method::clear_native_function"](o.method),r["Method::set_native_function"](o.method,e,0),r["Method::restore_unshareable_info"](o.method,n),r.version>=17){let i=Memory.alloc(2*V);i.writePointer(o.method),i.add(V).writePointer(n),r["Method::link_method"](o.method,i,n)}return o}function Zr(t){let e=Jr(),n=t.add(e.method.constMethodOffset).readPointer(),r=n.add(e.constMethod.sizeOffset).readS32()*V,o=Memory.alloc(r+e.method.size);Memory.copy(o,n,r);let s=o.add(r);Memory.copy(s,t,e.method.size);let i=Vr(s,o,r),l=Vr(t,n,r);return i.oldMethod=l,i}function Vr(t,e,n){let r=ye(),o=Jr(),s=t.add(o.method.constMethodOffset),i=t.add(o.method.methodDataOffset),l=t.add(o.method.methodCountersOffset),a=t.add(o.method.accessFlagsOffset),c=a.readU32(),d=o.getAdapterPointer(t,e),f=t.add(o.method.i2iEntryOffset),p=t.add(o.method.signatureHandlerOffset),u=e.add(o.constMethod.constantPoolOffset).readPointer(),_=e.add(o.constMethod.stackmapDataOffset),h=u.add(o.constantPool.instanceKlassOffset).readPointer(),m=u.add(o.constantPool.cacheOffset).readPointer(),g=Pl(),v=h.add(g.methodsOffset).readPointer(),I=v.readS32(),L=v.add(V),M=e.add(o.constMethod.methodIdnumOffset).readU16(),x=t.add(o.method.vtableIndexOffset),A=x.readS32(),N=h.add(g.vtableOffset),E=h.add(g.oopMapCacheOffset).readPointer(),w=r.version>=10?h.add(g.memberNamesOffset).readPointer():NULL;return{method:t,methodSize:o.method.size,const:e,constSize:n,constPtr:s,dataPtr:i,countersPtr:l,stackmapPtr:_,instanceKlass:h,methodsArray:L,methodsCount:I,methodIndex:M,vtableIndex:A,vtableIndexPtr:x,vtable:N,accessFlags:c,accessFlagsPtr:a,adapter:d,i2iEntry:f,signatureHandler:p,memberNames:w,cache:m,oopMapCache:E}}function Zl(t){let{oldMethod:e}=t;e.accessFlagsPtr.writeU32(e.accessFlags),e.vtableIndexPtr.writeS32(e.vtableIndex)}function Bl(){let t=ye(),{version:e}=t,n;e>=17?n="method:early":e>=9&&e<=16?n="const-method":n="method:late";let o=t["Method::size"](1)*V,s=V,i=2*V,l=3*V,a=4*V,c=n==="method:early"?V:0,d=a+c,f=d+4,p=f+4+8,u=p+V,_=c!==0?a:u,h=o-2*V,m=o-V,g=8,v=g+V,I=v+V,L=n==="const-method"?V:0,M=I+L,x=M+14,A=2*V,N=3*V;return{getAdapterPointer:L!==0?function(w,j){return j.add(I)}:function(w,j){return w.add(_)},method:{size:o,constMethodOffset:s,methodDataOffset:i,methodCountersOffset:l,accessFlagsOffset:d,vtableIndexOffset:f,i2iEntryOffset:p,nativeFunctionOffset:h,signatureHandlerOffset:m},constMethod:{constantPoolOffset:g,stackmapDataOffset:v,sizeOffset:M,methodIdnumOffset:x},constantPool:{cacheOffset:A,instanceKlassOffset:N}}}var ql={x64:Kl};function Wl(){let{version:t,createNewDefaultVtableIndices:e}=ye(),n=ql[Process.arch];if(n===void 0)throw new Error(`Missing vtable offset parser for ${Process.arch}`);let r=Ie(e,n,{limit:32});if(r===null)throw new Error("Unable to deduce vtable offset");let o=t>=10&&t<=11||t>=15?17:18,s=r-7*V,i=r-17*V,l=r-o*V;return{vtableOffset:r,methodsOffset:s,memberNamesOffset:i,oopMapCacheOffset:l}}function Kl(t){if(t.mnemonic!=="mov")return null;let e=t.operands[0];if(e.type!=="mem")return null;let{value:n}=e;if(n.scale!==1)return null;let{disp:r}=n;return r<256?null:r+16}var Br=J;try{et()}catch{Br=ye}var nt=Br;var Ql=`#include <json-glib/json-glib.h>
#include <string.h>

#define kAccStatic 0x0008
#define kAccConstructor 0x00010000

typedef struct _Model Model;
typedef struct _EnumerateMethodsContext EnumerateMethodsContext;

typedef struct _JavaApi JavaApi;
typedef struct _JavaClassApi JavaClassApi;
typedef struct _JavaMethodApi JavaMethodApi;
typedef struct _JavaFieldApi JavaFieldApi;

typedef struct _JNIEnv JNIEnv;
typedef guint8 jboolean;
typedef gint32 jint;
typedef jint jsize;
typedef gpointer jobject;
typedef jobject jclass;
typedef jobject jstring;
typedef jobject jarray;
typedef jarray jobjectArray;
typedef gpointer jfieldID;
typedef gpointer jmethodID;

typedef struct _jvmtiEnv jvmtiEnv;
typedef enum
{
  JVMTI_ERROR_NONE = 0
} jvmtiError;

typedef struct _ArtApi ArtApi;
typedef guint32 ArtHeapReference;
typedef struct _ArtObject ArtObject;
typedef struct _ArtClass ArtClass;
typedef struct _ArtClassLinker ArtClassLinker;
typedef struct _ArtClassVisitor ArtClassVisitor;
typedef struct _ArtClassVisitorVTable ArtClassVisitorVTable;
typedef struct _ArtMethod ArtMethod;
typedef struct _ArtString ArtString;

typedef union _StdString StdString;
typedef struct _StdStringShort StdStringShort;
typedef struct _StdStringLong StdStringLong;

typedef void (* ArtVisitClassesFunc) (ArtClassLinker * linker, ArtClassVisitor * visitor);
typedef const char * (* ArtGetClassDescriptorFunc) (ArtClass * klass, StdString * storage);
typedef void (* ArtPrettyMethodFunc) (StdString * result, ArtMethod * method, jboolean with_signature);

struct _Model
{
  GHashTable * members;
};

struct _EnumerateMethodsContext
{
  GPatternSpec * class_query;
  GPatternSpec * method_query;
  jboolean include_signature;
  jboolean ignore_case;
  jboolean skip_system_classes;
  GHashTable * groups;
};

struct _JavaClassApi
{
  jmethodID get_declared_methods;
  jmethodID get_declared_fields;
};

struct _JavaMethodApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaFieldApi
{
  jmethodID get_name;
  jmethodID get_modifiers;
};

struct _JavaApi
{
  jvmtiEnv * jvmti;
  JavaClassApi clazz;
  JavaMethodApi method;
  JavaFieldApi field;
};

struct _JNIEnv
{
  gpointer * functions;
};

struct _jvmtiEnv
{
  gpointer * functions;
};

struct _ArtApi
{
  gboolean available;

  guint class_offset_ifields;
  guint class_offset_methods;
  guint class_offset_sfields;
  guint class_offset_copied_methods_offset;

  guint method_size;
  guint method_offset_access_flags;

  guint field_size;
  guint field_offset_access_flags;

  guint alignment_padding;

  ArtClassLinker * linker;
  ArtVisitClassesFunc visit_classes;
  ArtGetClassDescriptorFunc get_class_descriptor;
  ArtPrettyMethodFunc pretty_method;

  void (* free) (gpointer mem);
};

struct _ArtObject
{
  ArtHeapReference klass;
  ArtHeapReference monitor;
};

struct _ArtClass
{
  ArtObject parent;

  ArtHeapReference class_loader;
};

struct _ArtClassVisitor
{
  ArtClassVisitorVTable * vtable;
  gpointer user_data;
};

struct _ArtClassVisitorVTable
{
  void (* reserved1) (ArtClassVisitor * self);
  void (* reserved2) (ArtClassVisitor * self);
  jboolean (* visit) (ArtClassVisitor * self, ArtClass * klass);
};

struct _ArtString
{
  ArtObject parent;

  gint32 count;
  guint32 hash_code;

  union
  {
    guint16 value[0];
    guint8 value_compressed[0];
  };
};

struct _StdStringShort
{
  guint8 size;
  gchar data[(3 * sizeof (gpointer)) - sizeof (guint8)];
};

struct _StdStringLong
{
  gsize capacity;
  gsize size;
  gchar * data;
};

union _StdString
{
  StdStringShort s;
  StdStringLong l;
};

static void model_add_method (Model * self, const gchar * name, jmethodID id, jint modifiers);
static void model_add_field (Model * self, const gchar * name, jfieldID id, jint modifiers);
static void model_free (Model * model);

static jboolean collect_matching_class_methods (ArtClassVisitor * self, ArtClass * klass);
static gchar * finalize_method_groups_to_json (GHashTable * groups);
static GPatternSpec * make_pattern_spec (const gchar * pattern, jboolean ignore_case);
static gchar * class_name_from_signature (const gchar * signature);
static gchar * format_method_signature (const gchar * name, const gchar * signature);
static void append_type (GString * output, const gchar ** type);

static gpointer read_art_array (gpointer object_base, guint field_offset, guint length_size, guint * length);

static void std_string_destroy (StdString * str);
static gchar * std_string_c_str (StdString * self);

extern GMutex lock;
extern GArray * models;
extern JavaApi java_api;
extern ArtApi art_api;

void
init (void)
{
  g_mutex_init (&lock);
  models = g_array_new (FALSE, FALSE, sizeof (Model *));
}

void
finalize (void)
{
  guint n, i;

  n = models->len;
  for (i = 0; i != n; i++)
  {
    Model * model = g_array_index (models, Model *, i);
    model_free (model);
  }

  g_array_unref (models);
  g_mutex_clear (&lock);
}

Model *
model_new (jclass class_handle,
           gpointer class_object,
           JNIEnv * env)
{
  Model * model;
  GHashTable * members;
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * funcs = env->functions;
  jmethodID (* from_reflected_method) (JNIEnv *, jobject) = funcs[7];
  jfieldID (* from_reflected_field) (JNIEnv *, jobject) = funcs[8];
  jobject (* to_reflected_method) (JNIEnv *, jclass, jmethodID, jboolean) = funcs[9];
  jobject (* to_reflected_field) (JNIEnv *, jclass, jfieldID, jboolean) = funcs[12];
  void (* delete_local_ref) (JNIEnv *, jobject) = funcs[23];
  jobject (* call_object_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[34];
  jint (* call_int_method) (JNIEnv *, jobject, jmethodID, ...) = funcs[49];
  const char * (* get_string_utf_chars) (JNIEnv *, jstring, jboolean *) = funcs[169];
  void (* release_string_utf_chars) (JNIEnv *, jstring, const char *) = funcs[170];
  jsize (* get_array_length) (JNIEnv *, jarray) = funcs[171];
  jobject (* get_object_array_element) (JNIEnv *, jobjectArray, jsize) = funcs[173];
  jsize n, i;

  model = g_new (Model, 1);

  members = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, g_free);
  model->members = members;

  if (jvmti != NULL)
  {
    gpointer * jf = jvmti->functions - 1;
    jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
    jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
    jvmtiError (* get_class_fields) (jvmtiEnv *, jclass, jint *, jfieldID **) = jf[53];
    jvmtiError (* get_field_name) (jvmtiEnv *, jclass, jfieldID, char **, char **, char **) = jf[60];
    jvmtiError (* get_field_modifiers) (jvmtiEnv *, jclass, jfieldID, jint *) = jf[62];
    jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
    jvmtiError (* get_method_modifiers) (jvmtiEnv *, jmethodID, jint *) = jf[66];
    jint method_count;
    jmethodID * methods;
    jint field_count;
    jfieldID * fields;
    char * name;
    jint modifiers;

    get_class_methods (jvmti, class_handle, &method_count, &methods);
    for (i = 0; i != method_count; i++)
    {
      jmethodID method = methods[i];

      get_method_name (jvmti, method, &name, NULL, NULL);
      get_method_modifiers (jvmti, method, &modifiers);

      model_add_method (model, name, method, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, methods);

    get_class_fields (jvmti, class_handle, &field_count, &fields);
    for (i = 0; i != field_count; i++)
    {
      jfieldID field = fields[i];

      get_field_name (jvmti, class_handle, field, &name, NULL, NULL);
      get_field_modifiers (jvmti, class_handle, field, &modifiers);

      model_add_field (model, name, field, modifiers);

      deallocate (jvmti, name);
    }
    deallocate (jvmti, fields);
  }
  else if (art_api.available)
  {
    gpointer elements;
    guint n, i;
    const guint field_arrays[] = {
      art_api.class_offset_ifields,
      art_api.class_offset_sfields
    };
    guint field_array_cursor;
    gboolean merged_fields = art_api.class_offset_sfields == 0;

    elements = read_art_array (class_object, art_api.class_offset_methods, sizeof (gsize), NULL);
    n = *(guint16 *) (class_object + art_api.class_offset_copied_methods_offset);
    for (i = 0; i != n; i++)
    {
      jmethodID id;
      guint32 access_flags;
      jboolean is_static;
      jobject method, name;
      const char * name_str;
      jint modifiers;

      id = elements + (i * art_api.method_size);

      access_flags = *(guint32 *) (id + art_api.method_offset_access_flags);
      if ((access_flags & kAccConstructor) != 0)
        continue;
      is_static = (access_flags & kAccStatic) != 0;
      method = to_reflected_method (env, class_handle, id, is_static);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      modifiers = access_flags & 0xffff;

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }

    for (field_array_cursor = 0; field_array_cursor != G_N_ELEMENTS (field_arrays); field_array_cursor++)
    {
      jboolean is_static;

      if (field_arrays[field_array_cursor] == 0)
        continue;

      if (!merged_fields)
        is_static = field_array_cursor == 1;

      elements = read_art_array (class_object, field_arrays[field_array_cursor], sizeof (guint32), &n);
      for (i = 0; i != n; i++)
      {
        jfieldID id;
        guint32 access_flags;
        jobject field, name;
        const char * name_str;
        jint modifiers;

        id = elements + (i * art_api.field_size);

        access_flags = *(guint32 *) (id + art_api.field_offset_access_flags);
        if (merged_fields)
          is_static = (access_flags & kAccStatic) != 0;
        field = to_reflected_field (env, class_handle, id, is_static);
        name = call_object_method (env, field, java_api.field.get_name);
        name_str = get_string_utf_chars (env, name, NULL);
        modifiers = access_flags & 0xffff;

        model_add_field (model, name_str, id, modifiers);

        release_string_utf_chars (env, name, name_str);
        delete_local_ref (env, name);
        delete_local_ref (env, field);
      }
    }
  }
  else
  {
    jobject elements;

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_methods);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject method, name;
      const char * name_str;
      jmethodID id;
      jint modifiers;

      method = get_object_array_element (env, elements, i);
      name = call_object_method (env, method, java_api.method.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_method (env, method);
      modifiers = call_int_method (env, method, java_api.method.get_modifiers);

      model_add_method (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, method);
    }
    delete_local_ref (env, elements);

    elements = call_object_method (env, class_handle, java_api.clazz.get_declared_fields);
    n = get_array_length (env, elements);
    for (i = 0; i != n; i++)
    {
      jobject field, name;
      const char * name_str;
      jfieldID id;
      jint modifiers;

      field = get_object_array_element (env, elements, i);
      name = call_object_method (env, field, java_api.field.get_name);
      name_str = get_string_utf_chars (env, name, NULL);
      id = from_reflected_field (env, field);
      modifiers = call_int_method (env, field, java_api.field.get_modifiers);

      model_add_field (model, name_str, id, modifiers);

      release_string_utf_chars (env, name, name_str);
      delete_local_ref (env, name);
      delete_local_ref (env, field);
    }
    delete_local_ref (env, elements);
  }

  g_mutex_lock (&lock);
  g_array_append_val (models, model);
  g_mutex_unlock (&lock);

  return model;
}

static void
model_add_method (Model * self,
                  const gchar * name,
                  jmethodID id,
                  jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;
  const gchar * value;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  value = g_hash_table_lookup (members, key);
  if (value == NULL)
    g_hash_table_insert (members, key, g_strdup_printf ("m:%c0x%zx", type, id));
  else
    g_hash_table_insert (members, key, g_strdup_printf ("%s:%c0x%zx", value, type, id));
}

static void
model_add_field (Model * self,
                 const gchar * name,
                 jfieldID id,
                 jint modifiers)
{
  GHashTable * members = self->members;
  gchar * key, type;

  if (name[0] == '$')
    key = g_strdup_printf ("_%s", name);
  else
    key = g_strdup (name);
  while (g_hash_table_contains (members, key))
  {
    gchar * new_key = g_strdup_printf ("_%s", key);
    g_free (key);
    key = new_key;
  }

  type = (modifiers & kAccStatic) != 0 ? 's' : 'i';

  g_hash_table_insert (members, key, g_strdup_printf ("f:%c0x%zx", type, id));
}

static void
model_free (Model * model)
{
  g_hash_table_unref (model->members);

  g_free (model);
}

gboolean
model_has (Model * self,
           const gchar * member)
{
  return g_hash_table_contains (self->members, member);
}

const gchar *
model_find (Model * self,
            const gchar * member)
{
  return g_hash_table_lookup (self->members, member);
}

gchar *
model_list (Model * self)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  const gchar * name;

  result = g_string_sized_new (128);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, self->members);
  for (i = 0; g_hash_table_iter_next (&iter, (gpointer *) &name, NULL); i++)
  {
    if (i > 0)
      g_string_append_c (result, ',');

    g_string_append_c (result, '"');
    g_string_append (result, name);
    g_string_append_c (result, '"');
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

gchar *
enumerate_methods_art (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes)
{
  gchar * result;
  EnumerateMethodsContext ctx;
  ArtClassVisitor visitor;
  ArtClassVisitorVTable visitor_vtable = { NULL, };

  ctx.class_query = make_pattern_spec (class_query, ignore_case);
  ctx.method_query = make_pattern_spec (method_query, ignore_case);
  ctx.include_signature = include_signature;
  ctx.ignore_case = ignore_case;
  ctx.skip_system_classes = skip_system_classes;
  ctx.groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  visitor.vtable = &visitor_vtable;
  visitor.user_data = &ctx;

  visitor_vtable.visit = collect_matching_class_methods;

  art_api.visit_classes (art_api.linker, &visitor);

  result = finalize_method_groups_to_json (ctx.groups);

  g_hash_table_unref (ctx.groups);
  g_pattern_spec_free (ctx.method_query);
  g_pattern_spec_free (ctx.class_query);

  return result;
}

static jboolean
collect_matching_class_methods (ArtClassVisitor * self,
                                ArtClass * klass)
{
  EnumerateMethodsContext * ctx = self->user_data;
  const char * descriptor;
  StdString descriptor_storage = { 0, };
  gchar * class_name = NULL;
  gchar * class_name_copy = NULL;
  const gchar * normalized_class_name;
  JsonBuilder * group;
  size_t class_name_length;
  GHashTable * seen_method_names;
  gpointer elements;
  guint n, i;

  if (ctx->skip_system_classes && klass->class_loader == 0)
    goto skip_class;

  descriptor = art_api.get_class_descriptor (klass, &descriptor_storage);
  if (descriptor[0] != 'L')
    goto skip_class;

  class_name = class_name_from_signature (descriptor);

  if (ctx->ignore_case)
  {
    class_name_copy = g_utf8_strdown (class_name, -1);
    normalized_class_name = class_name_copy;
  }
  else
  {
    normalized_class_name = class_name;
  }

  if (!g_pattern_match_string (ctx->class_query, normalized_class_name))
    goto skip_class;

  group = NULL;
  class_name_length = strlen (class_name);
  seen_method_names = ctx->include_signature ? NULL : g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

  elements = read_art_array (klass, art_api.class_offset_methods, sizeof (gsize), NULL);
  n = *(guint16 *) ((gpointer) klass + art_api.class_offset_copied_methods_offset);
  for (i = 0; i != n; i++)
  {
    ArtMethod * method;
    guint32 access_flags;
    jboolean is_constructor;
    StdString method_name = { 0, };
    const gchar * bare_method_name;
    gchar * bare_method_name_copy = NULL;
    const gchar * normalized_method_name;
    gchar * normalized_method_name_copy = NULL;

    method = elements + (i * art_api.method_size);

    access_flags = *(guint32 *) ((gpointer) method + art_api.method_offset_access_flags);
    is_constructor = (access_flags & kAccConstructor) != 0;

    art_api.pretty_method (&method_name, method, ctx->include_signature);
    bare_method_name = std_string_c_str (&method_name);
    if (ctx->include_signature)
    {
      const gchar * return_type_end, * name_begin;
      GString * name;

      return_type_end = strchr (bare_method_name, ' ');
      name_begin = return_type_end + 1 + class_name_length + 1;
      if (is_constructor && g_str_has_prefix (name_begin, "<clinit>"))
        goto skip_method;

      name = g_string_sized_new (64);

      if (is_constructor)
      {
        g_string_append (name, "$init");
        g_string_append (name, strchr (name_begin, '>') + 1);
      }
      else
      {
        g_string_append (name, name_begin);
      }
      g_string_append (name, ": ");
      g_string_append_len (name, bare_method_name, return_type_end - bare_method_name);

      bare_method_name_copy = g_string_free (name, FALSE);
      bare_method_name = bare_method_name_copy;
    }
    else
    {
      const gchar * name_begin;

      name_begin = bare_method_name + class_name_length + 1;
      if (is_constructor && strcmp (name_begin, "<clinit>") == 0)
        goto skip_method;

      if (is_constructor)
        bare_method_name = "$init";
      else
        bare_method_name += class_name_length + 1;
    }

    if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, bare_method_name))
      goto skip_method;

    if (ctx->ignore_case)
    {
      normalized_method_name_copy = g_utf8_strdown (bare_method_name, -1);
      normalized_method_name = normalized_method_name_copy;
    }
    else
    {
      normalized_method_name = bare_method_name;
    }

    if (!g_pattern_match_string (ctx->method_query, normalized_method_name))
      goto skip_method;

    if (group == NULL)
    {
      group = g_hash_table_lookup (ctx->groups, GUINT_TO_POINTER (klass->class_loader));
      if (group == NULL)
      {
        group = json_builder_new_immutable ();
        g_hash_table_insert (ctx->groups, GUINT_TO_POINTER (klass->class_loader), group);

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "loader");
        json_builder_add_int_value (group, klass->class_loader);

        json_builder_set_member_name (group, "classes");
        json_builder_begin_array (group);
      }

      json_builder_begin_object (group);

      json_builder_set_member_name (group, "name");
      json_builder_add_string_value (group, class_name);

      json_builder_set_member_name (group, "methods");
      json_builder_begin_array (group);
    }

    json_builder_add_string_value (group, bare_method_name);

    if (seen_method_names != NULL)
      g_hash_table_add (seen_method_names, g_strdup (bare_method_name));

skip_method:
    g_free (normalized_method_name_copy);
    g_free (bare_method_name_copy);
    std_string_destroy (&method_name);
  }

  if (seen_method_names != NULL)
    g_hash_table_unref (seen_method_names);

  if (group == NULL)
    goto skip_class;

  json_builder_end_array (group);
  json_builder_end_object (group);

skip_class:
  g_free (class_name_copy);
  g_free (class_name);
  std_string_destroy (&descriptor_storage);

  return TRUE;
}

gchar *
enumerate_methods_jvm (const gchar * class_query,
                       const gchar * method_query,
                       jboolean include_signature,
                       jboolean ignore_case,
                       jboolean skip_system_classes,
                       JNIEnv * env)
{
  gchar * result;
  GPatternSpec * class_pattern, * method_pattern;
  GHashTable * groups;
  gpointer * ef = env->functions;
  jobject (* new_global_ref) (JNIEnv *, jobject) = ef[21];
  void (* delete_local_ref) (JNIEnv *, jobject) = ef[23];
  jboolean (* is_same_object) (JNIEnv *, jobject, jobject) = ef[24];
  jvmtiEnv * jvmti = java_api.jvmti;
  gpointer * jf = jvmti->functions - 1;
  jvmtiError (* deallocate) (jvmtiEnv *, void * mem) = jf[47];
  jvmtiError (* get_class_signature) (jvmtiEnv *, jclass, char **, char **) = jf[48];
  jvmtiError (* get_class_methods) (jvmtiEnv *, jclass, jint *, jmethodID **) = jf[52];
  jvmtiError (* get_class_loader) (jvmtiEnv *, jclass, jobject *) = jf[57];
  jvmtiError (* get_method_name) (jvmtiEnv *, jmethodID, char **, char **, char **) = jf[64];
  jvmtiError (* get_loaded_classes) (jvmtiEnv *, jint *, jclass **) = jf[78];
  jint class_count, class_index;
  jclass * classes;

  class_pattern = make_pattern_spec (class_query, ignore_case);
  method_pattern = make_pattern_spec (method_query, ignore_case);
  groups = g_hash_table_new_full (NULL, NULL, NULL, NULL);

  if (get_loaded_classes (jvmti, &class_count, &classes) != JVMTI_ERROR_NONE)
    goto emit_results;

  for (class_index = 0; class_index != class_count; class_index++)
  {
    jclass klass = classes[class_index];
    jobject loader = NULL;
    gboolean have_loader = FALSE;
    char * signature = NULL;
    gchar * class_name = NULL;
    gchar * class_name_copy = NULL;
    const gchar * normalized_class_name;
    jint method_count, method_index;
    jmethodID * methods = NULL;
    JsonBuilder * group = NULL;
    GHashTable * seen_method_names = NULL;

    if (skip_system_classes)
    {
      if (get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
        goto skip_class;
      have_loader = TRUE;

      if (loader == NULL)
        goto skip_class;
    }

    if (get_class_signature (jvmti, klass, &signature, NULL) != JVMTI_ERROR_NONE)
      goto skip_class;

    class_name = class_name_from_signature (signature);

    if (ignore_case)
    {
      class_name_copy = g_utf8_strdown (class_name, -1);
      normalized_class_name = class_name_copy;
    }
    else
    {
      normalized_class_name = class_name;
    }

    if (!g_pattern_match_string (class_pattern, normalized_class_name))
      goto skip_class;

    if (get_class_methods (jvmti, klass, &method_count, &methods) != JVMTI_ERROR_NONE)
      goto skip_class;

    if (!include_signature)
      seen_method_names = g_hash_table_new_full (g_str_hash, g_str_equal, g_free, NULL);

    for (method_index = 0; method_index != method_count; method_index++)
    {
      jmethodID method = methods[method_index];
      const gchar * method_name;
      char * method_name_value = NULL;
      char * method_signature_value = NULL;
      gchar * method_name_copy = NULL;
      const gchar * normalized_method_name;
      gchar * normalized_method_name_copy = NULL;

      if (get_method_name (jvmti, method, &method_name_value, include_signature ? &method_signature_value : NULL, NULL) != JVMTI_ERROR_NONE)
        goto skip_method;
      method_name = method_name_value;

      if (method_name[0] == '<')
      {
        if (strcmp (method_name, "<init>") == 0)
          method_name = "$init";
        else if (strcmp (method_name, "<clinit>") == 0)
          goto skip_method;
      }

      if (include_signature)
      {
        method_name_copy = format_method_signature (method_name, method_signature_value);
        method_name = method_name_copy;
      }

      if (seen_method_names != NULL && g_hash_table_contains (seen_method_names, method_name))
        goto skip_method;

      if (ignore_case)
      {
        normalized_method_name_copy = g_utf8_strdown (method_name, -1);
        normalized_method_name = normalized_method_name_copy;
      }
      else
      {
        normalized_method_name = method_name;
      }

      if (!g_pattern_match_string (method_pattern, normalized_method_name))
        goto skip_method;

      if (group == NULL)
      {
        if (!have_loader && get_class_loader (jvmti, klass, &loader) != JVMTI_ERROR_NONE)
          goto skip_method;

        if (loader == NULL)
        {
          group = g_hash_table_lookup (groups, NULL);
        }
        else
        {
          GHashTableIter iter;
          jobject cur_loader;
          JsonBuilder * cur_group;

          g_hash_table_iter_init (&iter, groups);
          while (g_hash_table_iter_next (&iter, (gpointer *) &cur_loader, (gpointer *) &cur_group))
          {
            if (cur_loader != NULL && is_same_object (env, cur_loader, loader))
            {
              group = cur_group;
              break;
            }
          }
        }

        if (group == NULL)
        {
          jobject l;
          gchar * str;

          l = (loader != NULL) ? new_global_ref (env, loader) : NULL;

          group = json_builder_new_immutable ();
          g_hash_table_insert (groups, l, group);

          json_builder_begin_object (group);

          json_builder_set_member_name (group, "loader");
          str = g_strdup_printf ("0x%" G_GSIZE_MODIFIER "x", GPOINTER_TO_SIZE (l));
          json_builder_add_string_value (group, str);
          g_free (str);

          json_builder_set_member_name (group, "classes");
          json_builder_begin_array (group);
        }

        json_builder_begin_object (group);

        json_builder_set_member_name (group, "name");
        json_builder_add_string_value (group, class_name);

        json_builder_set_member_name (group, "methods");
        json_builder_begin_array (group);
      }

      json_builder_add_string_value (group, method_name);

      if (seen_method_names != NULL)
        g_hash_table_add (seen_method_names, g_strdup (method_name));

skip_method:
      g_free (normalized_method_name_copy);
      g_free (method_name_copy);
      deallocate (jvmti, method_signature_value);
      deallocate (jvmti, method_name_value);
    }

skip_class:
    if (group != NULL)
    {
      json_builder_end_array (group);
      json_builder_end_object (group);
    }

    if (seen_method_names != NULL)
      g_hash_table_unref (seen_method_names);

    deallocate (jvmti, methods);

    g_free (class_name_copy);
    g_free (class_name);
    deallocate (jvmti, signature);

    if (loader != NULL)
      delete_local_ref (env, loader);

    delete_local_ref (env, klass);
  }

  deallocate (jvmti, classes);

emit_results:
  result = finalize_method_groups_to_json (groups);

  g_hash_table_unref (groups);
  g_pattern_spec_free (method_pattern);
  g_pattern_spec_free (class_pattern);

  return result;
}

static gchar *
finalize_method_groups_to_json (GHashTable * groups)
{
  GString * result;
  GHashTableIter iter;
  guint i;
  JsonBuilder * group;

  result = g_string_sized_new (1024);

  g_string_append_c (result, '[');

  g_hash_table_iter_init (&iter, groups);
  for (i = 0; g_hash_table_iter_next (&iter, NULL, (gpointer *) &group); i++)
  {
    JsonNode * root;
    gchar * json;

    if (i > 0)
      g_string_append_c (result, ',');

    json_builder_end_array (group);
    json_builder_end_object (group);

    root = json_builder_get_root (group);
    json = json_to_string (root, FALSE);
    g_string_append (result, json);
    g_free (json);
    json_node_unref (root);

    g_object_unref (group);
  }

  g_string_append_c (result, ']');

  return g_string_free (result, FALSE);
}

static GPatternSpec *
make_pattern_spec (const gchar * pattern,
                   jboolean ignore_case)
{
  GPatternSpec * spec;

  if (ignore_case)
  {
    gchar * str = g_utf8_strdown (pattern, -1);
    spec = g_pattern_spec_new (str);
    g_free (str);
  }
  else
  {
    spec = g_pattern_spec_new (pattern);
  }

  return spec;
}

static gchar *
class_name_from_signature (const gchar * descriptor)
{
  gchar * result, * c;

  result = g_strdup (descriptor + 1);

  for (c = result; *c != '\\0'; c++)
  {
    if (*c == '/')
      *c = '.';
  }

  c[-1] = '\\0';

  return result;
}

static gchar *
format_method_signature (const gchar * name,
                         const gchar * signature)
{
  GString * sig;
  const gchar * cursor;
  gint arg_index;

  sig = g_string_sized_new (128);

  g_string_append (sig, name);

  cursor = signature;
  arg_index = -1;
  while (TRUE)
  {
    const gchar c = *cursor;

    if (c == '(')
    {
      g_string_append_c (sig, c);
      cursor++;
      arg_index = 0;
    }
    else if (c == ')')
    {
      g_string_append_c (sig, c);
      cursor++;
      break;
    }
    else
    {
      if (arg_index >= 1)
        g_string_append (sig, ", ");

      append_type (sig, &cursor);

      if (arg_index != -1)
        arg_index++;
    }
  }

  g_string_append (sig, ": ");
  append_type (sig, &cursor);

  return g_string_free (sig, FALSE);
}

static void
append_type (GString * output,
             const gchar ** type)
{
  const gchar * cursor = *type;

  switch (*cursor)
  {
    case 'Z':
      g_string_append (output, "boolean");
      cursor++;
      break;
    case 'B':
      g_string_append (output, "byte");
      cursor++;
      break;
    case 'C':
      g_string_append (output, "char");
      cursor++;
      break;
    case 'S':
      g_string_append (output, "short");
      cursor++;
      break;
    case 'I':
      g_string_append (output, "int");
      cursor++;
      break;
    case 'J':
      g_string_append (output, "long");
      cursor++;
      break;
    case 'F':
      g_string_append (output, "float");
      cursor++;
      break;
    case 'D':
      g_string_append (output, "double");
      cursor++;
      break;
    case 'V':
      g_string_append (output, "void");
      cursor++;
      break;
    case 'L':
    {
      gchar ch;

      cursor++;
      for (; (ch = *cursor) != ';'; cursor++)
      {
        g_string_append_c (output, (ch != '/') ? ch : '.');
      }
      cursor++;

      break;
    }
    case '[':
      *type = cursor + 1;
      append_type (output, type);
      g_string_append (output, "[]");
      return;
    default:
      g_string_append (output, "BUG");
      cursor++;
  }

  *type = cursor;
}

void
dealloc (gpointer mem)
{
  g_free (mem);
}

static gpointer
read_art_array (gpointer object_base,
                guint field_offset,
                guint length_size,
                guint * length)
{
  gpointer result, header;
  guint n;

  header = GSIZE_TO_POINTER (*(guint64 *) (object_base + field_offset));
  if (header != NULL)
  {
    result = header + length_size;
    if (length_size == sizeof (guint32))
      n = *(guint32 *) header;
    else
      n = *(guint64 *) header;
  }
  else
  {
    result = NULL;
    n = 0;
  }

  if (length != NULL)
    *length = n;

  return result;
}

static void
std_string_destroy (StdString * str)
{
  if ((str->l.capacity & 1) != 0)
    art_api.free (str->l.data);
}

static gchar *
std_string_c_str (StdString * self)
{
  if ((self->l.capacity & 1) != 0)
    return self->l.data;

  return self->s.data;
}
`,Yl=/(.+)!([^/]+)\/?([isu]+)?/,me=null,Wr=null,xe=class t{static build(e,n){return qr(n),Wr(e,n,r=>new t(me.new(e,r,n)))}static enumerateMethods(e,n,r){qr(r);let o=e.match(Yl);if(o===null)throw new Error("Invalid query; format is: class!method -- see documentation of Java.enumerateMethods(query) for details");let s=Memory.allocUtf8String(o[1]),i=Memory.allocUtf8String(o[2]),l=!1,a=!1,c=!1,d=o[3];d!==void 0&&(l=d.indexOf("s")!==-1,a=d.indexOf("i")!==-1,c=d.indexOf("u")!==-1);let f;if(n.jvmti!==null){let p=me.enumerateMethodsJvm(s,i,Ue(l),Ue(a),Ue(c),r);try{f=JSON.parse(p.readUtf8String()).map(u=>{let _=ptr(u.loader);return u.loader=_.isNull()?null:_,u})}finally{me.dealloc(p)}}else _e(r.vm,r,p=>{let u=me.enumerateMethodsArt(s,i,Ue(l),Ue(a),Ue(c));try{let _=n["art::JavaVMExt::AddGlobalRef"],{vm:h}=n;f=JSON.parse(u.readUtf8String()).map(m=>{let g=m.loader;return m.loader=g!==0?_(h,p,ptr(g)):null,m})}finally{me.dealloc(u)}});return f}constructor(e){this.handle=e}has(e){return me.has(this.handle,Memory.allocUtf8String(e))!==0}find(e){return me.find(this.handle,Memory.allocUtf8String(e)).readUtf8String()}list(){let e=me.list(this.handle);try{return JSON.parse(e.readUtf8String())}finally{me.dealloc(e)}}};function qr(t){me===null&&(me=Xl(t),Wr=ec(me,t.vm))}function Xl(t){let e=nt(),{jvmti:n=null}=e,{pointerSize:r}=Process,o=8,s=r,i=7*r,l=40+5*r,a=o+s+i+l,d=Memory.alloc(a),f=d.add(o),p=f.add(s),{getDeclaredMethods:u,getDeclaredFields:_}=t.javaLangClass(),h=t.javaLangReflectMethod(),m=t.javaLangReflectField(),g=p;[n!==null?n:NULL,u,_,h.getName,h.getModifiers,m.getName,m.getModifiers].forEach(A=>{g=g.writePointer(A).add(r)});let v=p.add(i),{vm:I}=t;if(e.flavor==="art"){let A;if(n!==null)A=[0,0,0,0];else{let j=Sn(I).offset;A=[j.ifields,j.methods,j.sfields,j.copiedMethodsOffset]}let N=pe(I),E=It(I),w=v;[1,...A,N.size,N.offset.accessFlags,E.size,E.offset.accessFlags,4294967295].forEach(j=>{w=w.writeUInt(j).add(4)}),[e.artClassLinker.address,e["art::ClassLinker::VisitClasses"],e["art::mirror::Class::GetDescriptor"],e["art::ArtMethod::PrettyMethod"],Process.getModuleByName("libc.so").getExportByName("free")].forEach((j,S)=>{j===void 0&&(j=NULL),w=w.writePointer(j).add(r)})}let L=new CModule(Ql,{lock:d,models:f,java_api:p,art_api:v}),M={exceptions:"propagate"},x={exceptions:"propagate",scheduling:"exclusive"};return{handle:L,new:new NativeFunction(L.model_new,"pointer",["pointer","pointer","pointer"],M),has:new NativeFunction(L.model_has,"bool",["pointer","pointer"],x),find:new NativeFunction(L.model_find,"pointer",["pointer","pointer"],x),list:new NativeFunction(L.model_list,"pointer",["pointer"],x),enumerateMethodsArt:new NativeFunction(L.enumerate_methods_art,"pointer",["pointer","pointer","bool","bool","bool"],M),enumerateMethodsJvm:new NativeFunction(L.enumerate_methods_jvm,"pointer",["pointer","pointer","bool","bool","bool","pointer"],M),dealloc:new NativeFunction(L.dealloc,"void",["pointer"],x)}}function ec(t,e){let n=nt();if(n.flavor!=="art")return tc;let r=n["art::JavaVMExt::DecodeGlobal"];return function(o,s,i){let l;return _e(e,s,a=>{let c=r(e,a,o);l=i(c)}),l}}function tc(t,e,n){return n(NULL)}function Ue(t){return t?1:0}var rt=class{constructor(e,n){this.items=new Map,this.capacity=e,this.destroy=n}dispose(e){let{items:n,destroy:r}=this;n.forEach(o=>{r(o,e)}),n.clear()}get(e){let{items:n}=this,r=n.get(e);return r!==void 0&&(n.delete(e),n.set(e,r)),r}set(e,n,r){let{items:o}=this,s=o.get(e);if(s!==void 0)o.delete(e),this.destroy(s,r);else if(o.size===this.capacity){let i=o.keys().next().value,l=o.get(i);o.delete(i),this.destroy(l,r)}o.set(e,n)}};var Ee=globalThis.Buffer;var ot=1,Un=256,Kr=65536,nc=305419896,Qr=32,Yr=12,Xr=8,eo=8,to=4,no=4,ro=12,rc=0,oc=1,sc=2,ac=3,ic=4,lc=5,cc=6,dc=4096,uc=4097,pc=4099,fc=8192,hc=8193,_c=8194,mc=8195,gc=8196,bc=8198,vc=24,yc=28,Ec=2,Sc=24,oo=Ee.from([3,0,7,14,0]),Dn="Ldalvik/annotation/Throws;",Cc=Ee.from([0]);function Ic(t){let e=new Vn,n=Object.assign({},t);return e.addClass(n),e.build()}var Vn=class{constructor(){this.classes=[]}addClass(e){this.classes.push(e)}build(){let e=wc(this.classes),{classes:n,interfaces:r,fields:o,methods:s,protos:i,parameters:l,annotationDirectories:a,annotationSets:c,throwsAnnotations:d,types:f,strings:p}=e,u=0,_=0,h=8,m=12,g=20,v=112;u+=v;let I=u,L=p.length*no;u+=L;let M=u,x=f.length*to;u+=x;let A=u,N=i.length*Yr;u+=N;let E=u,w=o.length*Xr;u+=w;let j=u,S=s.length*eo;u+=S;let O=u,F=n.length*Qr;u+=F;let D=u,R=c.map(T=>{let P=u;return T.offset=P,u+=4+T.items.length*4,P}),U=n.reduce((T,P)=>(P.classData.constructorMethods.forEach($=>{let[,B,Z]=$;(B&Un)===0&&Z>=0&&($.push(u),T.push({offset:u,superConstructor:Z}),u+=Sc)}),T),[]);a.forEach(T=>{T.offset=u,u+=16+T.methods.length*8});let Y=r.map(T=>{u=zn(u,4);let P=u;return T.offset=P,u+=4+2*T.types.length,P}),ee=l.map(T=>{u=zn(u,4);let P=u;return T.offset=P,u+=4+2*T.types.length,P}),oe=[],K=p.map(T=>{let P=u,z=Ee.from(fe(T.length)),$=Ee.from(T,"utf8"),B=Ee.concat([z,$,Cc]);return oe.push(B),u+=B.length,P}),re=U.map(T=>{let P=u;return u+=oo.length,P}),Q=d.map(T=>{let P=Lc(T);return T.offset=u,u+=P.length,P}),te=n.map((T,P)=>{T.classData.offset=u;let z=Tc(T);return u+=z.length,z}),be=0,He=0;u=zn(u,4);let H=u,de=r.length+l.length,Se=4+(o.length>0?1:0)+2+c.length+U.length+a.length+(de>0?1:0)+1+re.length+d.length+n.length+1,Ne=4+Se*ro;u+=Ne;let Le=u-D,Re=u,C=Ee.alloc(Re);C.write(`dex
035`),C.writeUInt32LE(Re,32),C.writeUInt32LE(v,36),C.writeUInt32LE(nc,40),C.writeUInt32LE(be,44),C.writeUInt32LE(He,48),C.writeUInt32LE(H,52),C.writeUInt32LE(p.length,56),C.writeUInt32LE(I,60),C.writeUInt32LE(f.length,64),C.writeUInt32LE(M,68),C.writeUInt32LE(i.length,72),C.writeUInt32LE(A,76),C.writeUInt32LE(o.length,80),C.writeUInt32LE(o.length>0?E:0,84),C.writeUInt32LE(s.length,88),C.writeUInt32LE(j,92),C.writeUInt32LE(n.length,96),C.writeUInt32LE(O,100),C.writeUInt32LE(Le,104),C.writeUInt32LE(D,108),K.forEach((T,P)=>{C.writeUInt32LE(T,I+P*no)}),f.forEach((T,P)=>{C.writeUInt32LE(T,M+P*to)}),i.forEach((T,P)=>{let[z,$,B]=T,Z=A+P*Yr;C.writeUInt32LE(z,Z),C.writeUInt32LE($,Z+4),C.writeUInt32LE(B!==null?B.offset:0,Z+8)}),o.forEach((T,P)=>{let[z,$,B]=T,Z=E+P*Xr;C.writeUInt16LE(z,Z),C.writeUInt16LE($,Z+2),C.writeUInt32LE(B,Z+4)}),s.forEach((T,P)=>{let[z,$,B]=T,Z=j+P*eo;C.writeUInt16LE(z,Z),C.writeUInt16LE($,Z+2),C.writeUInt32LE(B,Z+4)}),n.forEach((T,P)=>{let{interfaces:z,annotationsDirectory:$}=T,B=z!==null?z.offset:0,Z=$!==null?$.offset:0,$e=0,he=O+P*Qr;C.writeUInt32LE(T.index,he),C.writeUInt32LE(T.accessFlags,he+4),C.writeUInt32LE(T.superClassIndex,he+8),C.writeUInt32LE(B,he+12),C.writeUInt32LE(T.sourceFileIndex,he+16),C.writeUInt32LE(Z,he+20),C.writeUInt32LE(T.classData.offset,he+24),C.writeUInt32LE($e,he+28)}),c.forEach((T,P)=>{let{items:z}=T,$=R[P];C.writeUInt32LE(z.length,$),z.forEach((B,Z)=>{C.writeUInt32LE(B.offset,$+4+Z*4)})}),U.forEach((T,P)=>{let{offset:z,superConstructor:$}=T,B=1,Z=1,$e=1,he=0,it=4;C.writeUInt16LE(B,z),C.writeUInt16LE(Z,z+2),C.writeUInt16LE($e,z+4),C.writeUInt16LE(he,z+6),C.writeUInt32LE(re[P],z+8),C.writeUInt32LE(it,z+12),C.writeUInt16LE(4208,z+16),C.writeUInt16LE($,z+18),C.writeUInt16LE(0,z+20),C.writeUInt16LE(14,z+22)}),a.forEach(T=>{let P=T.offset,z=0,$=0,B=T.methods.length,Z=0;C.writeUInt32LE(z,P),C.writeUInt32LE($,P+4),C.writeUInt32LE(B,P+8),C.writeUInt32LE(Z,P+12),T.methods.forEach(($e,he)=>{let it=P+16+he*8,[Mo,jo]=$e;C.writeUInt32LE(Mo,it),C.writeUInt32LE(jo.offset,it+4)})}),r.forEach((T,P)=>{let z=Y[P];C.writeUInt32LE(T.types.length,z),T.types.forEach(($,B)=>{C.writeUInt16LE($,z+4+B*2)})}),l.forEach((T,P)=>{let z=ee[P];C.writeUInt32LE(T.types.length,z),T.types.forEach(($,B)=>{C.writeUInt16LE($,z+4+B*2)})}),oe.forEach((T,P)=>{T.copy(C,K[P])}),re.forEach(T=>{oo.copy(C,T)}),Q.forEach((T,P)=>{T.copy(C,d[P].offset)}),te.forEach((T,P)=>{T.copy(C,n[P].classData.offset)}),C.writeUInt32LE(Se,H);let se=[[rc,1,_],[oc,p.length,I],[sc,f.length,M],[ac,i.length,A]];o.length>0&&se.push([ic,o.length,E]),se.push([lc,s.length,j]),se.push([cc,n.length,O]),c.forEach((T,P)=>{se.push([pc,T.items.length,R[P]])}),U.forEach(T=>{se.push([hc,1,T.offset])}),a.forEach(T=>{se.push([bc,1,T.offset])}),de>0&&se.push([uc,de,Y.concat(ee)[0]]),se.push([_c,p.length,K[0]]),re.forEach(T=>{se.push([mc,1,T])}),d.forEach(T=>{se.push([gc,1,T.offset])}),n.forEach(T=>{se.push([fc,1,T.classData.offset])}),se.push([dc,1,H]),se.forEach((T,P)=>{let[z,$,B]=T,Z=H+4+P*ro;C.writeUInt16LE(z,Z),C.writeUInt32LE($,Z+4),C.writeUInt32LE(B,Z+8)});let rr=new Checksum("sha1");return rr.update(C.slice(m+g)),Ee.from(rr.getDigest()).copy(C,m),C.writeUInt32LE(xc(C,m),h),C}};function Tc(t){let{instanceFields:e,constructorMethods:n,virtualMethods:r}=t.classData;return Ee.from([0].concat(fe(e.length)).concat(fe(n.length)).concat(fe(r.length)).concat(e.reduce((s,[i,l])=>s.concat(fe(i)).concat(fe(l)),[])).concat(n.reduce((s,[i,l,,a])=>s.concat(fe(i)).concat(fe(l)).concat(fe(a||0)),[])).concat(r.reduce((s,[i,l])=>s.concat(fe(i)).concat(fe(l)).concat([0]),[])))}function Lc(t){let{thrownTypes:e}=t;return Ee.from([Ec].concat(fe(t.type)).concat([1]).concat(fe(t.value)).concat([yc,e.length]).concat(e.reduce((n,r)=>(n.push(vc,r),n),[])))}function wc(t){let e=new Set,n=new Set,r={},o=[],s=[],i={},l=new Set,a=new Set;t.forEach(S=>{let{name:O,superClass:F,sourceFileName:D}=S;e.add("this"),e.add(O),n.add(O),e.add(F),n.add(F),e.add(D),S.interfaces.forEach(R=>{e.add(R),n.add(R)}),S.fields.forEach(R=>{let[U,Y]=R;e.add(U),e.add(Y),n.add(Y),o.push([S.name,Y,U])}),S.methods.some(([R])=>R==="<init>")||(S.methods.unshift(["<init>","V",[]]),l.add(O)),S.methods.forEach(R=>{let[U,Y,ee,oe=[],K]=R;e.add(U);let re=c(Y,ee),Q=null;if(oe.length>0){let te=oe.slice();te.sort(),Q=te.join("|");let be=i[Q];be===void 0&&(be={id:Q,types:te},i[Q]=be),e.add(Dn),n.add(Dn),oe.forEach(He=>{e.add(He),n.add(He)}),e.add("value")}if(s.push([S.name,re,U,Q,K]),U==="<init>"){a.add(O+"|"+re);let te=F+"|"+re;l.has(O)&&!a.has(te)&&(s.push([F,re,U,null,0]),a.add(te))}})});function c(S,O){let F=[S].concat(O),D=F.join("|");if(r[D]!==void 0)return D;e.add(S),n.add(S),O.forEach(U=>{e.add(U),n.add(U)});let R=F.map(jc).join("");return e.add(R),r[D]=[D,R,S,O],D}let d=Array.from(e);d.sort();let f=d.reduce((S,O,F)=>(S[O]=F,S),{}),p=Array.from(n).map(S=>f[S]);p.sort(so);let u=p.reduce((S,O,F)=>(S[d[O]]=F,S),{}),_=Object.keys(r).map(S=>r[S]);_.sort(Nc);let h={},m=_.map(S=>{let[,O,F,D]=S,R;if(D.length>0){let U=D.join("|");R=h[U],R===void 0&&(R={types:D.map(Y=>u[Y]),offset:-1},h[U]=R)}else R=null;return[f[O],u[F],R]}),g=_.reduce((S,O,F)=>{let[D]=O;return S[D]=F,S},{}),v=Object.keys(h).map(S=>h[S]),I=o.map(S=>{let[O,F,D]=S;return[u[O],u[F],f[D]]});I.sort(Ac);let L=s.map(S=>{let[O,F,D,R,U]=S;return[u[O],g[F],f[D],R,U]});L.sort(Mc);let M=Object.keys(i).map(S=>i[S]).map(S=>({id:S.id,type:u[Dn],value:f.value,thrownTypes:S.types.map(O=>u[O]),offset:-1})),x=M.map(S=>({id:S.id,items:[S],offset:-1})),A=x.reduce((S,O,F)=>(S[O.id]=F,S),{}),N={},E=[],w=t.map(S=>{let O=u[S.name],F=ot,D=u[S.superClass],R,U=S.interfaces.map(H=>u[H]);if(U.length>0){U.sort(so);let H=U.join("|");R=N[H],R===void 0&&(R={types:U,offset:-1},N[H]=R)}else R=null;let Y=f[S.sourceFileName],ee=L.reduce((H,de,Se)=>{let[Ne,Le,Re,C,se]=de;return Ne===O&&H.push([Se,Re,C,Le,se]),H},[]),oe=null,K=ee.filter(([,,H])=>H!==null).map(([H,,de])=>[H,x[A[de]]]);K.length>0&&(oe={methods:K,offset:-1},E.push(oe));let re=I.reduce((H,de,Se)=>{let[Ne]=de;return Ne===O&&H.push([Se>0?1:0,ot]),H},[]),Q=f["<init>"],te=ee.filter(([,H])=>H===Q).map(([H,,,de])=>{if(l.has(S.name)){let Se=-1,Ne=L.length;for(let Le=0;Le!==Ne;Le++){let[Re,C,se]=L[Le];if(Re===D&&se===Q&&C===de){Se=Le;break}}return[H,ot|Kr,Se]}else return[H,ot|Kr|Un,-1]}),be=kc(ee.filter(([,H])=>H!==Q).map(([H,,,,de])=>[H,de|ot|Un]));return{index:O,accessFlags:F,superClassIndex:D,interfaces:R,sourceFileIndex:Y,annotationsDirectory:oe,classData:{instanceFields:re,constructorMethods:te,virtualMethods:be,offset:-1}}}),j=Object.keys(N).map(S=>N[S]);return{classes:w,interfaces:j,fields:I,methods:L,protos:m,parameters:v,annotationDirectories:E,annotationSets:x,throwsAnnotations:M,types:p,strings:d}}function kc(t){let e=0;return t.map(([n,r],o)=>{let s;return o===0?s=[n,r]:s=[n-e,r],e=n,s})}function so(t,e){return t-e}function Nc(t,e){let[,,n,r]=t,[,,o,s]=e;if(n<o)return-1;if(n>o)return 1;let i=r.join("|"),l=s.join("|");return i<l?-1:i>l?1:0}function Ac(t,e){let[n,r,o]=t,[s,i,l]=e;return n!==s?n-s:o!==l?o-l:r-i}function Mc(t,e){let[n,r,o]=t,[s,i,l]=e;return n!==s?n-s:o!==l?o-l:r-i}function jc(t){let e=t[0];return e==="L"||e==="["?"L":t}function fe(t){if(t<=127)return[t];let e=[],n=!1;do{let r=t&127;t>>=7,n=t!==0,n&&(r|=128),e.push(r)}while(n);return e}function zn(t,e){let n=t%e;return n===0?t:t+e-n}function xc(t,e){let n=1,r=0,o=t.length;for(let s=e;s<o;s++)n=(n+t[s])%65521,r=(r+n)%65521;return(r<<16|n)>>>0}var ao=Ic;var Oc=1,Jn=null,io=null;function lo(t){Jn=t}function Gn(t,e,n){let r=Ve(t);return r===null&&(t.indexOf("[")===0?r=Hn(t,e,n):(t[0]==="L"&&t[t.length-1]===";"&&(t=t.substring(1,t.length-1)),r=Rc(t,e,n))),Object.assign({className:t},r)}var co={boolean:{name:"Z",type:"uint8",size:1,byteSize:1,defaultValue:!1,isCompatible(t){return typeof t=="boolean"},fromJni(t){return!!t},toJni(t){return t?1:0},read(t){return t.readU8()},write(t,e){t.writeU8(e)},toString(){return this.name}},byte:{name:"B",type:"int8",size:1,byteSize:1,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-128&&t<=127},fromJni:ge,toJni:ge,read(t){return t.readS8()},write(t,e){t.writeS8(e)},toString(){return this.name}},char:{name:"C",type:"uint16",size:1,byteSize:2,defaultValue:0,isCompatible(t){if(typeof t!="string"||t.length!==1)return!1;let e=t.charCodeAt(0);return e>=0&&e<=65535},fromJni(t){return String.fromCharCode(t)},toJni(t){return t.charCodeAt(0)},read(t){return t.readU16()},write(t,e){t.writeU16(e)},toString(){return this.name}},short:{name:"S",type:"int16",size:1,byteSize:2,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-32768&&t<=32767},fromJni:ge,toJni:ge,read(t){return t.readS16()},write(t,e){t.writeS16(e)},toString(){return this.name}},int:{name:"I",type:"int32",size:1,byteSize:4,defaultValue:0,isCompatible(t){return Number.isInteger(t)&&t>=-2147483648&&t<=2147483647},fromJni:ge,toJni:ge,read(t){return t.readS32()},write(t,e){t.writeS32(e)},toString(){return this.name}},long:{name:"J",type:"int64",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"||t instanceof Int64},fromJni:ge,toJni:ge,read(t){return t.readS64()},write(t,e){t.writeS64(e)},toString(){return this.name}},float:{name:"F",type:"float",size:1,byteSize:4,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:ge,toJni:ge,read(t){return t.readFloat()},write(t,e){t.writeFloat(e)},toString(){return this.name}},double:{name:"D",type:"double",size:2,byteSize:8,defaultValue:0,isCompatible(t){return typeof t=="number"},fromJni:ge,toJni:ge,read(t){return t.readDouble()},write(t,e){t.writeDouble(e)},toString(){return this.name}},void:{name:"V",type:"void",size:0,byteSize:0,defaultValue:void 0,isCompatible(t){return t===void 0},fromJni(){},toJni(){return NULL},toString(){return this.name}}},Pc=new Set(Object.values(co).map(t=>t.name));function Ve(t){let e=co[t];return e!==void 0?e:null}function Rc(t,e,n){let r=n._types[e?1:0],o=r[t];return o!==void 0||(t==="java.lang.Object"?o=Fc(n):o=Dc(t,e,n),r[t]=o),o}function Fc(t){return{name:"Ljava/lang/Object;",type:"pointer",size:1,defaultValue:NULL,isCompatible(e){return e===null?!0:e===void 0?!1:e.$h instanceof NativePointer?!0:typeof e=="string"},fromJni(e,n,r){return e.isNull()?null:t.cast(e,t.use("java.lang.Object"),r)},toJni(e,n){return e===null?NULL:typeof e=="string"?n.newStringUtf(e):e.$h}}}function Dc(t,e,n){let r=null,o=null,s=null;function i(){return r===null&&(r=n.use(t).class),r}function l(c){let d=i();return o===null&&(o=d.isInstance.overload("java.lang.Object")),o.call(d,c)}function a(){if(s===null){let c=i();s=n.use("java.lang.String").class.isAssignableFrom(c)}return s}return{name:Oe(t),type:"pointer",size:1,defaultValue:NULL,isCompatible(c){return c===null?!0:c===void 0?!1:c.$h instanceof NativePointer?l(c):typeof c=="string"&&a()},fromJni(c,d,f){return c.isNull()?null:a()&&e?d.stringFromJni(c):n.cast(c,n.use(t),f)},toJni(c,d){return c===null?NULL:typeof c=="string"?d.newStringUtf(c):c.$h},toString(){return this.name}}}var zc=[["Z","boolean"],["B","byte"],["C","char"],["D","double"],["F","float"],["I","int"],["J","long"],["S","short"]].reduce((t,[e,n])=>(t["["+e]=Uc("["+e,n),t),{});function Uc(t,e){let n=b.prototype,r=$c(e),o={typeName:e,newArray:n["new"+r+"Array"],setRegion:n["set"+r+"ArrayRegion"],getElements:n["get"+r+"ArrayElements"],releaseElements:n["release"+r+"ArrayElements"]};return{name:t,type:"pointer",size:1,defaultValue:NULL,isCompatible(s){return Hc(s,e)},fromJni(s,i,l){return Jc(s,o,i,l)},toJni(s,i){return Gc(s,o,i)}}}function Hn(t,e,n){let r=zc[t];if(r!==void 0)return r;if(t.indexOf("[")!==0)throw new Error("Unsupported type: "+t);let o=t.substring(1),s=Gn(o,e,n),i=0,l=o.length;for(;i!==l&&o[i]==="[";)i++;o=o.substring(i),o[0]==="L"&&o[o.length-1]===";"&&(o=o.substring(1,o.length-1));let a=o.replace(/\./g,"/");Pc.has(a)?a="[".repeat(i)+a:a="[".repeat(i)+"L"+a+";";let c="["+a;return o="[".repeat(i)+o,{name:t.replace(/\./g,"/"),type:"pointer",size:1,defaultValue:NULL,isCompatible(d){return d===null?!0:typeof d!="object"||d.length===void 0?!1:d.every(function(f){return s.isCompatible(f)})},fromJni(d,f,p){if(d.isNull())return null;let u=[],_=f.getArrayLength(d);for(let h=0;h!==_;h++){let m=f.getObjectArrayElement(d,h);try{u.push(s.fromJni(m,f))}finally{f.deleteLocalRef(m)}}try{u.$w=n.cast(d,n.use(c),p)}catch{n.use("java.lang.reflect.Array").newInstance(n.use(o).class,0),u.$w=n.cast(d,n.use(c),p)}return u.$dispose=Vc,u},toJni(d,f){if(d===null)return NULL;if(!(d instanceof Array))throw new Error("Expected an array");let p=d.$w;if(p!==void 0)return p.$h;let u=d.length,h=n.use(o).$borrowClassHandle(f);try{let m=f.newObjectArray(u,h.value,NULL);f.throwIfExceptionPending();for(let g=0;g!==u;g++){let v=s.toJni(d[g],f);try{f.setObjectArrayElement(m,g,v)}finally{s.type==="pointer"&&f.getObjectRefType(v)===Oc&&f.deleteLocalRef(v)}f.throwIfExceptionPending()}return m}finally{h.unref(f)}}}}function Vc(){let t=this.length;for(let e=0;e!==t;e++){let n=this[e];if(n===null)continue;let r=n.$dispose;if(r===void 0)break;r.call(n)}this.$w.$dispose()}function Jc(t,e,n,r){if(t.isNull())return null;let o=Ve(e.typeName),s=n.getArrayLength(t);return new kt(t,e,o,s,n,r)}function Gc(t,e,n){if(t===null)return NULL;let r=t.$h;if(r!==void 0)return r;let o=t.length,s=Ve(e.typeName),i=e.newArray.call(n,o);if(i.isNull())throw new Error("Unable to construct array");if(o>0){let l=s.byteSize,a=s.write,c=s.toJni,d=Memory.alloc(o*s.byteSize);for(let f=0;f!==o;f++)a(d.add(f*l),c(t[f]));e.setRegion.call(n,i,0,o,d),n.throwIfExceptionPending()}return i}function Hc(t,e){if(t===null)return!0;if(t instanceof kt)return t.$s.typeName===e;if(!(typeof t=="object"&&t.length!==void 0))return!1;let r=Ve(e);return Array.prototype.every.call(t,o=>r.isCompatible(o))}function kt(t,e,n,r,o,s=!0){if(s){let i=o.newGlobalRef(t);this.$h=i,this.$r=Script.bindWeak(this,o.vm.makeHandleDestructor(i))}else this.$h=t,this.$r=null;return this.$s=e,this.$t=n,this.length=r,new Proxy(this,io)}io={has(t,e){return e in t?!0:t.tryParseIndex(e)!==null},get(t,e,n){let r=t.tryParseIndex(e);return r===null?t[e]:t.readElement(r)},set(t,e,n,r){let o=t.tryParseIndex(e);return o===null?(t[e]=n,!0):(t.writeElement(o,n),!0)},ownKeys(t){let e=[],{length:n}=t;for(let r=0;r!==n;r++){let o=r.toString();e.push(o)}return e.push("length"),e},getOwnPropertyDescriptor(t,e){return t.tryParseIndex(e)!==null?{writable:!0,configurable:!0,enumerable:!0}:Object.getOwnPropertyDescriptor(t,e)}};Object.defineProperties(kt.prototype,{$dispose:{enumerable:!0,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t))}},$clone:{value(t){return new kt(this.$h,this.$s,this.$t,this.length,t)}},tryParseIndex:{value(t){if(typeof t=="symbol")return null;let e=parseInt(t);return isNaN(e)||e<0||e>=this.length?null:e}},readElement:{value(t){return this.withElements(e=>{let n=this.$t;return n.fromJni(n.read(e.add(t*n.byteSize)))})}},writeElement:{value(t,e){let{$h:n,$s:r,$t:o}=this,s=Jn.getEnv(),i=Memory.alloc(o.byteSize);o.write(i,o.toJni(e)),r.setRegion.call(s,n,t,1,i)}},withElements:{value(t){let{$h:e,$s:n}=this,r=Jn.getEnv(),o=n.getElements.call(r,e);if(o.isNull())throw new Error("Unable to get array elements");try{return t(o)}finally{n.releaseElements.call(r,e,o)}}},toJSON:{value(){let{length:t,$t:e}=this,{byteSize:n,fromJni:r,read:o}=e;return this.withElements(s=>{let i=[];for(let l=0;l!==t;l++){let a=r(o(s.add(l*n)));i.push(a)}return i})}},toString:{value(){return this.toJSON().toString()}}});function Oe(t){return"L"+t.replace(/\./g,"/")+";"}function $c(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ge(t){return t}var Zc=4,{ensureClassInitialized:uo,makeMethodMangler:go}=Lt,Bc=8,Bn=1,at=2,Te=3,$n=1,qn=2,Nt=1,bo=2,po=Symbol("PENDING_USE"),fo="/data/local/tmp",{getCurrentThreadId:Mt,pointerSize:st}=Process,le={state:"empty",factories:[],loaders:null,Integer:null},G=null,W=null,vo=null,yo=null,Eo=null,So=null,Co=null,ho=null,Zn=null,Ge=new Map,ke=class t{static _initialize(e,n){G=e,W=n,vo=n.flavor==="art",n.flavor==="jvm"&&(uo=Gr,go=$r)}static _disposeAll(e){le.factories.forEach(n=>{n._dispose(e)})}static get(e){let n=fd(),r=n.factories[0];if(e===null)return r;let o=n.loaders.get(e);if(o!==null){let i=r.cast(o,n.Integer);return n.factories[i.intValue()]}let s=new t;return s.loader=e,s.cacheDir=r.cacheDir,Qn(s,e),s}constructor(){this.cacheDir=fo,this.codeCacheDir=fo+"/dalvik-cache",this.tempFileNaming={prefix:"frida",suffix:""},this._classes={},this._classHandles=new rt(10,Wc),this._patchedMethods=new Set,this._loader=null,this._types=[{},{}],le.factories.push(this)}_dispose(e){Array.from(this._patchedMethods).forEach(n=>{n.implementation=null}),this._patchedMethods.clear(),kn(),this._classHandles.dispose(e),this._classes={}}get loader(){return this._loader}set loader(e){let n=this._loader===null&&e!==null;this._loader=e,n&&le.state==="ready"&&this===le.factories[0]&&Qn(this,e)}use(e,n={}){let r=n.cache!=="skip",o=r?this._getUsedClass(e):void 0;if(o===void 0)try{let s=G.getEnv(),{_loader:i}=this,l=i!==null?Qc(e,i,s):Kc(e);o=this._make(e,l,s)}finally{r&&this._setUsedClass(e,o)}return o}_getUsedClass(e){let n;for(;(n=this._classes[e])===po;)Thread.sleep(.05);return n===void 0&&(this._classes[e]=po),n}_setUsedClass(e,n){n!==void 0?this._classes[e]=n:delete this._classes[e]}_make(e,n,r){let o=qc(),s=Object.create(Xn.prototype,{[Symbol.for("n")]:{value:e},$n:{get(){return this[Symbol.for("n")]}},[Symbol.for("C")]:{value:o},$C:{get(){return this[Symbol.for("C")]}},[Symbol.for("w")]:{value:null,writable:!0},$w:{get(){return this[Symbol.for("w")]},set(a){this[Symbol.for("w")]=a}},[Symbol.for("_s")]:{writable:!0},$_s:{get(){return this[Symbol.for("_s")]},set(a){this[Symbol.for("_s")]=a}},[Symbol.for("c")]:{value:[null]},$c:{get(){return this[Symbol.for("c")]}},[Symbol.for("m")]:{value:new Map},$m:{get(){return this[Symbol.for("m")]}},[Symbol.for("l")]:{value:null,writable:!0},$l:{get(){return this[Symbol.for("l")]},set(a){this[Symbol.for("l")]=a}},[Symbol.for("gch")]:{value:n},$gch:{get(){return this[Symbol.for("gch")]}},[Symbol.for("f")]:{value:this},$f:{get(){return this[Symbol.for("f")]}}});o.prototype=s;let i=new o(null);s[Symbol.for("w")]=i,s.$w=i;let l=i.$borrowClassHandle(r);try{let a=l.value;uo(r,a),s.$l=xe.build(a,r)}finally{l.unref(r)}return i}retain(e){let n=G.getEnv();return e.$clone(n)}cast(e,n,r){let o=G.getEnv(),s=e.$h;s===void 0&&(s=e);let i=n.$borrowClassHandle(o);try{if(!o.isInstanceOf(s,i.value))throw new Error(`Cast from '${o.getObjectClassName(s)}' to '${n.$n}' isn't possible`)}finally{i.unref(o)}let l=n.$C;return new l(s,Nt,o,r)}wrap(e,n,r){let o=n.$C,s=new o(e,Nt,r,!1);return s.$r=Script.bindWeak(s,G.makeHandleDestructor(e)),s}array(e,n){let r=G.getEnv(),o=Ve(e);o!==null&&(e=o.name);let s=Hn("["+e,!1,this),i=s.toJni(n,r);return s.fromJni(i,r,!0)}registerClass(e){let n=G.getEnv(),r=[];try{let o=this.use("java.lang.Class"),s=n.javaLangReflectMethod(),i=n.vaMethod("pointer",[]),l=e.name,a=e.implements||[],c=e.superClass||this.use("java.lang.Object"),d=[],f=[],p={name:Oe(l),sourceFileName:_d(l),superClass:Oe(c.$n),interfaces:a.map(E=>Oe(E.$n)),fields:d,methods:f},u=a.slice();a.forEach(E=>{Array.prototype.slice.call(E.class.getInterfaces()).forEach(w=>{let j=this.cast(w,o).getCanonicalName();u.push(this.use(j))})});let _=e.fields||{};Object.getOwnPropertyNames(_).forEach(E=>{let w=this._getType(_[E]);d.push([E,w.name])});let h={},m={};u.forEach(E=>{let w=E.$borrowClassHandle(n);r.push(w);let j=w.value;E.$ownMembers.filter(S=>E[S].overloads!==void 0).forEach(S=>{let O=E[S],F=O.overloads,D=F.map(R=>_o(S,R.returnType,R.argumentTypes));h[S]=[O,D,j],F.forEach((R,U)=>{let Y=D[U];m[Y]=[R,j]})})});let g=e.methods||{},I=Object.keys(g).reduce((E,w)=>{let j=g[w],S=w==="$init"?"<init>":w;return j instanceof Array?E.push(...j.map(O=>[S,O])):E.push([S,j]),E},[]),L=[];I.forEach(([E,w])=>{let j=Te,S,O,F=[],D;if(typeof w=="function"){let ee=h[E];if(ee!==void 0&&Array.isArray(ee)){let[oe,K,re]=ee;if(K.length>1)throw new Error(`More than one overload matching '${E}': signature must be specified`);delete m[K[0]];let Q=oe.overloads[0];j=Q.type,S=Q.returnType,O=Q.argumentTypes,D=w;let te=n.toReflectedMethod(re,Q.handle,0),be=i(n.handle,te,s.getGenericExceptionTypes);F=Yn(n,be).map(Oe),n.deleteLocalRef(be),n.deleteLocalRef(te)}else S=this._getType("void"),O=[],D=w}else{if(w.isStatic&&(j=at),S=this._getType(w.returnType||"void"),O=(w.argumentTypes||[]).map(K=>this._getType(K)),D=w.implementation,typeof D!="function")throw new Error("Expected a function implementation for method: "+E);let ee=_o(E,S,O),oe=m[ee];if(oe!==void 0){let[K,re]=oe;delete m[ee],j=K.type,S=K.returnType,O=K.argumentTypes;let Q=n.toReflectedMethod(re,K.handle,0),te=i(n.handle,Q,s.getGenericExceptionTypes);F=Yn(n,te).map(Oe),n.deleteLocalRef(te),n.deleteLocalRef(Q)}}let R=S.name,U=O.map(ee=>ee.name),Y="("+U.join("")+")"+R;f.push([E,R,U,F,j===at?Bc:0]),L.push([E,Y,j,S,O,D])});let M=Object.keys(m);if(M.length>0)throw new Error("Missing implementation for: "+M.join(", "));let x=At.fromBuffer(ao(p),this);try{x.load()}finally{x.file.delete()}let A=this.use(e.name),N=I.length;if(N>0){let E=3*st,w=Memory.alloc(N*E),j=[],S=[];L.forEach(([D,R,U,Y,ee,oe],K)=>{let re=Memory.allocUtf8String(D),Q=Memory.allocUtf8String(R),te=Io(D,A,U,Y,ee,oe);w.add(K*E).writePointer(re),w.add(K*E+st).writePointer(Q),w.add(K*E+2*st).writePointer(te),S.push(re,Q),j.push(te)});let O=A.$borrowClassHandle(n);r.push(O);let F=O.value;n.registerNatives(F,w,N),n.throwIfExceptionPending(),A.$nativeMethods=j}return A}finally{r.forEach(o=>{o.unref(n)})}}choose(e,n){let r=G.getEnv(),{flavor:o}=W;if(o==="jvm")this._chooseObjectsJvm(e,r,n);else if(o==="art"){let s=W["art::gc::Heap::VisitObjects"]===void 0;if(s&&W["art::gc::Heap::GetInstances"]===void 0)return this._chooseObjectsJvm(e,r,n);_e(G,r,i=>{s?this._chooseObjectsArtPreA12(e,r,i,n):this._chooseObjectsArtLegacy(e,r,i,n)})}else this._chooseObjectsDalvik(e,r,n)}_chooseObjectsJvm(e,n,r){let o=this.use(e),{jvmti:s}=W,i=1,l=3,a=o.$borrowClassHandle(n),c=int64(a.value.toString());try{let d=new NativeCallback((g,v,I,L)=>(I.writeS64(c),i),"int",["int64","int64","pointer","pointer"]);s.iterateOverInstancesOfClass(a.value,l,d,a.value);let f=Memory.alloc(8);f.writeS64(c);let p=Memory.alloc(Zc),u=Memory.alloc(st);s.getObjectsWithTags(1,f,p,u,NULL);let _=p.readS32(),h=u.readPointer(),m=[];for(let g=0;g!==_;g++)m.push(h.add(g*st).readPointer());s.deallocate(h);try{for(let g of m){let v=this.cast(g,o);if(r.onMatch(v)==="stop")break}r.onComplete()}finally{m.forEach(g=>{n.deleteLocalRef(g)})}}finally{a.unref(n)}}_chooseObjectsArtPreA12(e,n,r,o){let s=this.use(e),i=Xe.$new(r,G),l,a=s.$borrowClassHandle(n);try{let p=W["art::JavaVMExt::DecodeGlobal"](W.vm,r,a.value);l=i.newHandle(p)}finally{a.unref(n)}let c=0,d=Ye.$new();W["art::gc::Heap::GetInstances"](W.artHeap,i,l,c,d);let f=d.handles.map(p=>n.newGlobalRef(p));d.$delete(),i.$delete();try{for(let p of f){let u=this.cast(p,s);if(o.onMatch(u)==="stop")break}o.onComplete()}finally{f.forEach(p=>{n.deleteGlobalRef(p)})}}_chooseObjectsArtLegacy(e,n,r,o){let s=this.use(e),i=[],l=W["art::JavaVMExt::AddGlobalRef"],a=W.vm,c,d=s.$borrowClassHandle(n);try{c=W["art::JavaVMExt::DecodeGlobal"](a,r,d.value).toInt32()}finally{d.unref(n)}let f=On(c,p=>{i.push(l(a,r,p))});W["art::gc::Heap::VisitObjects"](W.artHeap,f,NULL);try{for(let p of i){let u=this.cast(p,s);if(o.onMatch(u)==="stop")break}}finally{i.forEach(p=>{n.deleteGlobalRef(p)})}o.onComplete()}_chooseObjectsDalvik(e,n,r){let o=this.use(e);if(W.addLocalReference===null){let i=Process.getModuleByName("libdvm.so"),l;switch(Process.arch){case"arm":l="2d e9 f0 41 05 46 15 4e 0c 46 7e 44 11 b3 43 68";break;case"ia32":l="8d 64 24 d4 89 5c 24 1c 89 74 24 20 e8 ?? ?? ?? ?? ?? ?? ?? ?? ?? ?? 85 d2";break}Memory.scan(i.base,i.size,l,{onMatch:(a,c)=>{let d;if(Process.arch==="arm")a=a.or(1),d=new NativeFunction(a,"pointer",["pointer","pointer"]);else{let f=Memory.alloc(Process.pageSize);Memory.patchCode(f,16,p=>{let u=new X86Writer(p,{pc:f});u.putMovRegRegOffsetPtr("eax","esp",4),u.putMovRegRegOffsetPtr("edx","esp",8),u.putJmpAddress(a),u.flush()}),d=new NativeFunction(f,"pointer",["pointer","pointer"]),d._thunk=f}return W.addLocalReference=d,G.perform(f=>{s(this,f)}),"stop"},onError(a){},onComplete(){W.addLocalReference===null&&r.onComplete()}})}else s(this,n);function s(i,l){let{DVM_JNI_ENV_OFFSET_SELF:a}=Lt,c=l.handle.add(a).readPointer(),d,f=o.$borrowClassHandle(l);try{d=W.dvmDecodeIndirectRef(c,f.value)}finally{f.unref(l)}let p=d.toMatchPattern(),u=W.dvmHeapSourceGetBase(),h=W.dvmHeapSourceGetLimit().sub(u).toInt32();Memory.scan(u,h,p,{onMatch:(m,g)=>{W.dvmIsValidObject(m)&&G.perform(v=>{let I=v.handle.add(a).readPointer(),L,M=W.addLocalReference(I,m);try{L=i.cast(M,o)}finally{v.deleteLocalRef(M)}if(r.onMatch(L)==="stop")return"stop"})},onError(m){},onComplete(){r.onComplete()}})}}openClassFile(e){return new At(e,null,this)}_getType(e,n=!0){return Gn(e,n,this)}};function qc(){return function(t,e,n,r){return Xn.call(this,t,e,n,r)}}function Xn(t,e,n,r=!0){if(t!==null)if(r){let o=n.newGlobalRef(t);this.$h=o,this.$r=Script.bindWeak(this,G.makeHandleDestructor(o))}else this.$h=t,this.$r=null;else this.$h=null,this.$r=null;return this.$t=e,new Proxy(this,yo)}yo={has(t,e){return e in t?!0:t.$has(e)},get(t,e,n){if(typeof e!="string"||e.startsWith("$")||e==="class")return t[e];let r=t.$find(e);return r!==null?r(n):t[e]},set(t,e,n,r){return t[e]=n,!0},ownKeys(t){return t.$list()},getOwnPropertyDescriptor(t,e){return Object.prototype.hasOwnProperty.call(t,e)?Object.getOwnPropertyDescriptor(t,e):{writable:!1,configurable:!0,enumerable:!0}}};Object.defineProperties(Xn.prototype,{[Symbol.for("new")]:{enumerable:!1,get(){return this.$getCtor("allocAndInit")}},$new:{enumerable:!0,get(){return this[Symbol.for("new")]}},[Symbol.for("alloc")]:{enumerable:!1,value(){let t=G.getEnv(),e=this.$borrowClassHandle(t);try{let n=t.allocObject(e.value);return this.$f.cast(n,this)}finally{e.unref(t)}}},$alloc:{enumerable:!0,get(){return this[Symbol.for("alloc")]}},[Symbol.for("init")]:{enumerable:!1,get(){return this.$getCtor("initOnly")}},$init:{enumerable:!0,get(){return this[Symbol.for("init")]}},[Symbol.for("dispose")]:{enumerable:!1,value(){let t=this.$r;t!==null&&(this.$r=null,Script.unbindWeak(t)),this.$h!==null&&(this.$h=void 0)}},$dispose:{enumerable:!0,get(){return this[Symbol.for("dispose")]}},[Symbol.for("clone")]:{enumerable:!1,value(t){let e=this.$C;return new e(this.$h,this.$t,t)}},$clone:{value(t){return this[Symbol.for("clone")](t)}},[Symbol.for("class")]:{enumerable:!1,get(){let t=G.getEnv(),e=this.$borrowClassHandle(t);try{let n=this.$f;return n.cast(e.value,n.use("java.lang.Class"))}finally{e.unref(t)}}},class:{enumerable:!0,get(){return this[Symbol.for("class")]}},[Symbol.for("className")]:{enumerable:!1,get(){let t=this.$h;return t===null?this.$n:G.getEnv().getObjectClassName(t)}},$className:{enumerable:!0,get(){return this[Symbol.for("className")]}},[Symbol.for("ownMembers")]:{enumerable:!1,get(){return this.$l.list()}},$ownMembers:{enumerable:!0,get(){return this[Symbol.for("ownMembers")]}},[Symbol.for("super")]:{enumerable:!1,get(){let t=G.getEnv(),e=this.$s.$C;return new e(this.$h,bo,t)}},$super:{enumerable:!0,get(){return this[Symbol.for("super")]}},[Symbol.for("s")]:{enumerable:!1,get(){let t=Object.getPrototypeOf(this),e=t.$_s;if(e===void 0){let n=G.getEnv(),r=this.$borrowClassHandle(n);try{let o=n.getSuperclass(r.value);if(o.isNull())e=null;else try{let s=n.getClassName(o),i=t.$f;if(e=i._getUsedClass(s),e===void 0)try{let l=Yc(this);e=i._make(s,l,n)}finally{i._setUsedClass(s,e)}}finally{n.deleteLocalRef(o)}}finally{r.unref(n)}t.$_s=e}return e}},$s:{get(){return this[Symbol.for("s")]}},[Symbol.for("isSameObject")]:{enumerable:!1,value(t){return G.getEnv().isSameObject(t.$h,this.$h)}},$isSameObject:{value(t){return this[Symbol.for("isSameObject")](t)}},[Symbol.for("getCtor")]:{enumerable:!1,value(t){let e=this.$c,n=e[0];if(n===null){let r=G.getEnv(),o=this.$borrowClassHandle(r);try{n=Xc(o.value,this.$w,r),e[0]=n}finally{o.unref(r)}}return n[t]}},$getCtor:{value(t){return this[Symbol.for("getCtor")](t)}},[Symbol.for("borrowClassHandle")]:{enumerable:!1,value(t){let e=this.$n,n=this.$f._classHandles,r=n.get(e);return r===void 0&&(r=new er(this.$gch(t),t),n.set(e,r,t)),r.ref()}},$borrowClassHandle:{value(t){return this[Symbol.for("borrowClassHandle")](t)}},[Symbol.for("copyClassHandle")]:{enumerable:!1,value(t){let e=this.$borrowClassHandle(t);try{return t.newLocalRef(e.value)}finally{e.unref(t)}}},$copyClassHandle:{value(t){return this[Symbol.for("copyClassHandle")](t)}},[Symbol.for("getHandle")]:{enumerable:!1,value(t){let e=this.$h;if(e===void 0)throw new Error("Wrapper is disposed; perhaps it was borrowed from a hook instead of calling Java.retain() to make a long-lived wrapper?");return e}},$getHandle:{value(t){return this[Symbol.for("getHandle")](t)}},[Symbol.for("list")]:{enumerable:!1,value(){let t=this.$s,e=t!==null?t.$list():[],n=this.$l;return Array.from(new Set(e.concat(n.list())))}},$list:{get(){return this[Symbol.for("list")]}},[Symbol.for("has")]:{enumerable:!1,value(t){if(this.$m.has(t)||this.$l.has(t))return!0;let r=this.$s;return!!(r!==null&&r.$has(t))}},$has:{value(t){return this[Symbol.for("has")](t)}},[Symbol.for("find")]:{enumerable:!1,value(t){let e=this.$m,n=e.get(t);if(n!==void 0)return n;let o=this.$l.find(t);if(o!==null){let i=G.getEnv(),l=this.$borrowClassHandle(i);try{n=ed(t,o,l.value,this.$w,i)}finally{l.unref(i)}return e.set(t,n),n}let s=this.$s;return s!==null?s.$find(t):null}},$find:{value(t){return this[Symbol.for("find")](t)}},[Symbol.for("toJSON")]:{enumerable:!1,value(){let t=this.$n;if(this.$h===null)return`<class: ${t}>`;let n=this.$className;return t===n?`<instance: ${t}>`:`<instance: ${t}, $className: ${n}>`}},toJSON:{get(){return this[Symbol.for("toJSON")]}}});function er(t,e){this.value=e.newGlobalRef(t),e.deleteLocalRef(t),this.refs=1}er.prototype.ref=function(){return this.refs++,this};er.prototype.unref=function(t){--this.refs===0&&t.deleteGlobalRef(this.value)};function Wc(t,e){t.unref(e)}function Kc(t){let e=t.replace(/\./g,"/");return function(n){let r=Mt();Lo(r);try{return n.findClass(e)}finally{wo(r)}}}function Qc(t,e,n){return Zn===null&&(ho=n.vaMethod("pointer",["pointer"]),Zn=e.loadClass.overload("java.lang.String").handle),n=null,function(r){let o=r.newStringUtf(t),s=Mt();Lo(s);try{let i=ho(r.handle,e.$h,Zn,o);return r.throwIfExceptionPending(),i}finally{wo(s),r.deleteLocalRef(o)}}}function Yc(t){return function(e){let n=t.$borrowClassHandle(e);try{return e.getSuperclass(n.value)}finally{n.unref(e)}}}function Xc(t,e,n){let{$n:r,$f:o}=e,s=hd(r),i=n.javaLangClass(),l=n.javaLangReflectConstructor(),a=n.vaMethod("pointer",[]),c=n.vaMethod("uint8",[]),d=[],f=[],p=o._getType(r,!1),u=o._getType("void",!1),_=a(n.handle,t,i.getDeclaredConstructors);try{let h=n.getArrayLength(_);if(h!==0)for(let m=0;m!==h;m++){let g,v,I=n.getObjectArrayElement(_,m);try{g=n.fromReflectedMethod(I),v=a(n.handle,I,l.getGenericParameterTypes)}finally{n.deleteLocalRef(I)}let L;try{L=Yn(n,v).map(M=>o._getType(M))}finally{n.deleteLocalRef(v)}d.push(Je(s,e,Bn,g,p,L,n)),f.push(Je(s,e,Te,g,u,L,n))}else{if(c(n.handle,t,i.isInterface))throw new Error("cannot instantiate an interface");let g=n.javaLangObject(),v=n.getMethodId(g,"<init>","()V");d.push(Je(s,e,Bn,v,p,[],n)),f.push(Je(s,e,Te,v,u,[],n))}}finally{n.deleteLocalRef(_)}if(f.length===0)throw new Error("no supported overloads");return{allocAndInit:Wn(d),initOnly:Wn(f)}}function ed(t,e,n,r,o){return e.startsWith("m")?td(t,e,n,r,o):dd(t,e,n,r,o)}function td(t,e,n,r,o){let{$f:s}=r,i=e.split(":").slice(1),l=o.javaLangReflectMethod(),a=o.vaMethod("pointer",[]),c=o.vaMethod("uint8",[]),d=i.map(p=>{let u=p[0]==="s"?at:Te,_=ptr(p.substr(1)),h,m=[],g=o.toReflectedMethod(n,_,u===at?1:0);try{let v=!!c(o.handle,g,l.isVarArgs),I=a(o.handle,g,l.getGenericReturnType);o.throwIfExceptionPending();try{h=s._getType(o.getTypeName(I))}finally{o.deleteLocalRef(I)}let L=a(o.handle,g,l.getParameterTypes);try{let M=o.getArrayLength(L);for(let x=0;x!==M;x++){let A=o.getObjectArrayElement(L,x),N;try{N=v&&x===M-1?o.getArrayTypeName(A):o.getTypeName(A)}finally{o.deleteLocalRef(A)}let E=s._getType(N);m.push(E)}}finally{o.deleteLocalRef(L)}}catch{return null}finally{o.deleteLocalRef(g)}return Je(t,r,u,_,h,m,o)}).filter(p=>p!==null);if(d.length===0)throw new Error("No supported overloads");t==="valueOf"&&id(d);let f=Wn(d);return function(p){return f}}function Wn(t){let e=nd();return Object.setPrototypeOf(e,Eo),e._o=t,e}function nd(){let t=function(){return t.invoke(this,arguments)};return t}Eo=Object.create(Function.prototype,{overloads:{enumerable:!0,get(){return this._o}},overload:{value(...t){let e=this._o,n=t.length,r=t.join(":");for(let o=0;o!==e.length;o++){let s=e[o],{argumentTypes:i}=s;if(i.length!==n)continue;if(i.map(a=>a.className).join(":")===r)return s}Kn(this.methodName,this.overloads,"specified argument types do not match any of:")}},methodName:{enumerable:!0,get(){return this._o[0].methodName}},holder:{enumerable:!0,get(){return this._o[0].holder}},type:{enumerable:!0,get(){return this._o[0].type}},handle:{enumerable:!0,get(){return Pe(this),this._o[0].handle}},implementation:{enumerable:!0,get(){return Pe(this),this._o[0].implementation},set(t){Pe(this),this._o[0].implementation=t}},returnType:{enumerable:!0,get(){return Pe(this),this._o[0].returnType}},argumentTypes:{enumerable:!0,get(){return Pe(this),this._o[0].argumentTypes}},canInvokeWith:{enumerable:!0,get(t){return Pe(this),this._o[0].canInvokeWith}},clone:{enumerable:!0,value(t){return Pe(this),this._o[0].clone(t)}},invoke:{value(t,e){let n=this._o,r=t.$h!==null;for(let o=0;o!==n.length;o++){let s=n[o];if(s.canInvokeWith(e)){if(s.type===Te&&!r){let i=this.methodName;if(i==="toString")return`<class: ${t.$n}>`;throw new Error(i+": cannot call instance method without an instance")}return s.apply(t,e)}}if(this.methodName==="toString")return`<class: ${t.$n}>`;Kn(this.methodName,this.overloads,"argument types do not match any of:")}}});function _o(t,e,n){return`${e.className} ${t}(${n.map(r=>r.className).join(", ")})`}function Pe(t){let e=t._o;e.length>1&&Kn(e[0].methodName,e,"has more than one overload, use .overload(<signature>) to choose from:")}function Kn(t,e,n){let o=e.slice().sort((s,i)=>s.argumentTypes.length-i.argumentTypes.length).map(s=>s.argumentTypes.length>0?".overload('"+s.argumentTypes.map(l=>l.className).join("', '")+"')":".overload()");throw new Error(`${t}(): ${n}
	${o.join(`
	`)}`)}function Je(t,e,n,r,o,s,i,l){let a=o.type,c=s.map(p=>p.type);i===null&&(i=G.getEnv());let d,f;return n===Te?(d=i.vaMethod(a,c,l),f=i.nonvirtualVaMethod(a,c,l)):n===at?(d=i.staticVaMethod(a,c,l),f=d):(d=i.constructor(c,l),f=d),rd([t,e,n,r,o,s,d,f])}function rd(t){let e=od();return Object.setPrototypeOf(e,So),e._p=t,e}function od(){let t=function(){return t.invoke(this,arguments)};return t}So=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return this._p[0]}},holder:{enumerable:!0,get(){return this._p[1]}},type:{enumerable:!0,get(){return this._p[2]}},handle:{enumerable:!0,get(){return this._p[3]}},implementation:{enumerable:!0,get(){let t=this._r;return t!==void 0?t:null},set(t){let e=this._p,n=e[1];if(e[2]===Bn)throw new Error("Reimplementing $new is not possible; replace implementation of $init instead");let o=this._r;if(o!==void 0&&(n.$f._patchedMethods.delete(this),o._m.revert(G),this._r=void 0),t!==null){let[s,i,l,a,c,d]=e,f=Io(s,i,l,c,d,t,this),p=go(a);f._m=p,this._r=f,p.replace(f,l===Te,d,G,W),n.$f._patchedMethods.add(this)}}},returnType:{enumerable:!0,get(){return this._p[4]}},argumentTypes:{enumerable:!0,get(){return this._p[5]}},canInvokeWith:{enumerable:!0,value(t){let e=this._p[5];return t.length!==e.length?!1:e.every((n,r)=>n.isCompatible(t[r]))}},clone:{enumerable:!0,value(t){let e=this._p.slice(0,6);return Je(...e,null,t)}},invoke:{value(t,e){let n=G.getEnv(),r=this._p,o=r[2],s=r[4],i=r[5],l=this._r,a=o===Te,c=e.length,d=2+c;n.pushLocalFrame(d);let f=null;try{let p;a?p=t.$getHandle():(f=t.$borrowClassHandle(n),p=f.value);let u,_=t.$t;l===void 0?u=r[3]:(u=l._m.resolveTarget(t,a,n,W),vo&&l._c.has(Mt())&&(_=bo));let h=[n.handle,p,u];for(let v=0;v!==c;v++)h.push(i[v].toJni(e[v],n));let m;_===Nt?m=r[6]:(m=r[7],a&&h.splice(2,0,t.$copyClassHandle(n)));let g=m.apply(null,h);return n.throwIfExceptionPending(),s.fromJni(g,n,!0)}finally{f!==null&&f.unref(n),n.popLocalFrame(NULL)}}},toString:{enumerable:!0,value(){return`function ${this.methodName}(${this.argumentTypes.map(t=>t.className).join(", ")}): ${this.returnType.className}`}}});function Io(t,e,n,r,o,s,i=null){let l=new Set,a=sd([t,e,n,r,o,s,i,l]),c=new NativeCallback(a,r.type,["pointer","pointer"].concat(o.map(d=>d.type)));return c._c=l,c}function sd(t){return function(){return ad(arguments,t)}}function ad(t,e){let n=new b(t[0],G),[r,o,s,i,l,a,c,d]=e,f=[],p;if(s===Te){let h=o.$C;p=new h(t[1],Nt,n,!1)}else p=o;let u=Mt();n.pushLocalFrame(3);let _=!0;G.link(u,n);try{d.add(u);let h;c===null||!Ge.has(u)?h=a:h=c;let m=[],g=t.length-2;for(let L=0;L!==g;L++){let x=l[L].fromJni(t[2+L],n,!1);m.push(x),f.push(x)}let v=h.apply(p,m);if(!i.isCompatible(v))throw new Error(`Implementation for ${r} expected return value compatible with ${i.className}`);let I=i.toJni(v,n);return i.type==="pointer"&&(I=n.popLocalFrame(I),_=!1,f.push(v)),I}catch(h){let m=h.$h;return m!==void 0?n.throw(m):Script.nextTick(()=>{throw h}),i.defaultValue}finally{G.unlink(u),_&&n.popLocalFrame(NULL),d.delete(u),f.forEach(h=>{if(h===null)return;let m=h.$dispose;m!==void 0&&m.call(h)})}}function id(t){let{holder:e,type:n}=t[0];t.some(o=>o.type===n&&o.argumentTypes.length===0)||t.push(ld([e,n]))}function ld(t){let e=cd();return Object.setPrototypeOf(e,Co),e._p=t,e}function cd(){return function(){return this}}Co=Object.create(Function.prototype,{methodName:{enumerable:!0,get(){return"valueOf"}},holder:{enumerable:!0,get(){return this._p[0]}},type:{enumerable:!0,get(){return this._p[1]}},handle:{enumerable:!0,get(){return NULL}},implementation:{enumerable:!0,get(){return null},set(t){}},returnType:{enumerable:!0,get(){let t=this.holder;return t.$f.use(t.$n)}},argumentTypes:{enumerable:!0,get(){return[]}},canInvokeWith:{enumerable:!0,value(t){return t.length===0}},clone:{enumerable:!0,value(t){throw new Error("Invalid operation")}}});function dd(t,e,n,r,o){let s=e[2]==="s"?$n:qn,i=ptr(e.substr(3)),{$f:l}=r,a,c=o.toReflectedField(n,i,s===$n?1:0);try{a=o.vaMethod("pointer",[])(o.handle,c,o.javaLangReflectField().getGenericType),o.throwIfExceptionPending()}finally{o.deleteLocalRef(c)}let d;try{d=l._getType(o.getTypeName(a))}finally{o.deleteLocalRef(a)}let f,p,u=d.type;return s===$n?(f=o.getStaticField(u),p=o.setStaticField(u)):(f=o.getField(u),p=o.setField(u)),ud([s,d,i,f,p])}function ud(t){return function(e){return new To([e].concat(t))}}function To(t){this._p=t}Object.defineProperties(To.prototype,{value:{enumerable:!0,get(){let[t,e,n,r,o]=this._p,s=G.getEnv();s.pushLocalFrame(4);let i=null;try{let l;if(e===qn){if(l=t.$getHandle(),l===null)throw new Error("Cannot access an instance field without an instance")}else i=t.$borrowClassHandle(s),l=i.value;let a=o(s.handle,l,r);return s.throwIfExceptionPending(),n.fromJni(a,s,!0)}finally{i!==null&&i.unref(s),s.popLocalFrame(NULL)}},set(t){let[e,n,r,o,,s]=this._p,i=G.getEnv();i.pushLocalFrame(4);let l=null;try{let a;if(n===qn){if(a=e.$getHandle(),a===null)throw new Error("Cannot access an instance field without an instance")}else l=e.$borrowClassHandle(i),a=l.value;if(!r.isCompatible(t))throw new Error(`Expected value compatible with ${r.className}`);let c=r.toJni(t,i);s(i.handle,a,o,c),i.throwIfExceptionPending()}finally{l!==null&&l.unref(i),i.popLocalFrame(NULL)}}},holder:{enumerable:!0,get(){return this._p[0]}},fieldType:{enumerable:!0,get(){return this._p[1]}},fieldReturnType:{enumerable:!0,get(){return this._p[2]}},toString:{enumerable:!0,value(){let t=`Java.Field{holder: ${this.holder}, fieldType: ${this.fieldType}, fieldReturnType: ${this.fieldReturnType}, value: ${this.value}}`;return t.length<200?t:`Java.Field{
	holder: ${this.holder},
	fieldType: ${this.fieldType},
	fieldReturnType: ${this.fieldReturnType},
	value: ${this.value},
}`.split(`
`).map(n=>n.length>200?n.slice(0,n.indexOf(" ")+1)+"...,":n).join(`
`)}}});var At=class t{static fromBuffer(e,n){let r=mo(n),o=r.getCanonicalPath().toString(),s=new File(o,"w");return s.write(e.buffer),s.close(),pd(o,n),new t(o,r,n)}constructor(e,n,r){this.path=e,this.file=n,this._factory=r}load(){let{_factory:e}=this,{codeCacheDir:n}=e,r=e.use("dalvik.system.DexClassLoader"),o=e.use("java.io.File"),s=this.file;if(s===null&&(s=e.use("java.io.File").$new(this.path)),!s.exists())throw new Error("File not found");o.$new(n).mkdirs(),e.loader=r.$new(s.getCanonicalPath(),n,null,e.loader),G.preventDetachDueToClassLoader()}getClassNames(){let{_factory:e}=this,n=e.use("dalvik.system.DexFile"),r=mo(e),o=n.loadDex(this.path,r.getCanonicalPath(),0),s=[],i=o.entries();for(;i.hasMoreElements();)s.push(i.nextElement().toString());return s}};function mo(t){let{cacheDir:e,tempFileNaming:n}=t,r=t.use("java.io.File"),o=r.$new(e);return o.mkdirs(),r.createTempFile(n.prefix,n.suffix+".dex",o)}function pd(t,e){e.use("java.io.File").$new(t).setWritable(!1,!1)}function fd(){switch(le.state){case"empty":{le.state="pending";let t=le.factories[0],e=t.use("java.util.HashMap"),n=t.use("java.lang.Integer");le.loaders=e.$new(),le.Integer=n;let r=t.loader;return r!==null&&Qn(t,r),le.state="ready",le}case"pending":do Thread.sleep(.05);while(le.state==="pending");return le;case"ready":return le}}function Qn(t,e){let{factories:n,loaders:r,Integer:o}=le,s=o.$new(n.indexOf(t));r.put(e,s);for(let i=e.getParent();i!==null&&!r.containsKey(i);i=i.getParent())r.put(i,s)}function Lo(t){let e=Ge.get(t);e===void 0&&(e=0),e++,Ge.set(t,e)}function wo(t){let e=Ge.get(t);if(e===void 0)throw new Error(`Thread ${t} is not ignored`);e--,e===0?Ge.delete(t):Ge.set(t,e)}function hd(t){return t.slice(t.lastIndexOf(".")+1)}function Yn(t,e){let n=[],r=t.getArrayLength(e);for(let o=0;o!==r;o++){let s=t.getObjectArrayElement(e,o);try{n.push(t.getTypeName(s))}finally{t.deleteLocalRef(s)}}return n}function _d(t){let e=t.split(".");return e[e.length-1]+".java"}var md=4,ko=Process.pointerSize,tr=class{constructor(){ue(this,"ACC_PUBLIC",1);ue(this,"ACC_PRIVATE",2);ue(this,"ACC_PROTECTED",4);ue(this,"ACC_STATIC",8);ue(this,"ACC_FINAL",16);ue(this,"ACC_SYNCHRONIZED",32);ue(this,"ACC_BRIDGE",64);ue(this,"ACC_VARARGS",128);ue(this,"ACC_NATIVE",256);ue(this,"ACC_ABSTRACT",1024);ue(this,"ACC_STRICT",2048);ue(this,"ACC_SYNTHETIC",4096);this.classFactory=null,this.ClassFactory=ke,this.vm=null,this.api=null,this._initialized=!1,this._apiError=null,this._wakeupHandler=null,this._pollListener=null,this._pendingMainOps=[],this._pendingVmOps=[],this._cachedIsAppProcess=null;try{this._tryInitialize()}catch{}}_tryInitialize(){if(this._initialized)return!0;if(this._apiError!==null)throw this._apiError;let e;try{e=nt(),this.api=e}catch(r){throw this._apiError=r,r}if(e===null)return!1;let n=new ve(e);return this.vm=n,lo(n),ke._initialize(n,e),this.classFactory=new ke,this._initialized=!0,!0}_dispose(){if(this.api===null)return;let{vm:e}=this;e.perform(n=>{ke._disposeAll(n),b.dispose(n)}),Script.nextTick(()=>{ve.dispose(e)})}get available(){return this._tryInitialize()}get androidVersion(){return et()}synchronized(e,n){let{$h:r=e}=e;if(!(r instanceof NativePointer))throw new Error("Java.synchronized: the first argument `obj` must be either a pointer or a Java instance");let o=this.vm.getEnv();ie("VM::MonitorEnter",o.monitorEnter(r));try{n()}finally{o.monitorExit(r)}}enumerateLoadedClasses(e){this._checkAvailable();let{flavor:n}=this.api;n==="jvm"?this._enumerateLoadedClassesJvm(e):n==="art"?this._enumerateLoadedClassesArt(e):this._enumerateLoadedClassesDalvik(e)}enumerateLoadedClassesSync(){let e=[];return this.enumerateLoadedClasses({onMatch(n){e.push(n)},onComplete(){}}),e}enumerateClassLoaders(e){this._checkAvailable();let{flavor:n}=this.api;if(n==="jvm")this._enumerateClassLoadersJvm(e);else if(n==="art")this._enumerateClassLoadersArt(e);else throw new Error("Enumerating class loaders is not supported on Dalvik")}enumerateClassLoadersSync(){let e=[];return this.enumerateClassLoaders({onMatch(n){e.push(n)},onComplete(){}}),e}_enumerateLoadedClassesJvm(e){let{api:n,vm:r}=this,{jvmti:o}=n,s=r.getEnv(),i=Memory.alloc(md),l=Memory.alloc(ko);o.getLoadedClasses(i,l);let a=i.readS32(),c=l.readPointer(),d=[];for(let f=0;f!==a;f++)d.push(c.add(f*ko).readPointer());o.deallocate(c);try{for(let f of d){let p=s.getClassName(f);e.onMatch(p,f)}e.onComplete()}finally{d.forEach(f=>{s.deleteLocalRef(f)})}}_enumerateClassLoadersJvm(e){this.choose("java.lang.ClassLoader",e)}_enumerateLoadedClassesArt(e){let{vm:n,api:r}=this,o=n.getEnv(),s=r["art::JavaVMExt::AddGlobalRef"],{vm:i}=r;_e(n,o,l=>{let a=Tn(c=>{let d=s(i,l,c);try{let f=o.getClassName(d);e.onMatch(f,d)}finally{o.deleteGlobalRef(d)}return!0});r["art::ClassLinker::VisitClasses"](r.artClassLinker.address,a)}),e.onComplete()}_enumerateClassLoadersArt(e){let{classFactory:n,vm:r,api:o}=this,s=r.getEnv(),i=o["art::ClassLinker::VisitClassLoaders"];if(i===void 0)throw new Error("This API is only available on Android >= 7.0");let l=n.use("java.lang.ClassLoader"),a=[],c=o["art::JavaVMExt::AddGlobalRef"],{vm:d}=o;_e(r,s,f=>{let p=Ln(u=>(a.push(c(d,f,u)),!0));In(()=>{i(o.artClassLinker.address,p)})});try{a.forEach(f=>{let p=n.cast(f,l);e.onMatch(p)})}finally{a.forEach(f=>{s.deleteGlobalRef(f)})}e.onComplete()}_enumerateLoadedClassesDalvik(e){let{api:n}=this,r=ptr("0xcbcacccd"),o=172,s=8,l=n.gDvm.add(o).readPointer(),a=l.readS32(),d=l.add(12).readPointer(),f=a*s;for(let p=0;p<f;p+=s){let _=d.add(p).add(4).readPointer();if(_.isNull()||_.equals(r))continue;let m=_.add(24).readPointer().readUtf8String();if(m.startsWith("L")){let g=m.substring(1,m.length-1).replace(/\//g,".");e.onMatch(g)}}e.onComplete()}enumerateMethods(e){let{classFactory:n}=this,r=this.vm.getEnv(),o=n.use("java.lang.ClassLoader");return xe.enumerateMethods(e,this.api,r).map(s=>{let i=s.loader;return s.loader=i!==null?n.wrap(i,o,r):null,s})}scheduleOnMainThread(e){this.performNow(()=>{this._pendingMainOps.push(e);let{_wakeupHandler:n}=this;if(n===null){let{classFactory:r}=this,o=r.use("android.os.Handler"),s=r.use("android.os.Looper");n=o.$new(s.getMainLooper()),this._wakeupHandler=n}this._pollListener===null&&(this._pollListener=Interceptor.attach(Process.getModuleByName("libc.so").getExportByName("epoll_wait"),this._makePollHook()),Interceptor.flush()),n.sendEmptyMessage(1)})}_makePollHook(){let e=Process.id,{_pendingMainOps:n}=this;return function(){if(this.threadId!==e)return;let r;for(;(r=n.shift())!==void 0;)try{r()}catch(o){Script.nextTick(()=>{throw o})}}}perform(e){if(this._checkAvailable(),!this._isAppProcess()||this.classFactory.loader!==null)try{this.vm.perform(e)}catch(n){Script.nextTick(()=>{throw n})}else this._pendingVmOps.push(e),this._pendingVmOps.length===1&&this._performPendingVmOpsWhenReady()}performNow(e){return this._checkAvailable(),this.vm.perform(()=>{let{classFactory:n}=this;if(this._isAppProcess()&&n.loader===null){let o=n.use("android.app.ActivityThread").currentApplication();o!==null&&No(n,o)}return e()})}_performPendingVmOpsWhenReady(){this.vm.perform(()=>{let{classFactory:e}=this,n=e.use("android.app.ActivityThread"),r=n.currentApplication();if(r!==null){No(e,r),this._performPendingVmOps();return}let o=this,s=!1,i="early",l=n.handleBindApplication;l.implementation=function(d){if(d.instrumentationName.value!==null){i="late";let p=e.use("android.app.LoadedApk").makeApplication;p.implementation=function(u,_){return s||(s=!0,Ao(e,this),o._performPendingVmOps()),p.apply(this,arguments)}}l.apply(this,arguments)};let c=n.getPackageInfo.overloads.map(d=>[d.argumentTypes.length,d]).sort(([d],[f])=>f-d).map(([d,f])=>f)[0];c.implementation=function(...d){let f=c.call(this,...d);return!s&&i==="early"&&(s=!0,Ao(e,f),o._performPendingVmOps()),f}})}_performPendingVmOps(){let{vm:e,_pendingVmOps:n}=this,r;for(;(r=n.shift())!==void 0;)try{e.perform(r)}catch(o){Script.nextTick(()=>{throw o})}}use(e,n){return this.classFactory.use(e,n)}openClassFile(e){return this.classFactory.openClassFile(e)}choose(e,n){this.classFactory.choose(e,n)}retain(e){return this.classFactory.retain(e)}cast(e,n){return this.classFactory.cast(e,n)}array(e,n){return this.classFactory.array(e,n)}backtrace(e){return wn(this.vm,e)}isMainThread(){let e=this.classFactory.use("android.os.Looper"),n=e.getMainLooper(),r=e.myLooper();return r===null?!1:n.$isSameObject(r)}registerClass(e){return this.classFactory.registerClass(e)}deoptimizeEverything(){let{vm:e}=this;return Mn(e,e.getEnv())}deoptimizeBootImage(){let{vm:e}=this;return jn(e,e.getEnv())}deoptimizeMethod(e){let{vm:n}=this;return An(n,n.getEnv(),e)}_checkAvailable(){if(!this.available)throw new Error("Java API not available")}_isAppProcess(){let e=this._cachedIsAppProcess;if(e===null){if(this.api.flavor==="jvm")return e=!1,this._cachedIsAppProcess=e,e;let n=new NativeFunction(Module.getGlobalExportByName("readlink"),"pointer",["pointer","pointer","pointer"],{exceptions:"propagate"}),r=Memory.allocUtf8String("/proc/self/exe"),o=1024,s=Memory.alloc(o),i=n(r,s,ptr(o)).toInt32();if(i!==-1){let l=s.readUtf8String(i);e=/^\/system\/bin\/app_process/.test(l)}else e=!0;this._cachedIsAppProcess=e}return e}};function No(t,e){let n=t.use("android.os.Process");t.loader=e.getClassLoader(),n.myUid()===n.SYSTEM_UID.value?(t.cacheDir="/data/system",t.codeCacheDir="/data/dalvik-cache"):"getCodeCacheDir"in e?(t.cacheDir=e.getCacheDir().getCanonicalPath(),t.codeCacheDir=e.getCodeCacheDir().getCanonicalPath()):(t.cacheDir=e.getFilesDir().getCanonicalPath(),t.codeCacheDir=e.getCacheDir().getCanonicalPath())}function Ao(t,e){let n=t.use("java.io.File");t.loader=e.getClassLoader();let r=n.$new(e.getDataDir()).getCanonicalPath();t.cacheDir=r,t.codeCacheDir=r+"/cache"}var nr=new tr;Script.bindWeak(nr,()=>{nr._dispose()});var jt=nr;globalThis.Java=jt;globalThis.__fridaJavaBridge=jt;try{let t=!!jt.available;globalThis.console.log("[FridaGadget][prelude] frida-java-bridge loaded, Java.available="+t)}catch(t){globalThis.console.warn("[FridaGadget][prelude] frida-java-bridge probe threw: "+String(t))}})();
