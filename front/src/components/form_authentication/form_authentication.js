class FormAuthentication extends Component {
    constructor() {
        super('form', "", "form-authentication", [["name", "form-authentication"], ["action", "#"]]);

        const inputLogin = new Component("input", "", "form-authentication__input-login", [["type", "text"], ["placeholder", "login"],
            ["name", "login"]])

        const inputPassword = new Component("input", " ", "form-authentication__input-password", [["type", "password"], ["placeholder", "password"],
            ["name", "password"]])

        const divError = new Component("div", "Wrong password or login", "form-authentication__block-error", [["hidden", "true"]]);

        const btn = new Component("button", "Log in", "form-authentication__btn", [["type", "sumbit"], ["placeholder", "enter"]])

        this.element.append(inputLogin.element, inputPassword.element, divError.element, btn.element);
        return this;
    }

    showErrorDomElement() {
        Animator.show(document.querySelector('.form-authentication__block-error'), 300);
    }

    hiddenErrorDomElement() {
        Animator.hide(document.querySelector('.form-authentication__block-error'), 300);
    }
}