import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './../store'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = process.env.API_BASE_URL
    Vue.axios.defaults.headers['content-type'] = `application/json`
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${store.getters.currentUser.token}`
    console.log(`Bearer ${store.getters.currentUser.token}`)
  },

  query (path, params) {
    return Vue.axios
      .get(path, params)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  get (path, data = '') {
    return Vue.axios
      .get(`${path}/${data}`)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  post (path, params) {
    return Vue.axios
      .post(`${path}`, params)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  update (path, data, params) {
    return Vue.axios
      .put(`${path}/${data}`, params)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  put (path, params) {
    return Vue.axios
      .put(`${path}`, params)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  },

  delete (path) {
    return Vue.axios
      .delete(path)
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  }
}

export default ApiService
