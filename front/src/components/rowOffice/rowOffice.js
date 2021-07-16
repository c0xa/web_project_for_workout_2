class RowOffice extends Component {
    constructor(column, part, countRow) {
        super('div', column, 'column__row row');
        
        let worksplaces = [];
        for (let i = 0; i < countRow; i++) {

            let element = document.createElement("div");
            element.className = "row__workplace workplace";
        
            let elementText = document.createElement("span");
            elementText.className = "workplace__text";
            elementText.innerText = i + 1;

            let place = new Workplace(i + 1, part, column);
            element.append(place.element, elementText)
            worksplaces.push(element);
        }
        worksplaces.forEach(place => this.element.append(place))
        return this;
    }
}