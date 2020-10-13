const app = Vue.createApp({
  data() {
    return {
      styleClass: '',
      hide: false,
      userColor: '',
    };
  },
  computed: {
    whichClass() {
      return {
        user1: this.styleClass == 'user1',
        user2: this.styleClass == 'user2',
        visible: this.hide == false,
        hidden: this.hide == true,
      };
    }
  },
  methods: {
    showHide() {
      this.hide = !this.hide;
    },
  },
});

app.mount('#assignment');
