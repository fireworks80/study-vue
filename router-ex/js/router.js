import Auth from './auth.js';
import userList from './userList.js';
import userDetail from './userDetail.js';
import usersCreate from './userCreate.js';
import login from './login.js';

export default new VueRouter({
  routes: [
    {
      path: '/top',
      component: {
        template: '<p>top page</p>'
      }
    },
    {
      path: '/users',
      component: userList
    },
    {
      path: '/users/new',
      name: 'new',
      component: usersCreate,
      beforeEnter: (to, from, next) => {
        // console.log(to);
        if (!Auth.loggedIn()) {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          });
        } else {
          next();
        }
      }
    },
    {
      path: '/users/:userId',
      component: userDetail
    },
    {
      path: '/login',
      component: login,
      beforeEnter: (to, from, next) => {
        if (Auth.loggedIn()) {
          alert('이미 로그인됨');
          next({
            name: 'new'
          });
        } else {
          next();
        }
      }
    },
    {
      path: '/logout',
      beforeEnter: (to, from, next) => {
        Auth.logout();
        next('/');
      }
    }
  ]
});
