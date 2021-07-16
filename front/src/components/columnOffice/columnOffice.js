class CollumnOffice extends Component {
    constructor(part, countColumn, countRow) {
        super('div', "", 'office__column column');
        
        let rows = [];
        for (let i = 0; i < countColumn; i++) {
            let row = new RowOffice(i + 1, part, countRow);
            rows.push(row.element);
        }
        rows.forEach(row => this.element.append(row))
        return this;
    }
}