class SwitchTheme extends Component {
    constructor() {
        super('form', "", "form-theme", [["name", "form-theme"]]);

        const lightTheme = new Component("input", "", "form-theme__light-theme", [["type", "button"], ["value", "light"],
                                                                        ["name", "light"]]);
     
        const darkTheme = new Component("input", "", "form-theme__dark-theme", [["type", "button"], ["value", "dark"],
                                                                        ["name", "dark"]]);

        this.element.append(lightTheme.element, darkTheme.element);
        this.lightTheme();

        this.setStyleVar = (name, value) => document.documentElement.style.setProperty(`--${name}`, value)
        this.getStyleVar = name => getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)

        return this;
    }

    setStyleVar(name, value) {
        document.documentElement.style.setProperty(`--${name}`, value)
    }

    getStyleVar(name) {
        getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
    }


    lightTheme() {
        this.setStyleVar('main-hue', 290);
        this.setStyleVar('main-effect', "90%");
        this.setStyleVar('main-color', "30%");
    }

    darkTheme() {
        this.setStyleVar('main-hue', 10);
        this.setStyleVar('main-effect', "25%");
        this.setStyleVar('main-color', "80%");
    }


    checkTheme() {
        const formTheme = document.forms["form-theme"];
        const lightTheme = formTheme.elements.light;
        const darkTheme = formTheme.elements.dark;
        lightTheme.setAttribute("availability", true);
        
        lightTheme.addEventListener('click',(e)=>{
            this.lightTheme();
            lightTheme.setAttribute("availability", true);
            darkTheme.removeAttribute("availability");
        })
        
        darkTheme.addEventListener('click',(e)=>{
            this.darkTheme();
            darkTheme.setAttribute("availability", true);
            lightTheme.removeAttribute("availability");
        })
        
    }
}