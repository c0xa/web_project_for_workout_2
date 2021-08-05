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

    checkWorkplace(userAccount) {
        const office = document.querySelector('.office');

        office.addEventListener("click", event => {
            const target = event.target;
            event.stopImmediatePropagation()
            if (target.classList.contains("workplace") && !target.getAttribute("visit")) {
                office.setAttribute("availability", true);
                target.setAttribute("visit", true);
                userAccount.addedWorkplace(target.getAttribute("id"), target);
            }
        });
    }
}