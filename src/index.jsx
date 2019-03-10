// let template = <div>
//     <p name='lemon'>Hello World</p>
// </div>;
// import React from './react.js';
// import ReactDOM from './react-dom.js'
import React from 'react';
import ReactDOM from 'react-dom';
let data = {
    'title': "这是一个简易的框架",
    'testClick': () => {
        console.log('test')
    }
}
let template = <div name="lemon">
    {data.title}
    <p onClick={data.testClick} skill="ps">Lemon</p>
    <p age="18">Eno</p>
</div>
console.log(template);
// JSX -> createElement()结构 -> 对象 -> 真实DOM

ReactDOM.render(
    template
    , document.querySelector('#demo'));


