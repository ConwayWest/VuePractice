const app = Vue.createApp({
    data() {
        return {
            name: "Kyle Conway",
            age: 29,
            imgLink: 'https://blog.playstation.com/tachyon/2020/09/50349535038_42fa72f759_k.jpg?resize=1088,612&crop_strategy=smart&zoom=1'
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5;
        },

        randomNumber() {
            return Math.random();
        }
    }
});

app.mount("#assignment")
