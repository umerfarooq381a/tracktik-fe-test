import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponentWithAvatar from '../site/SiteDataPoint.vue'

describe('ComponentWithAvatar', () => {
  it('renders default slot content properly', () => {
    const wrapper = mount(ComponentWithAvatar, {
      slots: {
        default: '<div class="default-slot-content">Default Slot Content</div>'
      }
    })
    expect(wrapper.html()).toContain('Default Slot Content')
  })

  it('renders icon slot content properly', () => {
    const wrapper = mount(ComponentWithAvatar, {
      slots: {
        icon: '<div class="icon-slot-content">Icon Slot Content</div>'
      }
    })
    expect(wrapper.html()).toContain('Icon Slot Content')
  })

  it('renders both slots content properly', () => {
    const wrapper = mount(ComponentWithAvatar, {
      slots: {
        default: '<div class="default-slot-content">Default Slot Content</div>',
        icon: '<div class="icon-slot-content">Icon Slot Content</div>'
      }
    })
    expect(wrapper.html()).toContain('Default Slot Content')
    expect(wrapper.html()).toContain('Icon Slot Content')
  })
})
