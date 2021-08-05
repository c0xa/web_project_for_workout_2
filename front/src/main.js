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
        BackgroundScroll.setupScrollEventer(Events, Events.PageScroll)

        const userAccount = new Accounts();

        let app = document.getElementById('app');

        // создание формы входа
        let authentication = new FormAuthentication();

        // добавления формы
        app.append(authentication.element);

        // создание переключения темы
        let switchTheme = new SwitchTheme()

        // создание формы для офиса
        const place = new Office(PARTOFFICE, COLUMNOFFICE, ROWOFFICE);
        const content = new Component("div", " ", "content");
        const formAuthentication = document.forms["form-authentication"];
        const analytic = new Component("div", " ", "analytic");
        const adminOption = new Component("div", " ", "admin-option");
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
                content.element.append(place.element, cardInformation.element, analytic.element, adminOption.element)
                app.append(content.element);
                userAccount.updateWorkspace();
                
                switchTheme.checkTheme();
                userAccount.checkAvilableOffice();
                userAccount.privilegeOption();
                place.checkWorkplace(userAccount);
                cardInformation.checkBtn(fullName, userAccount);
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
        Events.on(Events.PageScroll, this.onPageScroll)
    }

     /** Действие при скроле страницы */
     async onPageScroll({ detail }) {
        const appDom = document.querySelector('#app')
        appDom.style['backdrop-filter'] = `blur(${detail.scroll * 10}px) contrast(${detail.scroll + 1})`
        appDom.style['backdrop-filter'] = `contrast(${detail.scroll + 1})`
        appDom.style['background'] = `rgba(255, 255, 255, ${0.9 + detail.scroll * 0.1})`
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
