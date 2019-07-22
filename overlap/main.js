const userLinks = {
  template: `
  <div>
      <h2>사용자 ID는 {{$route.params.userId}}</h2>
      <router-link :to="'/user/' +
        $route.params.userId
      + '/profile'">profile</router-link>
      <router-link :to="'/user/'+ $route.params.userId+'/posts'">posts</router-link>
      <router-view></router-view>
    </div>
  `
};

const profile = {
  template: `<div>
    <h2>사용자 {{$route.params.userId}}의 프로파일</h2>
  </div>`
};

const posts = {
  template: `<div><h2>사용자 {{$route.params.userId}}의 글 모음 입니다.</h2></div>`
};

const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: userLinks,
      children: [
        {
          path: 'profile',
          component: profile
        },
        {
          path: 'posts',
          component: posts
        }
      ]
    }
  ]
});
new Vue({
  router
}).$mount('#app');
