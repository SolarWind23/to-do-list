export default class Notification {

    show(notify) {

        const container = document.querySelector('.tasks-wrap .container');

        const alert = `<div class="notification ${notify.class}"> ${notify.text} </div>`;

        this._hide();

        container.insertAdjacentHTML('afterbegin', alert);

        setTimeout(this._hide,2000);
    }

    _hide() {

        const currentAlert = document.querySelector('.notification');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

}