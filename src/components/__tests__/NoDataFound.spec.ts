import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NoSiteFoundAlert from '../site/NoDataFound.vue'

describe('NoSiteFoundAlert', () => {
  it('renders properly', () => {
    const wrapper = mount(NoSiteFoundAlert)
    expect(wrapper.text()).toContain('Try something else')
    expect(wrapper.text()).toContain('No site found for this search term')
    expect(wrapper.find('svg').exists()).toBe(true)
  })
})
