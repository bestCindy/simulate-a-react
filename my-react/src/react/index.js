import $ from "jquery";
import createReactUnit from "./unit.js";
import createElement from "./element.js";
import Component from "./component.js";

let React = {
    render,
    nextRootIndex: 0,
    createElement,
    Component
}
// element 有很多种可能 1.jsx语法-->虚拟DOM 2.对象 3.类
function render(element, container) {
    // 写一个工厂函数来创建对应的 react 元素
    // 通过这个工厂函数创建
    let createReactUnitInstance = createReactUnit(element);
    let markUp = createReactUnitInstance.getMarkUp(React.nextRootIndex);

    // 把元素放到容器中
    $(container).html(markUp);

    // 触发挂载完成的方法
    $(document).trigger("mounted");//所有组件都 ok 了

}

export default React