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

    checkWorkplace(store, username, visitedWorkspace) {
        let office = document.querySelector('.office');

        office.onclick = function(event) {
            let target = event.target;
            if (target.classList.contains("workplace")) {
                let index = 0;
                visitedWorkspace.forEach(element => {   
                    if (element.getAttribute("username") === username) {
                        this.selectedTd = element;
                        visitedWorkspace.splice(index, 1);
                    }
                    index++;
                })
                if (this.selectedTd && this.selectedTd.hasAttribute("visit") && this.selectedTd.getAttribute("username") === username) {
                    this.selectedTd.removeAttribute("visit");
                    this.selectedTd.removeAttribute("username");
                }
                this.selectedTd = target;
                target.setAttribute("visit", true);
                target.setAttribute("username", username);
                visitedWorkspace.push(target);
                let d = new Date();
                store.dispatch({
                    type: 'ADD',
                    payload: {
                        action: "come",
                        workplace: target.getAttribute("id"), 
                        username: username,
                        data: d}
                });
                
            }
        };
    }
}