import LocalStorage from './localStorage';
import Model from './model';
import View from './view';
import Controller from './controller';

class Todo {
    constructor(appSelector) {
        const localStorage = new LocalStorage();
        const APP_ROOT_SELECTOR = appSelector || '.app';
        const model = new Model(localStorage);
        const view = new View(APP_ROOT_SELECTOR);

        this._controller = new Controller(model, view);

    }

    start() {
        this._controller.init();
    }
}

const todo = new Todo('.app');
todo.start();
