class CardInformation extends Component {
    constructor(login, userName) {
        super("div", "", "cardInformation");

        let spanUserName = new Component("span", userName, "cardInformation__username")

        let d = new Date();

        // let spanDate = new Component("span", d, "cardInformation__date")

        this.element.append(spanUserName.element);
        return this;
    }
}