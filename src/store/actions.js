import { cloneDeep } from 'lodash'

export default {
  getPosts ({ commit }) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => {
        commit('SAVE_POSTS', posts.slice(0, 5))
      })
  },
  reOrderPosts ({ commit, state }, { index, direction }) {
    const posts = cloneDeep(state.posts)
    const initialPosts = cloneDeep(state.posts)
    const clickedPost = posts[index]
    let newIndex

    if (direction) {
      newIndex = index - 1
    } else {
      newIndex = index + 1
    }
    const postToMove = posts[newIndex]

    posts[newIndex] = clickedPost
    posts[index] = postToMove
    this.dispatch('updateChangesList', { post: clickedPost, posts: initialPosts, index, newIndex })
    commit('SAVE_POSTS', posts)
  },
  updateChangesList ({ commit }, { post, posts, index, newIndex }) {
    const newEntry = {
      posts,
      message: `Moved "Post ${post.id}" from index ${index} to index ${newIndex}`,
      timestamp: Date.now()
    }
    commit('UPDATE_CHANGES_LIST', newEntry)
  },
  timeTravel ({ commit, state }, { index }) {
    const changes = cloneDeep(state.changesList)
    const timeTravelToPosts = changes[index].posts
    const reversedChanges = changes.reverse()
    reversedChanges.splice((reversedChanges.length - index - 1), (index + 1))

    commit('SAVE_POSTS', timeTravelToPosts)
    commit('SAVE_CHANGES_LIST', reversedChanges.reverse())
  }
}
