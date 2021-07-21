class Accounts {
    constructor() {
        this.accountsUsers = [];
        this.deserialize();
        if (this.accountsUsers.length === 0) {
            this.accountsUsers.push(new User("login", "12345", "Petrov", "Petr"));
            this.accountsUsers.push(new User("admin", "admin", "Ivanov", "Ivan"));
            this.accountsUsers.push(new User("roll", "12345", "Pop", "It"));
            this.serialize();
        }
    }

    async serialize() {
        const serialize = new Serialize();
        serialize.serializePerson(this.accountsUsers)
    }

    async deserialize() {
        const deserialize = new Deserialize();
        this.accountsUsers = deserialize.deserializePerson(this.accountsUsers)
    }

    getAccountsUsers() {
        return this.accountsUsers;
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