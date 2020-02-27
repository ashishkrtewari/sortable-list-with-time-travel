import mutations from '@/store/mutations'

// destructure assign `mutations`
const { SAVE_POSTS, UPDATE_CHANGES_LIST, SAVE_CHANGES_LIST } = mutations

describe('mutations', () => {
  let state

  beforeEach(() => {
    state = {
      posts: [],
      changesList: [
        {
          posts: [
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
    }
  })

  it('SAVE_POSTS', () => {
    const posts = [
      {
        id: '2',
        userId: '2',
        title: 'post 2',
        body: 'post 2 body'
      }
    ]

    SAVE_POSTS(state, posts)

    expect(state.posts.length).toBe(1)
  })

  it('UPDATE_CHANGES_LIST', () => {
    const changeEntry = {
      posts: [
        {
          id: '2',
          userId: '2',
          title: 'post 2',
          body: 'post 2 body'
        }
      ],
      message: 'Moved "Post from index  to index',
      timestamp: 1234567
    }

    UPDATE_CHANGES_LIST(state, changeEntry)

    expect(state.changesList[0].posts[0].id).toBe('2')
  })

  it('SAVE_CHANGES_LIST', () => {
    const changeList = [{
      posts: [
        {
          id: '2',
          userId: '2',
          title: 'post 2',
          body: 'post 2 body'
        }
      ],
      message: 'Moved "Post from index  to index',
      timestamp: 1234567
    }]

    SAVE_CHANGES_LIST(state, changeList)

    expect(state.changesList[0].posts[0].id).toBe('2')
    expect(state.changesList.length).toBe(1)
  })
})
