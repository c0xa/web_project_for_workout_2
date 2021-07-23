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
                userName = element.getFullName();
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

    addedWorkplace(username, workplace) {
        this.accountsUsers.forEach(element => {
            if (username === element.getFullName()) {
                element.setWorkplace(workplace);
                element.addVisitedWorkspace(new Date().toString(), element.getWorkplace(), "come");
            }
        });
        this.serialize();
    }


    checkAvilableOffice(username) {
        this.accountsUsers.forEach(element => {
            if (username === element.getFullName() && element.getWorkplace() !== "" || element.getIll()) {
                document.querySelector('.office').setAttribute("availability", true);
            }
            if (element.getWorkplace() !== "") {
                const workplace = document.getElementById(element.getWorkplace());
                workplace.setAttribute("visit", true);
                workplace.setAttribute("username",  element.getFullName());
            }
        });
    }

    checkBtnLeave(username) {
        this.accountsUsers.forEach(element => {
            if (username === element.getFullName()) {
                const workplace = document.getElementById(element.getWorkplace())
                workplace.removeAttribute("visit");
                workplace.removeAttribute("username");
                document.querySelector('.office').removeAttribute("availability");
                element.addVisitedWorkspace(new Date().toString(), element.getWorkplace(), "leave");
                element.setWorkplace("");
            }
        });
        this.serialize();
    }

    checkBtnIll(username, dataIll) {
        this.accountsUsers.forEach(element => {
            if (username === element.getFullName()) {
                element.setIll(dataIll);
                document.querySelector('.office').setAttribute("availability", true);
                if (element.getWorkplace() !== "")
                    this.checkBtnLeave(username);
            }
        });
        this.serialize();
    }

    analyticTable(username, table) {
        this.accountsUsers.forEach(element => {
            if (username === element.getFullName()) {
                element.checkRisk(table)
            }
        })
    }
}