class VisitedWorkspace {
    constructor(data, workspace, action) {
        this.fullDate = data
        this.date = this.toDate(data)
        this.time = this.toTime(data)
        this.workspace = workspace;
        this.action = action;
    }
    
    calculateDate(date) {
        this.date = date;
        const cDay = this.date.getDate()
        let cMonth = this.date.getMonth() + 1;
        let cYear = this.date.getFullYear();

        (cMonth > 0 && cMonth < 10) ? cMonth = "0" + cMonth : cMonth;
        return [cYear, cMonth, cDay].join("-")
    }

    formatMonth(PMonth) {
        return (PMonth > 0 && PMonth < 10) ? "0" + PMonth : PMonth;
    }


    calculatePrevDate(date) {
        const cDay = this.date.getDate()
        let PMonth = this.date.getMonth();
        let cYear = this.date.getFullYear();

        PMonth = this.formatMonth(PMonth);
        if (PMonth === 0) {
            cYear = cYear - 1;
            PMonth = 12;
        }
        return [cYear, PMonth, cDay].join("-")
    }

    toTime(data) {
        return [data.getHours(), data.getMinutes(), data.getSeconds()].join(":");
    }

    toDate(data) {
        return this.calculateDate(data)
    }

    getData() {
        return this.data;
    }

    getWorkspace() {
        return this.workspace;
    }

    getAction() {
        return this.action;
    }
}
