const app = Vue.createApp({
    data() {
        return {
            enteredTask: '',
            tasks: [],
            showTasks: true,
            taskButtonText: 'Hide List',
        };
    },
    computed: {
        buttonCaption() {
            return this.showTasks ? 'Hide List' : 'Show List';
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTask);
        },
        showTasksToggle() {
            this.showTasks = !this.showTasks;
        },
    },
});

app.mount("#assignment");