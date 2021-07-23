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
                accountsUsers.push(new User(person.login, person.password, person.firstName, person.secondName, person.workplace,  person.ill, person.dataIll, person.risk, person.visitedWorkspace))
            });
        }
        return accountsUsers;
    }
}