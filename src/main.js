import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    data: {
        tasksList: [],
        jobTitle: '',
        specialization: '',
        name: '',
        surname: '',
        userType: '1',
        taskType: '1',
        taskTitle: '',
        taskStatus: '',
        taskDescription: '',
        date: null,
        taskList: [],
    },
    render: h => h(App),
}).$mount('#app');
