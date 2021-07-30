class BackgroundScroll {
    /**
 * Настраивает событие скрола при прокрутке страницы
 * @param {Object} bus Шина событий на которой будет зарегистрированно событие скрола
 * @param {String} event Название события
 * @example
 * setupScrollEventer('page-scroll');
 * Events.on('page-scroll', data => data.detail.scroll) // [0-1]
 */
    static setupScrollEventer(bus, event) {
        // Слушаем событие скрола страницы и вычисляем процент скролинга
        window.addEventListener('scroll', ev => {
            console.log("start")
            const pageHeight = document.documentElement.getBoundingClientRect().height
            const pageVisibleHeight = window.innerHeight
            // Процент скролинга от 0 до 1
            const scrollRate = Math.max(window.pageYOffset / (pageHeight - pageVisibleHeight), 0)
            bus.dispatch(event, { scroll: scrollRate })
            ev.stopPropagation()
        })
    }
}
