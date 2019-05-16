import HomeTask from './HomeTask'
import SimpleTask from "./SimpleTask";

export default function ProjectTask(title, status, description, deadlineDate=new Date(new Date() + 3600*24*1000)) {
    HomeTask.call(this, title, status, description);
    this.deadlineDate = deadlineDate;
}

ProjectTask.prototype.constructor = ProjectTask;
ProjectTask.prototype = Object.create(HomeTask.prototype);

ProjectTask.prototype.getTaskInfo = function () {
    // call parent method ?

    return `${HomeTask.prototype.getTaskInfo.call(this)} ${this.deadlineDate}`;
}
