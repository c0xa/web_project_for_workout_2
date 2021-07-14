class collumnOffice extends Component {
    constructor(row) {
        super('div', row, 'office__column column');
        
        let rows = [];
        for (let i = 0; i < 6; i++) {
            let row = new rowOffice(i + 1);
            rows.push(row.element);
        }
        rows.forEach(row => this.element.append(row))
        return this;
    }
}