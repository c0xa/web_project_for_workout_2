/** Применяет анимации на элементах */
class Animator {
    /**
     * Плавное сокрытие элемента с последующим скрытием из отображения DOM
     * @param {HTMLElement} element Объект над которым производится событие
     * @param {Number} duration Время анимации в мс
     * @returns {Promise<void>}
     */
    static async hide(element, duration = 0) {
        return new Promise(resolve => {
            element.animate([
                {opacity: 1},
                {opacity: 0},
            ], {
                duration,
                easing: 'ease-out',
            })
            setTimeout(() => {
                element.setAttribute('hidden', true)
                resolve()
            }, duration)
        })

    }

    /**
     * Плавное появление элемента с восстановлением отображения в DOM
     * @param {HTMLElement} element Объект над которым производится событие
     * @param {Number} duration Время анимации в мс
     * @returns {Promise<void>}
     */
    static async show(element, duration = 0) {
        return new Promise(resolve => {
            element.removeAttribute('hidden')
            element.animate([
                {opacity: 0},
                {opacity: 1},
            ], {
                duration,
                easing: 'ease-in',
            })
            setTimeout(() => {
                resolve()
            }, duration)
        })
    }
}