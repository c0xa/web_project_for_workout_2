class Input extends Component {
    constructor(classList, props) {
        super("input", "", classList);

        for (let element of props) {
            this.element.setAttribute(element[0], element[1]);
        }
    }
}