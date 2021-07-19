class FormAuthentication extends Component {
    constructor() {
        super('form', "", "form-authentication", [["name", "form-authentication"]]);

        let inputLogin = new Input("form-authentication__input-login", [["type", "text"], ["placeholder", "login"],
                                                                        ["name", "login"]])

        let inputPassword = new Input("form-authentication__input-password", [["type", "text"], ["placeholder", "password"],
            ["name", "password"]])

        let btn = new Component("button", "Log in", "form-authentication__btn", [["type", "button"], ["placeholder", "enter"]])

        this.element.append(inputLogin.element, inputPassword.element, btn.element);
        return this;
    }
}