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

    addVisitedWorkspace(data, workspace, action) {
        this.visitedWorkspace.push(new VisitedWorkspace(data, workspace, action))
    }

    deleteData() {
        const currDate = new Date();
        const prevDate = new Date();

        let month = currDate.getMonth();
        month = (month === 0) ? 12 : month - 1; 

        prevDate.setMonth(month);

        console.log(currDate + " " + prevDate)
        // число милисекунд в месяце
        const millisecondsInMonth = 2592000000;
        if (this.visitedWorkspace) { 
            this.visitedWorkspace = this.visitedWorkspace.filter(element => {
                return prevDate < element.fullDate;

                })
        }
    }

    checkIll(table) {
        const tr = new Component("tr", "", "table-analytic__tr");
        tr.element.append(new Component("td", this.login, "table-analytic__td").element,
            new Component("td", this. getFullName(), "table-analytic__td").element, 
            new Component("td", this.ill, "table-analytic__td").element, 
            new Component("td", this.risk, "table-analytic__td").element, 
            new Component("td", this.dataIll, "table-analytic__td").element)
        table.element.append(tr.element)
    }

    checkRisk(table) {
        this.visitedWorkspace.forEach(part => {
            const tr = new Component("tr", "", "table-analytic__tr");
            let workspace = part.workspace.split("_");
            workspace[0] = workspace[0].replace('p', 'part ');
            workspace[1] = workspace[1].replace('r', 'row ');
            workspace[2] = workspace[2].replace('n', 'column ');
            workspace = workspace.join(" ");
            tr.element.append(new Component("td", part.date, "table-analytic__td").element,
                new Component("td", part.time, "table-analytic__td").element, 
                new Component("td", workspace, "table-analytic__td").element, 
                new Component("td", part.action, "table-analytic__td").element)
            table.element.append(tr.element)
        })
    }

    setIll(dataIll) {
        this.ill = true;
        this.dataIll = dataIll;
    }

    setRisk(risk) {
        this.risk = risk;
        this.ill = false;
        this.dataIll = "";
    }

    getIll() {
        return this.ill;
    }

    getRisk() {
        return this.risk;
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