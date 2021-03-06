// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import save from './assets/data/save.json'

import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

const store = new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: { save

  },
  getters: {
    save: state => state.save,
  },
  mutations: {
    setEnergy (state, energy) {
      state.save.hero.energy -= energy
    },
    setQuestID (state, id) {
      state.save.currentQuest.id = id
      state.save.currentQuest.inQuest = true
    }
  }

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
