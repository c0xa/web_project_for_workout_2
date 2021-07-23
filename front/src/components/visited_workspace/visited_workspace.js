class VisitedWorkspace {
    constructor(data, workspace, action) {
        this.data = data;
        this.workspace = workspace;
        this.action = action;
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
