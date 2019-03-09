import Vue from 'vue'
import Vuex from 'vuex'

import why from './modules/why'
import hows from './modules/hows'
import user from './modules/user'
import whats from './modules/whats'
import reflections from './modules/reflections'
import goals from './modules/goals'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: localStorage
})

export default new Vuex.Store({
  modules: {
    why,
    hows,
    user,
    whats,
    reflections,
    goals
  },
  plugins: [vuexPersist.plugin]
})
