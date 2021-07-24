class FormRegistration extends Component {
    constructor() {
        super('form', "", "form-registration", [["name", "form-registration"]]);

        const inputLogin = new Component("input", "", "form-registration__input-login", [["type", "text"], ["placeholder", "login"],
                                                                        ["name", "login"], ["minlength", "4"]])

        const inputPassword = new Component("input", " ", "form-registration__input-password", [["type", "text"], ["placeholder", "password"],
            ["name", "password"], ["minlength", "4"]])

        const inputFirstName = new Component("input", "", "form-registration__input-first-name", [["type", "text"], ["placeholder", "first name"],
        ["name", "firstName"]])

        const inputSecondName = new Component("input", " ", "form-registration__input-second-name", [["type", "text"], ["placeholder", "second name"],
        ["name", "secondName"]])

        const divError = new Component("div", "Wrong password or login", "form-authentication__block-error", [["hidden", "true"]]);

        const btn = new Component("button", "Add", "form-registration__btn", [["type", "button"], ["placeholder", "enter"], ["name", "btnEnter"]])

        this.element.append(inputLogin.element, inputPassword.element, divError.element, inputFirstName.element, inputSecondName.element, btn.element);
        return this;
    }

    checkBtn(accountsUsers) {
        const formRegistration = document.forms["form-registration"];
        const login = formRegistration.elements.login;
        const password = formRegistration.elements.password;
        const firstName = formRegistration.elements.firstName;
        const secondName = formRegistration.elements.secondName;
        const btn = formRegistration.elements.btnEnter;
        
        btn.addEventListener('click', function () {
            if (accountsUsers.toCheckLogin(login.value)) {
                accountsUsers.addUser(login.value, password.value, firstName.value, secondName.value);
            }
        })
    }

    showErrorDomElement() {
        Animator.show(document.querySelector('.form-registration__block-error'), 300);
    }

    hiddenErrorDomElement() {
        Animator.hide(document.querySelector('.form-registration__block-error'), 300);
    }
}