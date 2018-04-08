import ApiService from '@/api/ApiService'

const state = {
  user: {},
  isAuthenticated: false,
  otherUuser: {}
}

const getters = {
  currentUser: state => state.user,
  currentUserID: state => state.user.userID,
  isAuthenticated: state => state.isAuthenticated
}

const actions = {
  async LOGIN (store, { username, password }) {
    try {
      const response = await ApiService.post('auth/sessions/login', {
        username: username,
        password: password
      })
      localStorage.setItem('auth', JSON.stringify(response.data))
      store.commit('SET_AUTH', response.data)
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async LOGOUT (store) {
    try {
      ApiService.setHeader()
      await ApiService.post('auth/sessions/logout', {})
      store.commit('PURGE_AUTH')
      localStorage.removeItem('auth')
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async REGISTER (store, { username, email, password }) {
    try {
      const response = await ApiService.post('auth/users', {
        username: username,
        email: email,
        password: password
      })
      store.commit('SET_AUTH', response.data)
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async LOAD_USER_BY_ID (store, { id }) {
    try {
      const response = await ApiService.get('auth/users', id).then(
        ({ data }) => {
          store.commit('GET_USER_BY_ID', response.data)
        }
      )
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  LOAD_AUTH_FROM_LOCAL_STORAGE (store) {
    if (localStorage.getItem('auth')) {
      store.commit('SET_AUTH', JSON.parse(localStorage.getItem('auth')))
    }
  }
}

const mutations = {
  SET_AUTH (state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
  },
  GET_USER_BY_ID (state, otherUser) {
    state.otherUuser = otherUser
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
