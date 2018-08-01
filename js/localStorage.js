export default class LocalStorage {

    constructor() {
        this._storage = window.localStorage;

        this._tasks = JSON.parse(this._storage.getItem('tasks')) || [];
    }

    getTasks() {
        return this._tasks;
    }

    addTask(task) {
        this._tasks.push(task);

        this._updateLocalStorage();

    }

    updateTask(task){
        this._tasks = this._tasks.map((item) => {

            if(item.id == task.id ) {
                item.text = task.text;
            }

            return item;
        });

        this._updateLocalStorage();
    }

    removeTask(id) {
        this._tasks = this._tasks.filter(task => task.id !== id);

        this._updateLocalStorage();
    }

    removeAllTasks() {
        this._tasks = [];

        this._updateLocalStorage();
    }

    _updateLocalStorage() {
        this._storage.setItem('tasks', JSON.stringify(this._tasks));
    }
}