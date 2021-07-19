class Accounts {
    constructor() {
        this.accountsUsers = [];
        this.accountsUsers.push(new User("login", "12345", "Petrov", "Petr"));
        this.accountsUsers.push(new User("admin", "admin", "Ivanov", "Ivan"));
        this.accountsUsers.push(new User("roll", "12345", "Pop", "It"));
    }

    toString(login) {
        let userName = "";
        this.accountsUsers.forEach(element => {
            if (login === element.getLogin())
                userName = element.getFirstName() + " " + element.getSecondName();
        });
        return userName;
    }

    toEqual(login, password) {
        let flag = false;

        this.accountsUsers.forEach(element => {
            if (password === element.getPassword() && login === element.getLogin())
                flag = true;
        });
        return flag;
    }
}