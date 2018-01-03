export class Task {
    public taskTitle: string;
    public startDate: Date;
    public endDate: Date;
    public isTruncate: boolean;

    constructor(taskName, taskStartDate, taskEndDate) {
        this.taskTitle = taskName;
        this.startDate = taskStartDate;
        this.endDate = taskEndDate;
        this.isTruncate = false;
    }
}
