import Vue from 'vue'
import Vuex from 'vuex'
import actions from '@/store/actions'
import mutations from '@/store/mutations'

Vue.use(Vuex)

describe('actions', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        posts: [
          {
            id: '1',
            userId: '1',
            title: 'post 1',
            body: 'post 1 body'
          },
          {
            id: '2',
            userId: '2',
            title: 'post 2',
            body: 'post 2 body'
          }
        ],
        changesList: [
          {
            posts: [
              {
                id: '2',
                userId: '2',
                title: 'post 2',
                body: 'post 2 body'
              },
              {
                id: '1',
                userId: '1',
                title: 'post 1',
                body: 'post 1 body'
              }
            ],
            message: 'Moved "Post from index  to index',
            timestamp: 1234567
          },
          {
            posts: [
              {
                id: '1',
                userId: '1',
                title: 'post 1',
                body: 'post 1 body'
              },
              {
                id: '2',
                userId: '2',
                title: 'post 2',
                body: 'post 2 body'
              }
            ],
            message: 'Moved "Post from index  to index',
            timestamp: 1234567
          },
          {
            posts: [
              {
                id: '1',
                userId: '1',
                title: 'post 1',
                body: 'post 1 body'
              },
              {
                id: '2',
                userId: '2',
                title: 'post 2',
                body: 'post 2 body'
              }
            ],
            message: 'Moved "Post from index  to index',
            timestamp: 1234567
          },
          {
            posts: [
              {
                id: '2',
                userId: '2',
                title: 'post 2',
                body: 'post 2 body'
              },
              {
                id: '1',
                userId: '1',
                title: 'post 1',
                body: 'post 1 body'
              }
            ],
            message: 'Moved "Post from index  to index',
            timestamp: 1234567
          }
        ]
      },
      mutations: mutations,
      actions: {
        getPosts: actions.getPosts,
        reOrderPosts: actions.reOrderPosts,
        updateChangesList: actions.updateChangesList,
        timeTravel: actions.timeTravel
      }
    })
  })

  it('reOrderPost', () => {
    const index = 0
    const direction = false

    store.dispatch('reOrderPosts', { index, direction })

    expect(store.state.posts[0].id).toBe('2')
  })

  it('updateChangesList', () => {
    const post = store.state.posts[0]
    const posts = store.state.posts
    const index = 0
    const newIndex = 1

    store.dispatch('updateChangesList', { post, posts, index, newIndex })

    expect(store.state.changesList[0].posts[0].id).toBe('1')
  })

  it('timeTravel', () => {
    const index = 2

    store.dispatch('timeTravel', { index })

    expect(store.state.changesList[0].posts[0].id).toBe('2')
    expect(store.state.changesList.length).toBe(1)
    expect(store.state.posts[0].id).toBe('1')
  })
})
