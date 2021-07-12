class Office extends Component {
    constructor() {
        if (typeof Office.instance === 'object') {
            return Office.instance;
        }
        super('div', {classes: 'office'});
        Office.instance = this;
        return this;
    }

    _addRow(nameRow) {
        let 
    }

}