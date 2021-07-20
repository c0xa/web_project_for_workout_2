class RowOffice extends Component {
    constructor(column, part, countRow) {
        super('div', column, 'column__row row');
        
        let worksplaces = [];
        for (let i = 0; i < countRow; i++) {
            let elements = new Component("div", "", "row__workplace workplace", [["id", "p" + part + "_r" + column + "_n" + (+i + 1)]])
            let elementText = new Component("span", i + 1, "workplace__text");

            let place = new Workplace();
            elements.element.append(place.element, elementText.element)
            worksplaces.push(elements.element);
        }
        worksplaces.forEach(place => this.element.append(place))
        return this;
    }
}