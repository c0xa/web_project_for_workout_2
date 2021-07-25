class Accounts {
    constructor() {
        this.accountsUsers = new Map();
        this.deserialize();
        if (this.accountsUsers.size === 0) {
            this.accountsUsers.set("admin", new User("admin", "admin", "Ivanov", "Ivan"));
            this.serialize();
        }
    }

    addUser(login, password, firstName, secondName) {
        this.accountsUsers.set(login, new User(login, password, firstName, secondName));
        this.serialize();
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
        const element =  this.accountsUsers.get(this.login);
        userName = element.getFullName();
        return userName;
    }

    allAnalytic(user) {
            const table = new Component("table", " ", "analytic__table-analytic table-analytic");
            const caption = new Component("caption", user.getFullName(), "table-analytic__caption");
            const tr = new Component("tr", "", "table-analytic__tr");
            tr.element.append(new Component("td", "data", "table-analytic__td").element, new Component("td", "time", "table-analytic__td").element, new Component("td", "workspace", "table-analytic__td").element, new Component("td", "action", "table-analytic__td").element)
            table.element.append(caption.element, tr.element);
            user.checkRisk(table);
            document.querySelector(".all-analytic").append(table.element);
    }

    checkIll(user) {
        const table = new Component("table", " ", "analytic__table-analytic table-analytic");
        const caption = new Component("caption", user.getFullName(), "table-analytic__caption");
        const tr = new Component("tr", "", "table-analytic__tr");
        tr.element.append(new Component("td", "login", "table-analytic__td").element, new Component("td", "full name", "table-analytic__td").element, new Component("td", "ill?", "table-analytic__td").element, new Component("td", "risk?", "table-analytic__td").element, new Component("td", "data ill", "table-analytic__td").element)
        table.element.append(caption.element, tr.element);
        user.checkIll(table);
        document.querySelector(".risk-analytic").append(table.element);
    }

    clearData(user) {
        user.deleteData();
        this.serialize();
    }

    switchRisk(user) {
        const risk = new Component("div", "", "switch-risk___item-risk-" + user.getLogin());

        const span = new Component("span", user.getFullName(), "item-risk__name");
        const offBtn = new Component("input", "On", "item-risk-infected", [["type", "radio"], ["placeholder", "On"],
            ["name", "risk-" + user.getLogin()], ["id", "infected"]]);

        const onBtn = new Component("input", "not infected", "item-risk-not-infected", [["type", "radio"], ["placeholder", "Off"],
        ["name", "risk-" + user.getLogin()], ["id", "not infected"]]);

        const spanInfected = new Component("label", "infected", "item-risk__name-infected", [["for", "infected"]]);
        const spanNotInfected = new Component("label", "not infected", "item-risk__name-not-infected", [["for", "not infected"]]);

        risk.element.append(span.element, offBtn.element, spanInfected.element, onBtn.element, spanNotInfected.element)
        document.querySelector(".switch-risk").append(risk.element);
        const el = document.querySelector(".switch-risk___item-risk-" + user.getLogin())
        if (user.getIll() || user.getRisk()) {
            el.querySelector(".item-risk-infected").checked = true;
        } else {
            el.querySelector(".item-risk-not-infected").checked = true;
        }
        el.querySelector(".item-risk-not-infected").addEventListener("click", el => {
            user.setRisk(false);
            document.querySelector('.office').removeAttribute("availability");
            this.serialize();
        })

        el.querySelector(".item-risk-infected").addEventListener("click", el => {
            document.querySelector('.office').setAttribute("availability", true);
            user.setRisk(true);
            this.serialize();
        })
    }

    privilegeOption() {
        if (this.privilegeOptionFlag) {
            const adminOption = document.querySelector(".admin-option");
            adminOption.innerHTML = "";
            //icons update
            const update = new Component("input", "", "admin-option__btn-update", [["type", "button"], ["name", "update"]]);
            adminOption.append(update.element);
            document.querySelector(".admin-option__btn-update").addEventListener('click', element => {
                this.privilegeOption();
                console.log("update")
            });
           
            //add user
            const formRegistration = new FormRegistration()
            adminOption.append(formRegistration.element)
            formRegistration.checkBtn(this);
            Animator.show(adminOption, 400);

            //check all analytic
            const titleAnalytic = new Component("span", "Visits", "all-analytic__title admin-option__title")
            const analytic = new Component("div", "", "admin-option__all-analytic all-analytic");
            adminOption.append(analytic.element);
            document.querySelector(".all-analytic").append(titleAnalytic.element);
            this.accountsUsers.forEach(element => { this.allAnalytic(element) })

            //check risk
            const titleRisk = new Component("span", "Risk and ill corona", "risk-analytic__title admin-option__title")
            const risk = new Component("div", "", "admin-option__risk-analytic risk-analytic");
            adminOption.append(risk.element);
            document.querySelector(".risk-analytic").append(titleRisk.element);
            this.accountsUsers.forEach(element => { this.checkIll(element) })

             //clear VisitedWorkspace
            const titleClearBlock = new Component("span", "Clear data visits", "admin-option__title admin-option__title")
            const blockClearBlock = new Component("div", "Delete old data", "admin-option__clear-data-block");
            const clearData = new Component("input", "Clear data", "admin-option__clear-data clear-data", [["type", "button"], ["placeholder", "Clear data"],
            ["name", "clear data"]]);
            adminOption.append(blockClearBlock.element);
            document.querySelector(".admin-option__clear-data-block").append(titleClearBlock.element, clearData.element);
            document.querySelector(".clear-data").addEventListener('click', element => {
                this.accountsUsers.forEach(element => { this.clearData(element) })
            })

            //table risk yes no
            const switchTitle = new Component("span", "Switch risk", "switch-risk__title admin-option__title")
            const switchRisk = new Component("div", "", "admin-option__switch-risk switch-risk");
            adminOption.append(switchRisk.element);
            document.querySelector(".switch-risk").append(switchTitle.element);
            this.accountsUsers.forEach(element => { this.switchRisk(element) })

            let collection = adminOption.children;

            new Window(document.querySelector(".admin-option__all-analytic"));
            for (let elem of collection) {
                if (!elem.classList.contains("admin-option__btn-update")) {
                    new Window(elem);
                    console.log(elem)
                }
            }
        }

    }

    toCheckLogin(login) {
        return (this.accountsUsers.get(login) === undefined)
    }


    toEqual(login, password) {
        const user = this.accountsUsers.get(login);
        this.privilegeOptionFlag = false;
        if (user) {
            if (user.getPassword() === password) {
                this.login = login;
                if (password === "admin" && login === "admin") { //сделано ради безопасности
                    this.privilegeOptionFlag = true;
                }
                return true;
            }
        }
        return false;

    }

    addedWorkplace(workplace) {
        const element = this.accountsUsers.get(this.login);
        element.setWorkplace(workplace);
        element.addVisitedWorkspace(new Date(), element.getWorkplace(), "come");
        this.serialize();
    }


    checkAvilableOffice() {
        const element = this.accountsUsers.get(this.login);
        if (element.getWorkplace() !== "" || element.getIll() || element.getRisk()) {
            document.querySelector('.office').setAttribute("availability", true);
        }
        if (element.getWorkplace() !== "") {
            const workplace = document.getElementById(element.getWorkplace());
            workplace.setAttribute("visit", true);
            workplace.setAttribute("username",  element.getFullName());
        }
        return this;
    }

    checkBtnLeave() {
        const element = this.accountsUsers.get(this.login);
        const workplace = document.getElementById(element.getWorkplace())
        if (workplace !== "") {
            workplace.removeAttribute("visit");
            workplace.removeAttribute("username");
            document.querySelector('.office').removeAttribute("availability");

            //для теста удаления new Date('2001-06-23T03:24:00')
            
            element.addVisitedWorkspace(new Date() , element.getWorkplace(), "leave");
            element.setWorkplace("");
            this.serialize();
        }
    }

    checkBtnIll(dataIll) {
        const element = this.accountsUsers.get(this.login);
        element.setIll(dataIll);
        document.querySelector('.office').setAttribute("availability", true);
        if (element.getWorkplace() !== "")
            this.checkBtnLeave();
        this.serialize();
    }

    analyticTable(table) {
        const element = this.accountsUsers.get(this.login);
        element.checkRisk(table)
    }
}