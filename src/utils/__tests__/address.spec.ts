import { describe, it, expect } from 'vitest'
import { constructFullAddress } from '../address'

describe('constructFullAddress()', () => {
  it('should construct full address properly', () => {
    const fullAddress = constructFullAddress({
      street: '123 street',
      city: 'Gujrat',
      country: 'PK',
      state: 'Punjab',
      zipCode: '50700'
    })

    expect(fullAddress).toBe('123 street, Gujrat, Punjab, PK, 50700')
  })

  it('should exclude missing properties in address', () => {
    const fullAddress = constructFullAddress({
      street: '123 street',
      city: 'Gujrat',
      country: 'PK',
      state: 'Punjab'
    })

    expect(fullAddress).toBe('123 street, Gujrat, Punjab, PK')
  })
})
