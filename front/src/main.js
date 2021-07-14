// Инициализация приложения после окончания загрузки страницы
window.addEventListener('load', () => new App())

/** App - Главный класс приложения импортирующий всё остальное и управляющий данными */
class App {
    /** Точка входа в приложение */
    constructor() {
        this.install()
    }

    /** Установка приложения */
    async install() {
        // Регистрация обработчика событий скрола страницы
        const store = createStore(reducer);

        store.subscribe((state) => console.log(state));

        let app = document.getElementById('app');

        let place1 = new Office(2);
        app.append(place1.element);

        await this.registerEvents();


        // Ожидаем дополнительно 1000мс для прогрузки всех элементов страницы и снятия нагрузки на приложение
        setTimeout(() => Events.dispatch(Events.AppLoaded), 1000)
    }

    /** Регистрация событий приложения */
    async registerEvents() {
        Events.on(Events.AppLoaded, this.onLoad)
    }

    /** Приложение завершило загрузку */
    async onLoad() {
        // Перематываем страницу вверх, если браузер установил прокрутку
        window.scrollTo(0, 0)
        // Анимация исчезновения экрана загрузки    
        await Animator.hide(document.querySelector('.page-loader'), 300)
        document.querySelector('.page-loader').style.opacity = "0";
    }
}
