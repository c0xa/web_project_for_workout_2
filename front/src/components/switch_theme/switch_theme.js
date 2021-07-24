class SwitchTheme extends Component {
    constructor() {
        super('form', "", "form-theme", [["name", "form-theme"]]);

        const lightTheme = new Component("input", "", "form-theme__light-theme", [["type", "button"], ["value", "light"],
                                                                        ["name", "light"]]);
     
        const darkTheme = new Component("input", "", "form-theme__dark-theme", [["type", "button"], ["value", "dark"],
                                                                        ["name", "dark"]]);

        this.element.append(lightTheme.element, darkTheme.element);
        this.defaultTheme();
        return this;
    }

    defaultTheme() {
        document.documentElement.style.setProperty('--main-hue', 290);
        document.documentElement.style.setProperty('--main-effect', "90%");
        document.documentElement.style.setProperty('--main-color', "30%");
    }

    checkTheme() {
        const formTheme = document.forms["form-theme"];
        const lightTheme = formTheme.elements.light;
        const darkTheme = formTheme.elements.dark;
        
        lightTheme.addEventListener('click',(e)=>{
            document.documentElement.style.setProperty('--main-hue', 290);
            document.documentElement.style.setProperty('--main-effect', "90%");
            document.documentElement.style.setProperty('--main-color', "30%");
        })
        
        darkTheme.addEventListener('click',(e)=>{
            document.documentElement.style.setProperty('--main-hue', 10);
            document.documentElement.style.setProperty('--main-effect', "25%");
            document.documentElement.style.setProperty('--main-color', "80%");
        })
        
    }
}