import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

    strict: true,
  state: {
    isLoading: false,
    isAuthenticated: false,
    token: '',
    user: {
      id: 0,
      username: '',
    },
  },

  mutations: {
    initStore(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true

      }
      else {
        state.token = ''
        state.isAuthenticated = false
        state.user.username = ''
        state.user.id = 0
      }
    },
    setToken(state, token){
      state.token = token
      state.isAuthenticated = true
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
    removeToken(state){
      state.token = false
      state.isAuthenticated = false
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
