import Template from './template';

export default class View {

    constructor(selector) {
        this._template = new Template();

        this._appWrapper = document.querySelector(selector);
    }


    get _options() {
        return{
            formTodo:this._appWrapper.querySelector('form[name="form-todo"]'),

            taskList: this._appWrapper.querySelector('.task-list'),

            emptyNoteField: this._appWrapper.querySelector('.empty-alert'),

            clearBtn: this._appWrapper.querySelector('.clear-btn')
        }
    }

    init(task) {
        this._renderTempalate(task);
    }

    _renderTempalate(tasks) {
        this._renderMainTemplate();
        this._renderFormTemplate('.todo-view');
        this._renderTaskList('.task-view', tasks);
    }
    
    _renderMainTemplate() {
        const template = this._template.createMainTemplate();

        this._appWrapper.insertAdjacentHTML('afterbegin', template);
    }

    _renderFormTemplate(parentSelector) {
        const template = this._template.createFormTemplate();

        document.querySelector(parentSelector).insertAdjacentHTML('afterbegin', template);

    }

    _renderTaskList(parentSelector, tasks) {
        const template = this._template.createTaskListTemplate();

        document.querySelector(parentSelector).insertAdjacentHTML('afterbegin', template);
        
        if(tasks.length){
            tasks.forEach((task) => this.renderTodoItem(task));

            this.checkTasksLength();
        }
    }

    renderTodoItem(task) {
        const template = this._template.createTaskItemTemplate(task);
       
        this._options.taskList.insertAdjacentHTML('afterbegin', template);

    }

    checkTasksLength() {
        const taskList = this._options.taskList;

        const emptyNote = this._options.emptyNoteField;

        if(!taskList.children.length) {

            emptyNote.style.display='block';

        }else{

            emptyNote.style.display = 'none';

        }
    }

    clearForm() {
        this._options.formTodo.reset();
    }

    bindEvent(eventName, handler) {
        switch(eventName) {

            case 'addTask':
                this._addTask(handler);
                break;
            case 'clearList':
                this._clearTaskList(handler)
                break;
            case 'updateTask':
                this._updateTask(handler);
                break;
            case 'removeTask':
                this._removeTask(handler);
                break;
            default:
                console.log('Unknown event');
                break;

        }
    }

    _addTask(handler){
        this._options.formTodo.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const textField = event.target.elements.taskText;
            handler(textField);
        });
    }

    _clearTaskList(handler) {
        this._options.clearBtn.addEventListener('click', () => {
            handler(this._options.taskList);
        });
    }

    _updateTask(handler) {
        this._options.taskList.addEventListener('click', (event) => {

            if(event.target.classList.contains('edit-item')) {
                event.stopImmediatePropagation();
                
                handler(event.target);
            }
        });
    }

    _removeTask(handler) {

        this._options.taskList.addEventListener('click', (event) => {

            if(event.target.classList.contains('delete-item')) {
            
                handler(event.target);
            }
        });
    }
}
