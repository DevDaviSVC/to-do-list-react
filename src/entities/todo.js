export default class Todo {
    constructor (id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = new Date();
        this.isDone = false;
    }
}