class CollumnOffice extends Component {
    constructor(part, countColumn, countRow) {
        super('div', "", 'office__column column');

        for (let i = 0; i < countColumn; i++) {
            let row = new RowOffice(i + 1, part, countRow);
            this.element.append(row.element);
        }
        return this;
    }
}