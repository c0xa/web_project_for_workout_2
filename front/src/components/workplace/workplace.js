class Workplace extends Component {
    constructor(number, part, row) {
        super('a', '', 'workplace__block', [["href", "#"]]);
        this.element.setAttribute("id", "p" + part + "_r" + row + "_n" + number);
        return this;
    }

}