import SimpleTask from './SimpleTask'
import ProjectTask from "./ProjectTask";

export default function HomeTask(title = 'Coding', status='Doing', description='to do the 5 practice...') {
    SimpleTask.call(this, title, status);
    this.description = description;
}

HomeTask.prototype.constructor = HomeTask;
HomeTask.prototype = Object.create(SimpleTask.prototype);

HomeTask.prototype.getTaskInfo = function () {
    // call parent method
    return `${SimpleTask.prototype.getTaskInfo.call(this)} ${this.description}`;
}
