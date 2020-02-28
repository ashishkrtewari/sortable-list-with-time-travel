export default {
  SAVE_POSTS (state, payload) {
    state.posts = payload
  },
  UPDATE_CHANGES_LIST (state, payload) {
    state.changesList.unshift(payload)
  },
  SAVE_CHANGES_LIST (state, payload) {
    state.changesList = payload
  },
  SET_ERROR (state, payload) {
    state.error = payload
  },
  SET_STATUS_MESSAGE (state, payload) {
    state.statusMessage = payload
  }
}
