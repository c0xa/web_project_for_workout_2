class Office extends Component {
    constructor(countPart, countColumn, countRow) {
        super('div', "", 'office');

        for (let i = 0; i < countPart; i++) {
            let collumn = new CollumnOffice(i + 1, countColumn, countRow);
            this.element.append(collumn.element)
        }

        this.selectedTd = null;
        return this;
    }

    checkWorkplace(username, userAccount) {
        const office = document.querySelector('.office');

        office.onclick = function (event) {
            const target = event.target;
            if (target.classList.contains("workplace") && !target.getAttribute("visit")) {
                office.setAttribute("availability", true);
                target.setAttribute("visit", true);
                target.setAttribute("username", username);
                userAccount.addedWorkplace(target.getAttribute("id"));
            }
        };
    }
}