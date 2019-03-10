function _bindAttrs(vm) {
    const {
        _attrs,
        _elem
    } = vm;
    // 遍历
    Object.keys(_attrs).forEach(attr => {
        _elem.setAttribute(attr, _attrs[attr]);
    });
}

function _addChildrens(vm) {
    const {
        _childrens,
        _elem,
    } = vm;
    _childrens.forEach(children => {
        let child;
        switch (typeof children) {
            case 'string':
                child = document.createTextNode('');
                child.textContent = children;
                break;
            default:
                child = children;
        }
        _elem.appendChild(child);
    });
}

function createElement(type, props, ...childrens) {
    return new Proxy({}, {
        get(target, tagName) {
            return (attrs = {}, ...childrens) => {
                // 创建节点
                var _elem = document.createElement(tagName);
                var _attrs = attrs;
                var _childrens = childrens;
                // 处理属性值
                _bindAttrs({
                    _elem,
                    _attrs
                });
                // 处理文本值
                _addChildrens({
                    _elem,
                    _childrens
                });

                return _elem;
            };
        }
    })[type](props, ...childrens);
}

export default {
    createElement,
}