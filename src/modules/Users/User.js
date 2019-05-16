import SimpleTask from '../Tasks/SimpleTask'

export default function User(n = 'Vlad', sn = 'Hybalo') {
    this.name = n;
    this.surname = sn;
    this.tasks = [];
}

User.prototype.constructor = User;

User.prototype.createSimpleTask = function (title, status) {
    this.addTask(new SimpleTask(title, status));
}

User.prototype.addTask = function (task) {
    this.tasks.push(task);
}

User.prototype.getPublicInfo = function () {
    return this.getUserInfo() + ` tasks:
        ${this.getTasksList()}
        `
}


User.prototype.getUserInfo = function () {
    return `user ${this.name} ${this.surname}
    `
}

User.prototype.getTasksList = function () {
    return `${this.tasks.map(task => {
        return task.getTaskInfo();
    })}`
}
