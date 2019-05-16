<template>
    <div class="base-tab">
        <div class="nav-buttons" @click="changeTab">
            <button class="selected-tab-btn btn" data-type="1">Simple task</button>
            <button class="btn" data-type="2">Home task</button>
            <button class="btn" data-type="3">Project task</button>
        </div>
        <div class="tabs">
            <div class="tabs-content" id="simpleTask">
                <input v-model="$root.title" class="base-input" type="text" placeholder="Title"/>
                <input v-model="$root.status" class="base-input" type="text" placeholder="Status"/>
            </div>
            <div class="tabs-content hide-field" id="homeTask">
                <input v-model="$root.title" class="base-input" type="text" placeholder="Title"/>
                <input v-model="$root.status" class="base-input" type="text" placeholder="Status"/>
                <textarea v-model="$root.description" name="" cols="30" rows="10" placeholder="Description here">
                </textarea>
            </div>
            <div class="tabs-content hide-field" id="projectTask">
                <input v-model="$root.title" class="base-input" type="text" placeholder="Title"/>
                <input v-model="$root.status" class="base-input" type="text" placeholder="Status"/>
                <textarea v-model="$root.description" name="" cols="30" rows="10" placeholder="Description here">
                </textarea>
                <input v-model="$root.date" class="base-input" type="date" placeholder="deadline"/>
            </div>
        </div>
        <button @click="addTask" class="add-task">Add task</button>
    </div>
</template>

<script>
    import User from '../../modules/Users/User'
    import Student from '../../modules/Users/Student'
    import Developer from '../../modules/Users/Developer'
    export default {
        data() {
            return {
            }
        },
        methods: {
            changeTab(event) {
                // remove selected-tab from all
                const buttons = [...event.target.parentNode.children];
                buttons.forEach(elem => {
                    elem.classList.remove('selected-tab-btn');
                })
                // add to target
                event.target.classList.add('selected-tab-btn');
                this.$root.taskType = event.target.dataset.type;
                //show content
                this.changeTabContext(event.target.dataset.type);
            },
            changeTabContext(val) {
                let content;
                const tabsArray = [...document.querySelector('.tabs').children];
                tabsArray.forEach(elem => {
                    elem.classList.add('hide-field');
                });
                switch (val) {
                    case '1':
                        content = document.getElementById('simpleTask');
                        break;
                    case '2':
                        content = document.getElementById('homeTask');
                        break;
                    case '3':
                        content = document.getElementById('projectTask');
                        break;
                }
                content.classList.remove('hide-field');

            },
            addTask() {
                this.createUser();
            },
            createUser() {
                let user;
                switch (this.$root.userType) {
                    case '1':
                        user = new User(this.$root.name, this.$root.surname);
                        break;
                    case '2':
                        user = new Student(this.$root.name, this.$root.surname, this.$root.specialization);
                        break;
                    case '3':
                        user = new Developer(this.$root.name, this.$root.surname, this.$root.specialization, this.$root.jobTitle);
                        break;
                }
                this.createTask(user)
            },
            createTask(user) {

                try {
                    switch (this.$root.taskType) {
                        case '1':
                            user.createSimpleTask();
                            break;
                        case '2':
                            user.createHomeTask();
                            break;
                        case '3':
                            user.createProjectTask();
                            break;
                    }
                    this.$root.taskList.push(user);
                } catch (e) {
                    console.warn(e);
                    alert('You cant create such task');
                }


            }
        }
    }
</script>

<style scoped>
    .base-tab {
        width: 100%;
    }

    .nav-buttons {
        width: 100%;

    }

    button {
        margin-left: 10px;
        margin-top: 40px;
    }

    .tabs-content {
        width: 100%;
    }

    .base-input {
        width: 40%;
        margin-left: 5%;
        margin-top: 20px;
    }

    .selected-tab-btn {
        background-color: #f7f6ff;
    }

    textarea {
        margin-left: 5%;
        margin-top: 20px;
    }

    .hide-field {
        display: none;
    }

    .add-task {
        font-size: 16px;
        padding: 4px 12px;
        cursor: pointer;
    }

</style>
