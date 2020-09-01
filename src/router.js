import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ViewProfile from './views/ViewProfile.vue'
import Resume from './views/Resume.vue'
import Read from './views/Read.vue'
import Code from './views/Code.vue'
import Watch from './views/Watch.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Profile',
      name: 'profile',
      component: ViewProfile
    },
    {
      path: '/Resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/Read',
      name: 'read',
      component: Read
    },
    {
      path: '/Code',
      name: 'code',
      component: Code
    },
    {
      path: '/Watch',
      name: 'watch',
      component: Watch
    }

  ]
})
