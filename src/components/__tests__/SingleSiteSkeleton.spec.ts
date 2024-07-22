import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SkeletonComponent from '../site/SingleSiteSkeleton.vue'

describe('SkeletonComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(SkeletonComponent)

    // Check if the Skeleton components are rendered correctly
    const skeletons = wrapper.findAllComponents({ name: 'Skeleton' })
    expect(skeletons.length).toBe(3)

    // Check specific skeleton classes
    expect(skeletons[0].classes()).toContain('h-9')
    expect(skeletons[0].classes()).toContain('w-9')
    expect(skeletons[0].classes()).toContain('rounded-full')

    expect(skeletons[1].classes()).toContain('h-[17px]')
    expect(skeletons[1].classes()).toContain('w-[150px]')

    expect(skeletons[2].classes()).toContain('h-[17px]')
    expect(skeletons[2].classes()).toContain('w-[250px]')
  })
})
