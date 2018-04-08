import ApiService from '@/api/ApiService'

const state = {
  currentCategory: 'new',
  nextCursor: '',
  posts: []
}

const actions = {
  async LOAD_NEW_POSTS (store) {
    let data = await ApiService.get(
      '/blog/posts',
      `new?after=${encodeURIComponent(store.state.nextCursor)}`
    )
    store.commit('ADD_POSTS', data.data)
  }
}

const mutations = {
  SET_CURRENT_CATEGORY (state, newCat) {
    state.currentCategory = newCat
  },
  ADD_POSTS (state, { posts, nextCursor = '' }) {
    state.posts = [...state.posts, ...posts]
    state.nextCursor = nextCursor
  },
  CLEAR_POSTS (state) {
    state.posts = []
    state.nextCursor = ''
  }
}

const getters = {
  currentCategory: state => state.currentCategory,
  posts: state => state.posts
}

export default {
  actions,
  state,
  mutations,
  getters
}
