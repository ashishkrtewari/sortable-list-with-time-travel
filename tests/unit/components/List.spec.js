import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import List from '@/components/List'
import ListItem from '@/components/ListItem'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ListItem Component as Child', () => {
  it('List contains ListItem Component', () => {
    const wrapper = shallowMount(List, { localVue })

    expect(wrapper.find(ListItem).exists()).toStrictEqual(true)
  })
})
