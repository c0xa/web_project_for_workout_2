// Инициализация приложения после окончания загрузки страницы
window.addEventListener('load', () => new App())

const PARTOFFICE = 2;
const COLUMNOFFICE = 4;
const ROWOFFICE = 5;

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

        let userAccount = new Accounts();

        store.subscribe((state) => console.log(state));

        let app = document.getElementById('app');

        // создание формы входа
        let authentication = new FormAuthentication();

        // добавления формы
        app.append(authentication.element);

        let btnAuthentication = document.querySelector('.form-authentication__btn');

        // создание формы для офиса
        let place = new Office(PARTOFFICE, COLUMNOFFICE, ROWOFFICE);

        let content = new Component("div", " ", "content");

        btnAuthentication.addEventListener('click', function () {
            let form = document.querySelector('.form-authentication');

            let login = form.elements.login;
            let password = form.elements.password;
            if (userAccount.toEqual(login.value, password.value)) {
                let fullName = userAccount.toString(login.value);
                Animator.hide(form, 400);
                let cardInformation = new CardInformation(login.value, fullName);
                content.element.append(place.element, cardInformation.element)
                app.append(content.element);
                place.checkWorkplace(store, fullName);

            } else {
                alert("Wrong data")
            }
        })

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
        await Animator.hide(document.querySelector('.page-loader'), 300);
    }
}
