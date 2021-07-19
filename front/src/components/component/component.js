class Component {
    constructor (tag, text, classes, props = []) {
        this.element = document.createElement(tag);
        this.element.className = classes;
        this.element.innerHTML = text;
        for (const [ name, value ] of props) {
            this.element.setAttribute(name, value)
        }
    }

    /**
     * Добавление элемента this переданному родителю
     * @param {HTMLElement} parent элемент
     */
    setParent(parent) {
        this.parent = parent;
    }

    render() {
        this.parent.innerHTML = "";
        this.parent.append(this.element);
    }
}
