import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PostList from '@/components/PostList'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('PostItem Component as Child', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    actions = {
      getPosts: jest.fn()
    }
    state = {
      posts: jest.fn().mockReturnValue([
        {
          id: '1',
          userId: '1',
          title: 'post 1',
          body: 'post 1 body'
        }
      ]),
      error: true,
      statusMessage: 'Loading...'
    }
    store = new Vuex.Store({
      actions,
      state
    })
  })

  it('getPosts is called on retrying fetch posts', () => {
    const wrapper = shallowMount(PostList, { store, localVue })

    const button = wrapper.find('button')

    button.element.value = 'button'
    button.trigger('click')

    expect(actions.getPosts).toHaveBeenCalled()
  })
})
