class FormAuthentication extends Component {
    constructor() {
        super('form', "", "form-authentication", [["name", "form-authentication"], ["action", "#"]]);

        let inputLogin = new Component("input", "", "form-authentication__input-login", [["type", "text"], ["placeholder", "login"],
                                                                        ["name", "login"]])

        let inputPassword = new Component("input", " ", "form-authentication__input-password", [["type", "password"], ["placeholder", "password"],
            ["name", "password"]])

        let btn = new Component("button", "Log in", "form-authentication__btn", [["type", "sumbit"], ["placeholder", "enter"]])

        this.element.append(inputLogin.element, inputPassword.element, btn.element);
        return this;
    }
}