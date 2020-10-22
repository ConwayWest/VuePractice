<template>
  <section>
    <form @submit.prevent="submitUser">
      <div>
        <label>Name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label>Age</label>
        <input type="text" v-model="enteredAge" />
      </div>
      <button>Set User</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-user'],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitUser() {
      this.$emit(
        "set-user",
        this.enteredName,
        this.enteredAge
      );
      this.enteredName = '';
      this.enteredAge = '';
    },
  }
};
</script>