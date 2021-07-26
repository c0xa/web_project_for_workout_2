class Events {
    // Константы событий
    static AppLoaded = 'app-loaded'
    static PageScroll = 'page-scroll'

    // Шина событий
    static _bus = document.createElement('div')

    /**
     * Подписать обработчик на событие
     * @param {String} event Строка с именем события
     * @param {Function} handler Функция-обработчик с сигнатурой (data) => void
     */
    static on(event, handler) {
        Events._bus.addEventListener(event, handler)
    }

    /**
     * Отписать обработчик от события
     * @param {String} event Строка с именем события
     * @param {Function} handler Функция-обработчик с сигнатурой (data) => void
     */
    static off(event, handler) {
        Events._bus.removeEventListener(event, handler)
    }

    /**
     * Вызвать событие у всех подписчиков
     * @param {String} event Строка с именем события
     * @param {Object} data Объект с параметрами события
     * @returns {Boolean} Если false, значит один из обработчиков хочет отменить действие
     */
    static dispatch(event, data) {
        return Events._bus.dispatchEvent(new CustomEvent(event, {
            cancelable: true, //< Для возможности использовать preventDefault
            detail: data,
        }))
    }
}