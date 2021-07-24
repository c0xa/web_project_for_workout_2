class CardInformation extends Component {
    constructor(login, userName) {
        super("div", "", "cardInformation");

        const spanUserName = new Component("span", userName, "cardInformation__username");

        const formForOption = new Component("form", "", "cardInformation__form", [["name", "forOption"]])
        const switchTheme = new SwitchTheme()
        //создание блока для отслеживания заболеваний

        //считаем рамки времени для выбора заболеваемости
        const CurrentDate = new Date();

        const data = new VisitedWorkspace(CurrentDate, "", "");

        const date =  data.calculateDate(CurrentDate); 

        const prevDate =  data.calculatePrevDate(CurrentDate);

        const blockInformationIll = new Component("div", "", "cardInformation__informationIll informationIll");

        const inputDataIll = new Component("input", "", "informationIll__input-data-ill", [["type", "date"], ["name", "inputDataIll"], ["max", date], ["min", prevDate]])

        const btnDataIll = new Component("input", "", "informationIll__btn-data-ill", [["type", "button"], ["value", "Enter"], ["name", "btnDataIll"]])

        blockInformationIll.element.append(inputDataIll.element, btnDataIll.element)

        //создание кнопки покидания офиса
        const btnLeaveWorkplace = new Component("input", "", "cardInformation__btn-leave", [["type", "button"], ["value", "leave the workplace"], ["name", "btnLeaveWorkplace"]])

        //создание кнопки разлог.
        const btnAnalyticalData = new Component("input", "", "cardInformation__analytical-data", [["type", "button"], ["value", "Analytical data"], ["name", "btnAnalyticaData"]])

        //создание кнопки разлог.
        const btnExitElement = new Component("input", "", "cardInformation__btn-exit", [["type", "button"], ["value", "Log out"], ["name", "btnExit"]])

        formForOption.element.append(btnLeaveWorkplace.element, blockInformationIll.element, btnAnalyticalData.element, btnExitElement.element);

           // добавления кнопки переключения тем блока имени и кнопки опций
        this.element.append(switchTheme.element, spanUserName.element, formForOption.element);
        return this;
    }

    checkBtn(store, username, userAccount) {
        const formOption = document.forms.forOption;
        const FormAuthentication = document.forms["form-authentication"];
        const content = document.querySelector(".content");
        const btnLogOut = formOption.elements.btnExit;
        const btnLeaveWorkplace = formOption.elements.btnLeaveWorkplace;
        const btnAnalyticaData = formOption.elements.btnAnalyticaData;;
        const btnDataIll = formOption.elements.btnDataIll;
        const analytic = document.querySelector(".analytic");
        const adminOption = document.querySelector(".admin-option");

        //обработка показа логов
        btnAnalyticaData.addEventListener('click', function () {
            window.scrollTo(100, 0);
            const app = document.getElementById('app');
            analytic.innerHTML = "";
            const imageClose = new Component("input", "", "analytic__btn-close", [["type", "button"], ["name", "btnClose"]])
            const table = new Component("table", " ", "analytic__table-analytic table-analytic");
            const caption = new Component("caption", "Analytic", "table-analytic__caption");
            const tr = new Component("tr", "", "table-analytic__tr");
            tr.element.append(new Component("td", "data", "table-analytic__td").element, new Component("td", "time", "table-analytic__td").element, new Component("td", "workspace", "table-analytic__td").element, new Component("td", "action", "table-analytic__td").element)
            table.element.append(caption.element, tr.element)
            userAccount.analyticTable(table)
            analytic.append(imageClose.element, table.element)
            app.append(analytic);
            Animator.show(analytic, 200);

            //обработка кнопки закрытия
            const btnCloseAnalytic = document.querySelector(".analytic__btn-close")
            btnCloseAnalytic.addEventListener('click', function () {

                Animator.hide(analytic, 200);
        });

        })

        //обработка разголинивания
        btnLogOut.addEventListener('click', function () {
            //делаем доступной форму офиса
            document.querySelector('.office').removeAttribute("availability");
    
            analytic.innerHTML = "";
            adminOption.innerHTML = "";
            Animator.hide(analytic, 0);
            Animator.hide(adminOption, 400);
            Animator.show(FormAuthentication, 400);
            Animator.hide(content, 0);
        })

        //обработка ухода с рабочего места
        btnLeaveWorkplace.addEventListener('click', function () {
            userAccount.checkBtnLeave()
        })

         //обработка отслеживания заболеваний

         btnDataIll.addEventListener('click', function () {

            const inputDataIll = formOption.elements.inputDataIll;
            
            userAccount.checkBtnIll(inputDataIll.value)
            console.log(inputDataIll.value)
        })
    }
}