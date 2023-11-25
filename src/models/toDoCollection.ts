import { ToDoItem } from "./toDoItem";

export class ToDoCollection {
    private nextId = 0;
    private itemMap = new Map<number, ToDoItem>();
    constructor(public author: string) {
    }

    addItem(task: string, isDone = false): number {
        const newToDoItem = new ToDoItem(this.nextId++, task, isDone)
        this.itemMap.set(newToDoItem.id, newToDoItem);
        return newToDoItem.id;
    }

    getItemById(id: number): ToDoItem | void {
        const foundItem = this.itemMap.get(id); 
        if (!foundItem) {
            console.log(`No such item: ${id}`);
        }
        return foundItem;
    }

    getAllItems(includeDone: boolean) {
        return [...this.itemMap.values()].filter(item => includeDone || !item.isDone);
    }

    markAsDone(id: number) {
        const toDoItem: ToDoItem | void = this.getItemById(id);
        toDoItem ? toDoItem.isDone = true : toDoItem ;
    }

    markAsNotDone(id: number) {
        const toDoItem: ToDoItem | void = this.getItemById(id);
        toDoItem ? toDoItem.isDone = false : toDoItem ;
    }
}