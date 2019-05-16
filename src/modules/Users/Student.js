import User from './User'
import SimpleTask from '../Tasks/SimpleTask'
import HomeTask from '../Tasks/HomeTask'

function Student(name, surname, specialization = 'PI') {
    User.call(this, name, surname);
    this.specialization = specialization;
}

Student.prototype.constructor = Student;
Student.prototype = Object.create(User.prototype);

Student.prototype.createHomeTask = function (title, status, description) {
    this.addTask(new HomeTask(title, status, description));
}

Student.prototype.getUserInfo = function() {
    return `stud ${this.name} ${this.surname} ${this.specialization}
    `
}

// User.prototype.getTasksList = function () {
//     return `${this.tasks.map(task => {
//         return task.getTaskInfo();
//     })}`
// }

export default Student;
