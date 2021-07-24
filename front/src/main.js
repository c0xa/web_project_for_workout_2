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

        const userAccount = new Accounts();

        store.subscribe((state) => console.log(state));

        let app = document.getElementById('app');

        // создание формы входа
        let authentication = new FormAuthentication();

        // добавления формы
        app.append(authentication.element);

        // создание переключения темы
        let switchTheme = new SwitchTheme()

        Animator.hide(document.querySelector(".form-theme"), 0);

        // создание формы для офиса
        const place = new Office(PARTOFFICE, COLUMNOFFICE, ROWOFFICE);

        const content = new Component("div", " ", "content");
        const formAuthentication = document.forms["form-authentication"];
        const analytic = new Component("div", " ", "analytic");
        formAuthentication.addEventListener('submit', evt => {
            evt.preventDefault();
            const login = formAuthentication.elements.login;
            const password = formAuthentication.elements.password;
            if (userAccount.toEqual(login.value, password.value)) {
                if (document.querySelector(".content")) {
                    document.querySelector(".content").innerHTML = "";
                }
                let fullName = userAccount.toString(login.value);
                Animator.hide(formAuthentication, 0);
                const cardInformation = new CardInformation(login.value, fullName);
                content.element.append(place.element, cardInformation.element, analytic.element)
                app.append(content.element);
                switchTheme.checkTheme();
                userAccount.checkAvilableOffice(fullName)
                place.checkWorkplace(store, fullName, userAccount);
                cardInformation.checkBtn(store, fullName, userAccount);
                Animator.show(document.querySelector(".content"), 400);
                Animator.hide(document.querySelector(".analytic"), 0);
                authentication.hiddenErrorDomElement();
                formAuthentication.reset();
            } else {
                authentication.showErrorDomElement();
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
        if (document.documentElement.clientWidth <= 600) {
            window.scrollTo(100, 100)
        }
        // Анимация исчезновения экрана загрузки    
        await Animator.hide(document.querySelector('.page-loader'), 300);
    }
}
