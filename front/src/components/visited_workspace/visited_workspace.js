class VisitedWorkspace {
    constructor(data, workspace, action) {
        this.date = this.toDate(data)
        this.time = this.toTime(data)
        this.workspace = workspace;
        this.action = action;
    }

    toTime(data) {
        return data.toISOString().slice(11, 19)
    }

    toDate(data) {
        return data.toISOString().slice(0, 10)
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
