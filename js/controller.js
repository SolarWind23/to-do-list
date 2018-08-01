import Notification from './notification';

export default class Controller{

    constructor(model, view) {
        this._model = model;
        this._view = view;
        this._notification = new Notification();
    }

    init() {
        const tasks = this._model.getTasks();
        this._view.init(tasks);
        this._bindEventListners();
    }

    _bindEventListners(){
        this._view.bindEvent('addTask', this._addTaskHandler.bind(this));

        this._view.bindEvent('updateTask', this._updateTaskHandler.bind(this));

        this._view.bindEvent('removeTask', this._removeTaskHandler.bind(this));

        this._view.bindEvent('clearList', this._clearListHandler.bind(this));
    }

    _addTaskHandler(textField) {
        const inputValue = textField.value;
      
        if(!inputValue) {
            textField.classList.add('is-invalid');

        }else{

            textField.classList.remove('is-invalid');

            this._createNewTask(inputValue);

            this._notification.show({
                text: 'Новая задача успешно добавленна',
                class: 'alert alert-success'
            })
        }
    }

    _createNewTask(text) {
        const newTask = this._model.addTask(text);

        this._view.renderTodoItem(newTask);
        this._view.checkTasksLength();
        this._view.clearForm();
    }

    _updateTaskHandler(eventTarget){

        const taskId = eventTarget.closest('li').dataset.id;

        const editableField = eventTarget.closest('li').querySelector('span');

        eventTarget.classList.toggle('fa-save');

        if(eventTarget.classList.contains('fa-save')) {
            editableField.setAttribute('contenteditable', true);
        }else {
            editableField.setAttribute('contenteditable', false);

            editableField.blur();
            
            this._model.updateTask({id:taskId, text:editableField.textContent});

            this._view.checkTasksLength();

            this._notification.show({
                text: 'Задача обновлена',
                class: 'alert alert-success'
            });
        }
    }

    _removeTaskHandler(eventTarget){
        const taskItem = eventTarget.closest('li');
       
        const taskId = taskItem.dataset.id;

        taskItem.remove();

        this._model.removeTask(taskId);

        this._view.checkTasksLength();

        this._notification.show({
            text: 'Задача удалена',
            class: 'alert alert-warning'
        });
    }

    _clearListHandler(taskList){
        this._model.removeAllTasks();

        taskList.innerHTML = '';

        this._view.checkTasksLength();

        this._notification.show({
            text:'Все задачи удалены',
            class: 'alert alert-warning'
        })
    }
}