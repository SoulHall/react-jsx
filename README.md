# jsx
jsx的本质其实是将HTML结构转化成对象

jsx不是js，单最后都要转化成js，这其中需要用到babel做转化

babel在经典写法里面是需要引入`babel.js`，如果是用模块化，webpack的`babel-loader`,它的两个功能是将`jsx`转成`js` `es6+` 转成 `es5`,兼容更多浏览器
# Proxy

跟`Object.defineProperty`不同，以前这个`Object.defineProperty`是有缺陷的，它不能劫持数组，需要遍历每个元素去劫持，`Proxy`是他的升级版
```js
let proxyData = new Proxy({}, {
    set(target,props,value,old) {
        console.log(target,props,value,old)
        target[props] = value;
        return true;
    },
    get(target,props,old) {
        console.log(target,props,old)
        return target[props]
    }
});
```
需要`new Proxy()`，它接受两个参数(类型为对象)，第一个参数为被劫持的对象，第二个参数为一个存放着`set和get`的对象，`let proxyData = new Proxy()`，而`proxyData`其实就是经过原对象被劫持后的对象,所以修改或者获取`proxyData`这个对象，就可以出发对应`set和get`