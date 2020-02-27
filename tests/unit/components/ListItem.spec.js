import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ListItem from '@/components/ListItem'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('List Item Action Dispatch', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      getPosts: jest.fn(),
      reOrderPosts: jest.fn()
    }
    getters = {
      posts: jest.fn().mockReturnValue([
        {
          id: '1',
          userId: '1',
          title: 'post 1',
          body: 'post 1 body'
        }
      ])
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('dispatches "reOrderPost" when click event fired on "button"', () => {
    const wrapper = shallowMount(ListItem, { store, localVue })
    const button = wrapper.find('button')

    button.element.value = 'button'
    button.trigger('click')

    expect(actions.reOrderPosts).toHaveBeenCalled()
  })
})
