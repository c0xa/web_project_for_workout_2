/** записывает данные в local storage */
class Serialize {
    /**
     * Сериализация аккаунтов в local storage
     * @param {Array} массив объектов
     * @returns {}
     */
    serializePerson(person) {
        window.localStorage.setItem('user', JSON.stringify(person));
    }

    serializeWorkspace(visitedWorkspace) {
        window.localStorage.setItem('visitedWorkspace', JSON.stringify(visitedWorkspace));
    }
}