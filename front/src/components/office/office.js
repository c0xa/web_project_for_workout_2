class Office extends Component {
    constructor(text) {
        if (typeof Office.instance === 'object') {
            return Office.instance;
        }

        super('div', text, 'office');
        // Office.instance = this;
        return this;
    }

}