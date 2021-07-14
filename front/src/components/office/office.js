class Office extends Component {
    constructor(column) {
        super('div', "", 'office');

        let office = [];
        for (let i = 0; i < column; i++) {
            let collumn = new collumnOffice(i + 1);
            office.push(collumn.element);
        }
        office.forEach(collumn => this.element.append(collumn))
        return this;
    }
}