import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NotFoundComponent from '../site/SiteNotFound.vue'

// Mock the useRouter
const mockRouter = {
  go: vi.fn(),
  currentRoute: {},
  options: {},
  listening: false,
  addRoute: vi.fn(),
  back: vi.fn(),
  beforeEach: vi.fn(),
  beforeResolve: vi.fn(),
  beforeRouteEnter: vi.fn(),
  beforeRouteLeave: vi.fn(),
  beforeRouteUpdate: vi.fn(),
  getMatchedComponents: vi.fn(),
  getRoutes: vi.fn(),
  hasRoute: vi.fn(),
  isReady: vi.fn(),
  onError: vi.fn(),
  onReady: vi.fn(),
  push: vi.fn(),
  redirect: vi.fn(),
  removeRoute: vi.fn(),
  replace: vi.fn(),
  resolve: vi.fn(),
  scrollBehavior: vi.fn(),
  viewports: {},
  watch: vi.fn()
}

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter
}))

describe('NotFoundComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(NotFoundComponent, {
      props: {
        id: 'mnehahWGuv'
      }
    })
    expect(wrapper.text()).toContain('404')
    expect(wrapper.text()).toContain('Site not found')
    expect(wrapper.text()).toContain('Site ID (mnehahWGuv) might be incorrect.')
    expect(wrapper.find('header').classes()).toContain('bg-orange-500')

    const h3Classes = wrapper.find('h3').classes()
    expect(h3Classes).toContain('font-bold')
    expect(h3Classes).toContain('text-center')
    expect(h3Classes).toContain('text-white')
  })

  it('calls router.go(-1) when Go Back button is clicked', async () => {
    const wrapper = mount(NotFoundComponent, {
      props: {
        id: 'mnehahWGuv'
      }
    })

    await wrapper.find('button').trigger('click')
    expect(mockRouter.go).toHaveBeenCalledWith(-1)
  })
})
