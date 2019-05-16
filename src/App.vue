<template>
    <div id="app">
        <h1>Welcome</h1>
        <div class="container">
            <create-user></create-user>
            <base-tab></base-tab>
        </div>
        <tasks-list></tasks-list>
    </div>
</template>

<script>
    import User from './modules/Users/User'
    import Student from './modules/Users/Student'
    import Developer from './modules/Users/Developer'
    import CreateUser from './components/CreateUser'
    import BaseTab from './components/BaseTab'
    import TasksList from './components/TasksList'

    export default {
        components: {
            CreateUser,
            BaseTab,
            TasksList,
        },
        data() {
            return {
                userTypes: [
                    'User',
                    'Student',
                    'Developer'
                ],
                selectedUserType: '0',
            }
        },
        created() {
            const user = new User('V', 'V');
            console.log(user);
            user.createSimpleTask('Finish 4 practice', '');
            console.log(user);

            const student = new Student();
            console.log(student);
            student.createHomeTask();
            student.createSimpleTask();
            console.log(student);

            const dev = new Developer();
            dev.createProjectTask();
            dev.createSimpleTask();
            dev.createHomeTask();
            console.log(dev);
        }
    }
</script>

<style>
    .container {
        display: flex;
    }
</style>
