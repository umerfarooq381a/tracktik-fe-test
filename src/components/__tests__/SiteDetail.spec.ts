import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SiteDetails from '../site/SiteDetail.vue'

const mockSite = {
  id: 'mnehahWGuv',
  clientId: 'Ymc6c8H_ARB4K',
  title: 'Sports HQ',
  createdAt: 'Sun Oct 08 2023 23:25:58 GMT+0000 (Coordinated Universal Time)',
  updatedAt: 'Fri Jan 12 2024 09:17:44 GMT+0000 (Coordinated Universal Time)',
  contacts: {
    main: {
      id: 'CY0kzH__lS',
      firstName: 'Kyle',
      lastName: 'Beier',
      email: 'Maxine_Mosciski63@yahoo.com',
      phoneNumber: '1-451-188-8806',
      jobTitle: 'Lead Security Analyst',
      address: {
        zipCode: '79453-1200',
        city: 'Hilllberg',
        street: '3333 Cedrick Meadows',
        country: 'China',
        state: 'Idaho'
      }
    }
  },
  address: {
    zipCode: '16169-9056',
    city: 'West Leopold',
    street: '044 Haag Corners',
    country: 'Japan',
    state: 'Louisiana'
  },
  images: [
    'https://picsum.photos/seed/AuYAmj9HvJ/640/480',
    'https://picsum.photos/seed/Uz7X0QQDDL/640/480'
  ],
  tags: ['old', 'company']
}

const mockRouter = {
  go: vi.fn()
}

vi.mock('vue-router', () => ({
  useRouter: () => mockRouter
}))

describe('SiteDetails', () => {
  it('renders properly', () => {
    const wrapper = mount(SiteDetails, {
      props: {
        site: mockSite
      }
    })
    expect(wrapper.text()).toContain('Sports HQ')
    expect(wrapper.text()).toContain('Kyle Beier')
    expect(wrapper.text()).toContain('Lead Security Analyst')
    expect(wrapper.text()).toContain('1-451-188-8806')
    expect(wrapper.text()).toContain('Maxine_Mosciski63@yahoo.com')
    expect(wrapper.text()).toContain('3333 Cedrick Meadows, Hilllberg, Idaho, China, 79453-1200')
  })

  it('goes back when the back button is clicked', async () => {
    const wrapper = mount(SiteDetails, {
      props: {
        site: mockSite
      }
    })
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(mockRouter.go).toHaveBeenCalledWith(-1)
  })
})
