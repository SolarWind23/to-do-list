import IdGenerator from './idGenerator';

export default class Model {

    constructor(storage) {
        this._storage = storage;

        this._id = new IdGenerator();
    }

    getTasks() {
        return this._storage.getTasks();
    }

    addTask(taskText) {
        const newTask = {
            id: this._id.generate(),

            text: taskText
        }

        this._storage.addTask(newTask);

        return newTask;
    }

    updateTask(task) {

        this._storage.updateTask(task);
    }

    removeTask(id) {
        this._storage.removeTask(id);
    }

    removeAllTasks() {
        this._storage.removeAllTasks();
    }

}