import ApiService from '@/api/ApiService'

const state = {
  errors: null,
  user: {},
  isAuthenticated: false,
  otherUuser: {}
}

const getters = {
  currentUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  async LOGIN (store, {username, password}) {
    try {
      const response = await ApiService
        .post('auth/sessions/login', {
          username: username,
          password: password
        })
      store.commit('SET_AUTH', response.data)
    } catch (err) {
      store.commit('SET_ERROR', err)
    }
  },
  async LOGOUT (store) {
    try {
      await ApiService
        .post('auth/sessions/logouts', {
        })
      store.commit('PURGE_AUTH')
    } catch (err) {
      store.commit('SET_ERROR', err)
    }
  },
  async REGISTER (store, {username, email, password}) {
    try {
      const response = await ApiService
        .post('auth/users', {
          username: username,
          email: email,
          password: password
        })
      store.commit('SET_AUTH', response.data)
    } catch (err) {
      store.commit('SET_ERROR', err)
    }
  },
  async LOAD_USER_BY_ID (store, {id}) {
    try {
      const response = await ApiService
        .get('auth/users', id)
        .then(({data}) => {
          store.commit('GET_USER_BY_ID', response.data)
        })
    } catch (err) {
      store.commit('SET_ERROR', err)
    }
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
  GET_USER_BY_ID (state, otherUuser) {
    state.otherUuser = otherUuser
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
