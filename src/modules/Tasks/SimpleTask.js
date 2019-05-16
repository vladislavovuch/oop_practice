export default function SimpleTask(title = 'Coding', status='Doing') {
    this.title = title;
    this.status = status;
}

SimpleTask.prototype.constructor = SimpleTask;

SimpleTask.prototype.getTaskInfo = function () {
    return `${this.title} ${this.status}`;
}
