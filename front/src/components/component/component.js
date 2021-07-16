class Component {
    constructor (tag, text, classes, props = []) {
        this.element = document.createElement(tag);
        this.element.className = classes;
        this.element.innerHTML = text;
        for (let element of props) {
            this.element.setAttribute(element[0], element[1]);
        }

    }

    /**
     * Добавление элемента this переданному родителю
     * @param {HTMLElement} parent элемент
     */
    appendTo(parent) {
        parent.append(this.element);
    }

    render() {
        this.parent.innerHTML = "";
        this.parent.append(this.element);
    }
}
