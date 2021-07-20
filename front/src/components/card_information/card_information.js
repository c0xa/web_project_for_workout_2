class CardInformation extends Component {
    constructor(login, userName) {
        super("div", "", "cardInformation");

        const spanUserName = new Component("span", userName, "cardInformation__username");

        const formForOption = new Component("form", "", "cardInformation__form", [["name", "forOption"]])

        //создание блока для отслеживания заболеваний
        const blockInformationIll = new Component("div", "", "cardInformation__informationIll informationIll");

        const inputDataIll = new Component("input", "", "informationIll__input-data-ill", [["type", "date"], ["name", "inputDataIll"]])
       
        const btnDataIll = new Component("input", "", "informationIll__btn-data-ill", [["type", "button"], ["value", "Enter"], ["name", "btnDataIll"]])

        blockInformationIll.element.append(inputDataIll.element, btnDataIll.element)

        //создание кнопки покидания офиса
        const btnLeaveWorkplace = new Component("input", "", "cardInformation__btn-leave", [["type", "button"], ["value", "leave the workplace"], ["name", "btnLeaveWorkplace"]])

        //создание кнопки разлог.
        const btnExitElement = new Component("input", "", "cardInformation__btn-exit", [["type", "button"], ["value", "Log out"], ["name", "btnExit"]])

        formForOption.element.append(btnLeaveWorkplace.element, blockInformationIll.element,  btnExitElement.element);

        this.element.append(spanUserName.element, formForOption.element);
        return this;
        

    }

    checkBtn(store, username, visitedWorkspace) {
        const formOption = document.forms.forOption;
        const FormAuthentication = document.forms["form-authentication"];
        const content = document.querySelector(".content");
        const btnLogOut = formOption.elements.btnExit;
        const btnLeaveWorkplace = formOption.elements.btnLeaveWorkplace;
        const btnDataIll = formOption.elements.btnDataIll;

        //обработка разголинивания
        btnLogOut.addEventListener('click', function () {
            Animator.show(FormAuthentication, 400);
            Animator.hide(content, 0);
        })

        //обработка ухода с рабочего места
        btnLeaveWorkplace.addEventListener('click', function () {
            let index = 0;
            visitedWorkspace.forEach(element => {   
                if (element.getAttribute("username") === username) {
                    element.removeAttribute("visit");
                    element.removeAttribute("username");
                    store.dispatch({
                        type: 'ADD',
                        payload: {
                            action: "leave",
                            workplace: element.getAttribute("id"), 
                            username: username,
                            data: new Date()}
                    });
                    visitedWorkspace.splice(index, 1);
                }
                index++;
            })
        })

         //обработка отслеживания заболеваний

         btnDataIll.addEventListener('click', function () {

            const inputDataIll = formOption.elements.inputDataIll;
            
            console.log(inputDataIll.value)
        })
    }
}