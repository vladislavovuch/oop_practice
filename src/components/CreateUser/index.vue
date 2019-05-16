<template>
    <div>
        <h2>Create user</h2>
        <input type="text" placeholder="Name" id="name" v-model="$root.name">
        <input type="text" placeholder="Surname" id="surname" v-model="$root.surname">
        <input type="text" placeholder="Specialization" id="spec" v-model="$root.specialization">
        <input type="text" placeholder="Job title" id="job" v-model="$root.jobTitle">
        <select name="" id="" v-model="$root.userType">
            <option value="1" selected>User</option>
            <option value="2">Student</option>
            <option value="3">Developer</option>
        </select>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    input {
        width: 40%;
        margin-top: 20px;
        margin-left: 5%;
    }

    select {
        width: 80%;
        margin-top: 20px;
        margin-left: 5%;
    }

    .hide-input {
        display: none;
    }
</style>
