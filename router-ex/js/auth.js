export default {
  login(email, pass, callback) {
    setTimeout(() => {
      if (email === 'vue' && pass === '1234') {
        localStorage.token = Math.random()
          .toString(36)
          .substring(7);
      }
      // console.log(callback);
      callback ? callback(true) : callback(false);
    }, 0);
  },
  logout() {
    delete localStorage.token;
  },
  loggedIn() {
    return !!localStorage.token;
  }
};
