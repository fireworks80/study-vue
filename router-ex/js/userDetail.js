import Api from './userData.js';

export default {
  template: `
  <div>
    <p v-if="loading"> loading >>> .....</p>
    <p v-if="error">{{error}}</p>
    <div v-if="user">
      <strong>{{user.name}}</strong>
      <p>{{user.description}}</p>
    </div>
  </div>
  `,
  data() {
    return {
      loading: false,
      error: null,
      user: null
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
      this.user = null;
      Api.getUser(this.$route.params.userId, (err, user) => {
        this.loading = false;
        err ? (this.error = err.toString()) : (this.user = user);
      });
    }
  }
};
