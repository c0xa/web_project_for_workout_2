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

    toString() {
        let userName = "";
        const element = this.accountsUsers[this.index];
        userName = element.getFullName();
        return userName;
    }

    privilegeOption() {
        //add user
        //check risk
        //check all analutic
    }


    toEqual(login, password) {
        let flag = false;
        let index = 0;

        this.accountsUsers.forEach(element => {
            if (password === element.getPassword() && login === element.getLogin()) {
                flag = true;
                this.index = index;
            }
            index++;
        });
        return flag;
    }

    addedWorkplace(workplace) {
        const element = this.accountsUsers[this.index];
        element.setWorkplace(workplace);
        element.addVisitedWorkspace(new Date(), element.getWorkplace(), "come");
        this.serialize();
    }


    checkAvilableOffice() {
        const element = this.accountsUsers[this.index];
        if (element.getWorkplace() !== "" || element.getIll()) {
            document.querySelector('.office').setAttribute("availability", true);
        }
        if (element.getWorkplace() !== "") {
            const workplace = document.getElementById(element.getWorkplace());
            workplace.setAttribute("visit", true);
            workplace.setAttribute("username",  element.getFullName());
        }
    }

    checkBtnLeave() {
        const element = this.accountsUsers[this.index];
        const workplace = document.getElementById(element.getWorkplace())

        workplace.removeAttribute("visit");
        workplace.removeAttribute("username");
        document.querySelector('.office').removeAttribute("availability");
        element.addVisitedWorkspace(new Date(), element.getWorkplace(), "leave");
        element.setWorkplace("");
        this.serialize();
    }

    checkBtnIll(username, dataIll) {
        const element = this.accountsUsers[this.index];
        element.setIll(dataIll);
        document.querySelector('.office').setAttribute("availability", true);
        if (element.getWorkplace() !== "")
            this.checkBtnLeave(username);
        this.serialize();
    }

    analyticTable(table) {
        const element = this.accountsUsers[this.index];
        element.checkRisk(table)
    }
}