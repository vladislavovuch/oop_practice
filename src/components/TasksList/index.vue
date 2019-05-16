<template>
    <div>
        <ul @click="deleteTask">
            <li v-for="(elem, index) in $root.taskList" :key="index">
                {{elem.getPublicInfo()}}
                <button :data-index="index">delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        methods: {
            deleteTask(e) {
                const index = e.target.dataset.index;
                this.$root.taskList.splice(index, 1);
            }
        },
        
    }
</script>

<style scoped>

</style>
