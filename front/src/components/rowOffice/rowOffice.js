class rowOffice extends Component {
    constructor(row) {
        super('div', row, 'column__row row');
        
        let workspace = [];
        for (let i = 0; i < 6; i++) {
            let row = new workplace(i + 1);
            workspace.push(row.element);
        }
        workspace.forEach(row => this.element.append(row))
        return this;
    }
}