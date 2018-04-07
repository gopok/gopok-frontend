import ApiService from './../../api/ApiService '

const state = {
  errors: null,
  user: {},
  isAuthenticated: false
}

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  LOGIN (store, username, password) {
    return new Promise((resolve) => {
      ApiService
        .post('auth/sessions/login', {
          username,
          password
        })
        .then(({data}) => {
          store.commit('SET_AUTH', data.user)
          resolve(data)
        })
        .catch(({response}) => {
          store.commit('SET_ERROR', response.data.errors)
        })
    })
  },
  LOGOUT (store) {
    return new Promise((resolve, reject) => {
      ApiService
        .post('auth/sessions/logouts', {
        })
        .then(({data}) => {
          store.commit('PURGE_AUTH')
          resolve(data)
        })
        .catch(({response}) => {
          store.commit('SET_ERROR', response.data.errors)
        })
    })
  },
  REGISTER (store, username, email, password) {
    return new Promise((resolve, reject) => {
      ApiService
        .post('auth/users', {
          username,
          email,
          password
        })
        .then(({data}) => {
          store.commit('SET_AUTH', data.user)
          resolve(data)
        })
        .catch(({response}) => {
          store.commit('SET_ERROR', response.data.errors)
        })
    })
  }
}

const mutations = {
  SET_ERROR (state, error) {
    state.errors = error
  },
  SET_AUTH (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
  },
  PURGE_AUTH (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
