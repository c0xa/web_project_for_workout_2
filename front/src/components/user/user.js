class User {
    constructor(login, password, firstName, secondName) {
        this.login = login;
        this.password = password;
        this.firstName = firstName;
        this.secondName = secondName;
    }

    editeLogin(login) {
        this.login = login;
    }

    editePassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    getLogin() {
        return this.login;
    }


    getFirstName() {
        return this.firstName;
    }

    getSecondName() {
        return this.secondName;
    }
}