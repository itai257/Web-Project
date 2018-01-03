import { Task } from './task.model';


export class TaskList {
    public listName: string;
    public tasks: Task[];

    constructor(listName) {
        this.listName = listName;
    }
}
