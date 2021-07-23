class User {
    constructor(login, password, firstName, secondName, workplace = "", ill = false, dataIll = "", risk = false, visitedWorkspace = []) {
        this.login = login;
        this.password = password;
        this.firstName = firstName;
        this.secondName = secondName;
        this.workplace = workplace;
        this.ill = ill;
        this.dataIll = dataIll;
        this.risk = risk;
        this.visitedWorkspace = visitedWorkspace;
    }

    editeLogin(login) {
        this.login = login;
    }

    editePassword(password) {
        this.password = password;
    }

    addVisitedWorkspace(data, workspace, action) {
        this.visitedWorkspace.push(new VisitedWorkspace(data, workspace, action))
    }

    checkRisk(table) {
        this.visitedWorkspace.forEach(part => {
            const tr = new Component("tr", "", "table-analytic__tr");

            tr.element.append(new Component("td", part.date, "table-analytic__td").element,
                new Component("td", part.time, "table-analytic__td").element, 
                new Component("td", part.workspace, "table-analytic__td").element, 
                new Component("td", part.action, "table-analytic__td").element)
            table.element.append(tr.element)
        })
    }

    setIll(dataIll) {
        this.ill = true;
        this.dataIll = dataIll;
    }

    getIll() {
        return this.ill;
    }

    getDataIll() {
        return this.dataIll
    }

    getPassword() {
        return this.password;
    }

    setWorkplace(workplace) {
        this.workplace = workplace;
    }

    getPassword() {
        return this.password;
    }

    getLogin() {
        return this.login;
    }

    getWorkplace() {
        return this.workplace;
    }

    getFullName() {
        return (this.getFirstName() + " " + this.getSecondName());
    }

    getFirstName() {
        return this.firstName;
    }

    getSecondName() {
        return this.secondName;
    }
}