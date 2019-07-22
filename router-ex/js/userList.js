import Api from './userData.js';

export default {
  template: `
  <div>
      <p v-if="loading">loading >>>.....</p>
      <p v-if="error">{{error}}</p>
      <ul>
        <li v-for="user in users" :key="user.id"><router-link :to="{path: '/users/' + user.id}">{{user.name}}</router-link></li>
      </ul>
    </div>`,
  data() {
    return {
      error: null,
      users: () => [],
      loading: false
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.loading = true;
      Api.getUsers((err, users) => {
        err ? (this.error = err.toString()) : (this.users = users);
        this.loading = false;
      });
    }
  }
};
