class Component {
    constructor (tag, classes = "", props = {}) {
        this.element = document.createElement(tag);
        this.element.className = classes;
    }

    setState(state) {
        this.state = {...this.state, ...state};
        this.render();
    }

    appendTo(parent) {
        parent.append(this.element);
    }

    render() {
        this.parent.innerHTML = "";
        this.parent.append(this.element);
    }
}
