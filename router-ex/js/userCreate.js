import Api from './userData.js';
export default {
  template: `
  <div>
  <p v-if="sending">전송중.........</p>
  <form @submit.prevent="createUser">
      <fieldset>
        <legend>사용자 등록</legend>
        <p>
          <label for="name">이름: </label>
          <input type="text" id="name" v-model="user.name">
        </p>
        <p>
          <label for="desc">설명: </label>
          <input type="text" id="desc" v-model="user.description">
        </p>
        <p v-if="error">{{error}}</p>
        <button>등록</button>
      </fieldset>
    </form>
    </div>
    `,
  data() {
    return {
      sending: false,
      user: this.defaultUser(),
      error: null
    };
  },
  methods: {
    defaultUser() {
      return {
        name: '',
        description: ''
      };
    },
    createUser() {
      if (this.user.name.trim() === '') {
        this.error = 'name은 필수 입니다.';
        return;
      }

      if (this.user.description.trim() === '') {
        this.error = '설명은 필수 입니다';
        return;
      }
      this.sending = true;
      Api.postUser(this.user, (err, user) => {
        if (err) {
          this.error = err.toString();
          return;
        } else {
          this.error = null;
          this.user = this.defaultUser();
          this.sending = false;
          alert('등록 완료');
          this.$router.push('/users');
        }
      });
    }
  }
};
