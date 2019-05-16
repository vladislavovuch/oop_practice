import Student from './Student'
import ProjectTask from '../Tasks/ProjectTask'

export default function Developer(name, surname, specialization, jobTitle = 'Front-end developer') {
    Student.call(this, name, surname, specialization);
    this.jobTitle = jobTitle;
}

Developer.prototype.constructor = Developer;
Developer.prototype = Object.create(Student.prototype);

Developer.prototype.createProjectTask = function (title, status, description, deadlineDate) {
    this.addTask(new ProjectTask(title, status, description, deadlineDate));
}

Developer.prototype.getUserInfo = function() {
    debugger;
    return `dev ${this.name} ${this.surname} ${this.specialization} ${this.jobTitle}
    `
}
