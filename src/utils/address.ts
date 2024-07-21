import type { Address } from '@/types/models'

export const constructFullAddress = (address: Partial<Address>): string => {
  const { city, country, zipCode, state, street } = address

  return [street, city, state, country, zipCode].filter(Boolean).join(', ')
}
