<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: ['teamID'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(teamID) {
      // this.$route.path // /teams/teamid
      // gets the team id from the url path
      // const teamID = route.params.teamID;

      // finds team object from teams array in app.vue
      const selectedTeam = this.teams.find(team => team.id === teamID);

      // gets members id field from team
      const members = selectedTeam.members;

      // used to hold member info of selected team
      const selectedMembers = [];

      // looping through member IDs from selected team found in path URL
      for (const member of members) {
        // Find selected member object through use of member id
        const selectedUser = this.users.find(user => user.id === member);

        // Pushes selected member object into array
        selectedMembers.push(selectedUser);
      }

      // copy selected member array for use in vue
      this.members = selectedMembers;
      // copy selected team name for use in vue
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamID);
  },
  beforeRouteUpdate(to, from, next) {
    console.log("TeamMembers Cmp beforeRouteUpdate");
    console.log(to, from);
    next();
  },
  watch: {
    teamID(newID) {
      this.loadTeamMembers(newID);
    }
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
