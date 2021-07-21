/** записывает данные в local storage */
class Deserialize {
    /**
     * Десериализация аккаунтов в local storage
     * @param {Array} массив объектов над которым производится событие
     * @returns {Array} десериализованный массив
     */
    deserializePerson(accountsUsers) {
        const accounts = JSON.parse(window.localStorage.getItem('user'));
        if (accounts) {
            accounts.forEach(person => {
                accountsUsers.push(new User(person.login, person.password, person.firstName, person.secondName))
            });
        }
        return accountsUsers;
    }

    deserializeWorkspace(visitedWorkspace) {
    console.log("deserizlize")
    const workspaces = JSON.parse(window.localStorage.getItem('visitedWorkspace'));
    if (workspaces) {
        workspaces.forEach(worksplace => {
            visitedWorkspace.push((worksplace.workspace));
        });
    }
    console.log(visitedWorkspace)
    return visitedWorkspace;
    }
}