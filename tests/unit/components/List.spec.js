import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '@/components/PostList'
import PostItem from '@/components/PostItem'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('PostItem Component as Child', () => {
  it('List contains PostItem Component', () => {
    const wrapper = shallowMount(List, { localVue })

    expect(wrapper.find(PostItem).exists()).toStrictEqual(true)
  })
})
