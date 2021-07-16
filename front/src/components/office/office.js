class Office extends Component {
    constructor(countPart, countColumn, countRow) {
        super('div', "", 'office');

        let office = [];
        for (let i = 0; i < countPart; i++) {
            let collumn = new CollumnOffice(i + 1, countColumn, countRow);
            office.push(collumn.element);
        }
        office.forEach(collumn => this.element.append(collumn))

        this.selectedTd = null;
        return this;
    }

    checkWorkplace(store, username) {
        let office = document.querySelector('.office');

        office.onclick = function(event) {
            let target = event.target;
            if (target.classList.contains("workplace")) {
                if (this.selectedTd && this.selectedTd.hasAttribute("visit")) {
                    this.selectedTd.removeAttribute("visit");
                }
                this.selectedTd = target;
                target.setAttribute("visit", true);
                let d = new Date();
                store.dispatch({
                    type: 'ADD',
                    payload: [target.getAttribute("id"), username, d]
                });
            }
        };
    }
}