class Component {
    constructor (tag, text, classes, atr = false, props = {}) {
        this.element = document.createElement(tag);
        this.element.className = classes;
        this.element.innerHTML = text;
        if (atr) {
            this.element.setAttribute("href", "#");
        }
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
