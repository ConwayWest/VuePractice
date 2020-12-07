<template>
  <button v-if="!userIsAuthenticated" @click="login">Login</button>
  <button v-if="userIsAuthenticated" @click="logout">Logout</button>
  <p>{{ testAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout'])
  },
  computed: {
    ...mapGetters(['userIsAuthenticated']),
    ...mapGetters('numbers', ['testAuth'])
  },
}
</script>
