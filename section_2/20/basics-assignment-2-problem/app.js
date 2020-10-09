const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userInputEnterTemp: '',
            userInputEnter: ''
        };
    },
    methods: {
        showAlert() {
            alert("ALERT ALERT ALERT");
        },
        setInput(event) {
            this.userInput = event.target.value;
        },
        setInputEnterInput(event) {
            this.userInputEnterTemp = event.target.value;
        },
        setInputEnter() {
            this.userInputEnter = this.userInput;
        }
    },
});

app.mount("#assignment");
