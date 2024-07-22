import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Component from '../site/SiteDetailSkeleton.vue'
import SiteDataPoint from '../site/SiteDataPoint.vue'
import Skeleton from '../ui/skeleton/Skeleton.vue'

describe('Component', () => {
  it('renders properly', () => {
    const wrapper = mount(Component, {
      global: {
        components: {
          SiteDataPoint,
          Skeleton
        }
      }
    })

    // Check if the header is rendered
    expect(wrapper.find('header').exists()).toBe(true)

    // Check if the Skeleton components are rendered in the header
    const headerSkeletons = wrapper.findAllComponents(Skeleton)
    expect(headerSkeletons.length).toBeGreaterThanOrEqual(2)

    // Check if the first Skeleton in the header has the expected height and width
    expect(headerSkeletons[0].attributes('class')).toContain('h-[28px]')
    expect(headerSkeletons[1].attributes('class')).toContain('w-[200px]')

    // Check if the section is rendered
    expect(wrapper.find('section').exists()).toBe(true)

    // Check if the large Skeleton in the section is rendered
    expect(wrapper.find('.h-60').exists()).toBe(true)

    // Check if the SiteDataPoint components are rendered
    const siteDataPoints = wrapper.findAllComponents(SiteDataPoint)
    expect(siteDataPoints.length).toBe(4)

    // Check if each SiteDataPoint contains the correct Skeletons
    expect(siteDataPoints[0].findAllComponents(Skeleton).length).toBe(2)
    expect(siteDataPoints[1].findComponent(Skeleton).exists()).toBe(true)
    expect(siteDataPoints[2].findComponent(Skeleton).exists()).toBe(true)
    expect(siteDataPoints[3].findComponent(Skeleton).exists()).toBe(true)
  })
})
