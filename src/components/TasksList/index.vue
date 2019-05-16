<template>
    <div>
        <ul @click="deleteTask">
            <li v-for="(elem, index) in $root.taskList" :key="index">
                {{elem.getPublicInfo()}}
                <!--<button data-index="">delete</button>-->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            deleteTask(e) {
                  e.target.dataset.index
            }
        }
    }
</script>

<style scoped>

</style>
