class CardInformation extends Component {
    constructor(login, userName) {
        super("div", "", "cardInformation");

        let spanUserName = new Component("span", userName, "cardInformation__username");

        let formForExit = new Component("form", "", "cardInformation__form", [["name", "forExit"]])


        let btnExitElement = new Component("input", "", "cardInformation__btn-exit", [["type", "button"], ["value", "Log out"], ["name", "btnExit"]])

        formForExit.element.append(btnExitElement.element);

        this.element.append(spanUserName.element, formForExit.element);
        return this;
        

    }

    checkExitBtn() {
        const formBtnExit = document.forms.forExit;
        const FormAuthentication = document.forms["form-authentication"];
        const content = document.querySelector(".content");
        const btnExit = formBtnExit.elements.btnExit;
        btnExit.addEventListener('click', function () {
            Animator.show(FormAuthentication, 400);
            Animator.hide(content, 0);
        })
    }
}