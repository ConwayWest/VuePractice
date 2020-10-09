const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      iterator: 5,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
