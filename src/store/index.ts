import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from "vuex-persist"

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
