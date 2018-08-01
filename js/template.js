export default class Template {

    createMainTemplate() {
        const template = `<section class="tasks-wrap m-top">
                            <div class="container">
                                <div class="card">
                                    <div class="card-header">
                                        Create ToDo task
                                    </div>
                                    <div class="card-body todo-view"></div>
                                </div>
                                <div class="card m-top m-bot">
                                    <div class="card-header">
                                        Task list
                                    </div>
                                    <div class="card-body task-view"></div>
                                </div>
                                <button class="btn btn-primary clear-btn">
                                    Clear list
                                </button>
                            </div>
                        </section>`;

        return template;
    }

    createFormTemplate() {
        const template = `<form name="form-todo">
                            <div class="form-group">
                                <label for="taskText">Enter your task</label>
                                <input name="taskText" type="text" class="form-control" id="taskText">
                                <div class="invalid-feedback">
                                    Please enter some text
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Add
                            </button>
                        </form>`;

        return template;
    }

    createTaskListTemplate() {
        const template = `<div class="alert alert-info empty-alert">
                            Empty
                        </div>
                        <ul class="list-group task-list"> </ul>`;

        return template;
    }

    createTaskItemTemplate(itemData) {
        const template = `<li class="list-group-item d-flex align-items-center" data-id="${itemData.id}">
                            <span>${itemData.text}</span>
                            <i class="fas fa-edit edit-item ml-auto"></i>
                            <i class="fas fa-trash-alt delete-item ml-4"></i>
                        </li>`;
    
        return template;
    }
}