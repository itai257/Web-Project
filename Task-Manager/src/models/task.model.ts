export class Task {
    public id;
    public title: string;
    public start_date: Date;
    public end_date: Date;
    public list_id: any;
    public isTruncate = false;
    public status: string;

    constructor() {
    }
}
