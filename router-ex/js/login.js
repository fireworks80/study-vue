import Auth from './auth.js';
export default {
  template: `
    <div>
      <h2>Login</h2>
      <p v-if="$route.query.redirect">로그인이 필요함</p>

      <form @submit.prevent="login">
        <p>
          <label for="email">email:</label>
          <input type="text" id="email" v-model="email">
        </p>
        <p>
          <label for="pass">pass:</label>
          <input type="text" id="pass" v-model="pass">
        </p>
        <button>login</button>
      </form>
      <p v-if="error">로그인 실패</p>
    </div>
  `,
  data() {
    return {
      email: '',
      pass: '',
      error: false
    };
  },
  methods: {
    login() {
      Auth.login(this.email, this.pass, loggedIn => {
        loggedIn
          ? this.$router.replace(this.$route.query.redirect || '/')
          : (this.error = true);
      });
    }
  }
};
