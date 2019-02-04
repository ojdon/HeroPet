import Vue from 'vue'
import Router from 'vue-router'
import Title from '@/components/Title'
import Game from '@/components/Game'
import Menu from '@/components/Menu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Title',
      component: Title
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
