import Vue from 'vue'
import Router from 'vue-router'
import VueMeta from 'vue-meta'
import isMobile from '@/util/checkUserAgent.js'

Vue.use(Router)

Vue.use(VueMeta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid'
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/2018',
      name: '2018',
      component: () =>
        isMobile()
          ? import('./components/fok2018/Mobile.vue')
          : import('./components/fok2018/PC.vue')
    },
    {
      path: '/2019',
      name: '2019',
      component: () =>
        isMobile()
          ? import('./components/fok2019/Mobile.vue')
          : import('./components/fok2019/PC.vue')
    }
  ]
})
