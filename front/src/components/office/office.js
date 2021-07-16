class Office extends Component {
    constructor(countPart, countColumn, countRow) {
        super('div', "", 'office');

        let office = [];
        for (let i = 0; i < countPart; i++) {
            let collumn = new CollumnOffice(i + 1, countColumn, countRow);
            office.push(collumn.element);
        }
        office.forEach(collumn => this.element.append(collumn))
        return this;
    }
}