class CardInformation extends Component {
    constructor(login, userName) {
        super("div", "", "cardInformation");

        const spanUserName = new Component("span", userName, "cardInformation__username");

        const formForOption = new Component("form", "", "cardInformation__form", [["name", "forOption"]])

        //создание блока для отслеживания заболеваний

        let date = new Date();
        date = date.toISOString().slice(0, 10);
        let prevDate = date.split("-");
        let month = parseInt(prevDate[1], 10) - 1
        let year = parseInt(prevDate[0], 10);
        if (month > 0 && month < 10) {
            month = "0" + month;
        }
        if (month === 0) {
            year = parseInt(prevDate[0], 10) - 1;
            month = 12;
        }
        prevDate = [year, month, prevDate[2]].join("-")

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

        this.element.append(spanUserName.element, formForOption.element);
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

        //обработка разголинивания
        btnAnalyticaData.addEventListener('click', function () {
            window.scrollTo(100, 0);
            const app = document.getElementById('app');
            if (document.querySelector(".analytic")) {
                document.querySelector(".analytic").innerHTML = "";
                return;
            }
            const analytic = new Component("div", " ", "analytic");
            const table = new Component("table", " ", "analytic__table-analytic table-analytic");
            const caption = new Component("caption", "Analytic", "table-analytic__caption");
            const tr = new Component("tr", "", "table-analytic__tr");
            tr.element.append(new Component("td", "Data", "table-analytic__td").element, new Component("td", "workspace", "table-analytic__td").element, new Component("td", "action", "table-analytic__td").element)
            table.element.append(caption.element, tr.element)
            userAccount.analyticTable(username, table)
            analytic.element.append(table.element);

            app.append(analytic.element);
        })

        //обработка разголинивания
        btnLogOut.addEventListener('click', function () {
            //делаем доступной форму офиса
            document.querySelector('.office').removeAttribute("availability");
            if (document.querySelector(".analytic")) {
                document.querySelector(".analytic").innerHTML = "";
            }
            Animator.show(FormAuthentication, 400);
            Animator.hide(content, 0);
        })

        //обработка ухода с рабочего места
        btnLeaveWorkplace.addEventListener('click', function () {
            userAccount.checkBtnLeave(username)
        })

         //обработка отслеживания заболеваний

         btnDataIll.addEventListener('click', function () {

            const inputDataIll = formOption.elements.inputDataIll;
            
            userAccount.checkBtnIll(username, inputDataIll.value)
            console.log(inputDataIll.value)
        })
    }
}