import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TimeTravel from '@/components/TimeTravel'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Time Travel Action Dispatch', () => {
  let actions
  let getters
  let store

  beforeEach(() => {
    actions = {
      timeTravel: jest.fn()
    }
    getters = {
      changesList: jest.fn().mockReturnValue([
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
      ])
    }
    store = new Vuex.Store({
      actions,
      getters
    })
  })

  it('dispatches "timeTravel" when click event is fired on button', () => {
    const wrapper = shallowMount(TimeTravel, { store, localVue })
    const button = wrapper.find('button')

    button.element.value = 'button'
    button.trigger('click')

    expect(actions.timeTravel).toHaveBeenCalled()
  })
})
