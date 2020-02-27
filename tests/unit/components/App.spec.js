import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App'
import List from '@/components/List'
import TimeTravel from '@/components/TimeTravel'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('ListItem Component as Child', () => {
  it('List contains ListItem Component', () => {
    const wrapper = shallowMount(App, { localVue })

    expect(wrapper.find(List).exists()).toStrictEqual(true)
    expect(wrapper.find(TimeTravel).exists()).toStrictEqual(true)
  })
})
