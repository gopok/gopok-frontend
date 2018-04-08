import ApiService from '@/api/ApiService'

const state = {
  currentCategory: 'new',
  nextCursor: '',
  posts: [],
  otherpost: {}
}

const actions = {
  async LOAD_NEW_POSTS (store) {
    try {
      const response = await ApiService.get(
        'blog/posts',
        `new?after=${encodeURIComponent(store.state.nextCursor)}`
      )
      store.commit('ADD_POSTS', response.data)
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async CREATE_NEW_POST (store, { content }) {
    try {
      ApiService.setHeader()
      let resp = await ApiService.post('blog/posts', { content: content })
      store.commit('ADD_POST_AT_START', resp.data)
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async LOAD_POST_BY_ID (store, { id }) {
    try {
      const response = await ApiService.get('blog/posts', id)
      store.commit('GET_POST_BY_ID', response.data)
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async CREATE_NEW_COMMENT_BY_ID (store, { id, content }) {
    try {
      ApiService.setHeader()
      await ApiService.post(`blog/posts/${id}/comments`, { content: content })
    } catch (err) {
      store.commit('SHOW_ERROR', err)
    }
  },
  async UPVOTE_POST (store, postID) {
    try {
      ApiService.setHeader()
      await ApiService.post(`blog/posts/${postID}/upvote`, {})
      store.commit('ADD_USER_TO_UPVOTERS', {
        postID,
        userID: store.rootState.auth.user.userID
      })
    } catch (err) {
      store.commit('SHOW_ERROR', err)
      throw err
    }
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
  ADD_POST_AT_START (state, post) {
    state.posts = [post, ...state.posts]
  },
  GET_POST_BY_ID (state, otherpost) {
    state.otherpost = otherpost
    state.errors = {}
  },
  CLEAR_POSTS (state) {
    state.posts = []
    state.nextCursor = ''
  },
  ADD_USER_TO_UPVOTERS (state, { postID, userID }) {
    state.posts.find(p => p.id === postID).upvoters.push(userID)
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
