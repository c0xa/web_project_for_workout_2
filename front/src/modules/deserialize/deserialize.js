/** записывает данные в local storage */
class Deserialize {
    /**
     * Десериализация аккаунтов в local storage
     * @param {Array} массив объектов над которым производится событие
     * @returns {Array} десериализованный массив
     */
    deserializePerson(accountsUsers) {
        const accounts = JSON.parse(window.localStorage.getItem('user'));
        if (accounts.length > 0) {
            accounts.forEach(person => {
                if (person[1].visitedWorkspace.length > 0)
                    person[1].visitedWorkspace = person[1].visitedWorkspace.map(element => new VisitedWorkspace(new Date(element.fullDate), element.workspace, element.action))
                    
                accountsUsers.set(person[1].login, new User(person[1].login, person[1].password, person[1].firstName, person[1].secondName, person[1].workplace,  person[1].ill, person[1].dataIll, person[1].risk, person[1].visitedWorkspace))
            });
        }
        return accountsUsers;
    }
}