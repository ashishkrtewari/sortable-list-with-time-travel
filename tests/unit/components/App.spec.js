import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App'
import PostList from '@/components/PostList'
import TimeTravel from '@/components/TimeTravel'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('PostItem Component as Child', () => {
  it('List contains PostItem Component', () => {
    const wrapper = shallowMount(App, { localVue })

    expect(wrapper.find(PostList).exists()).toStrictEqual(true)
    expect(wrapper.find(TimeTravel).exists()).toStrictEqual(true)
  })
})
