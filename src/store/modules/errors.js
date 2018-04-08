const state = {
  errors: []
}

const getters = {}

const actions = {}

const mutations = {
  SHOW_ERROR (state, error) {
    console.log(error, typeof error)
    state.errors.push(error)
  },
  REMOVE_ERROR (state, i) {
    state.errors.splice(i)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
