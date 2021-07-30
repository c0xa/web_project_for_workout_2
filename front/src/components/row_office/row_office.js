class RowOffice extends Component {
    constructor(column, part, countRow) {
        super('div', column, 'column__row row');

        for (let i = 0; i < countRow; i++) {
            const elements = new Component("div", "", "row__workplace workplace", [["id", "p" + part + "_r" + column + "_n" + (+i + 1)]])
            const elementText = new Component("span", i + 1, "workplace__text");

            const place = new Component('a', '', 'workplace__block', [["href", "#"]]);
            elements.element.append(place.element, elementText.element)
            this.element.appendChild(elements.element);
        }
        return this;
    }
}