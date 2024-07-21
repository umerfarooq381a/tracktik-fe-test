import { describe, it, expect } from 'vitest'
import { constructQueryParams, constructUrl, extractLinks, extractQueryParams } from '../url'
import { API_BASE_URL } from '@/constants'

describe('constructQueryParams()', () => {
  it('should construct query params properly', () => {
    const queryParams = constructQueryParams({
      page: 1,
      limit: 10,
      order: 'asc',
      search: {
        key: 'field',
        value: 'value'
      }
    })

    expect(queryParams).toBe('_page=1&_limit=10&_sort=createdAt&_order=asc&field=value')
  })

  it('should exclude missing properties from query params', () => {
    const queryParams = constructQueryParams({
      page: 1,
      limit: 10,
      search: {
        key: 'field',
        value: 'value'
      }
    })

    expect(queryParams).toBe('_page=1&_limit=10&field=value')
  })
})

describe('constructUrl()', () => {
  it('should construct URL properly', () => {
    const query = {
      page: 1,
      limit: 10,
      search: {
        key: 'field',
        value: 'value'
      }
    }

    const url = constructUrl('sites', query)
    expect(url).toBe(`${API_BASE_URL}/sites?_page=1&_limit=10&field=value`)
  })
})

describe('extractLinks()', () => {
  it('should extract Links from Link header properly', () => {
    const linkHeader = `<http://tracktik-challenge.staffr.com/sites?_page=1&_limit=10&_sort=createdAt&_order=desc>; rel="first", <http://tracktik-challenge.staffr.com/sites?_page=2&_limit=10&_sort=createdAt&_order=desc>; rel="next", <http://tracktik-challenge.staffr.com/sites?_page=171&_limit=10&_sort=createdAt&_order=desc>; rel="last"`

    const links = extractLinks(linkHeader)
    expect(links.length).toBe(3)
    expect(links[0]).toBe(
      'http://tracktik-challenge.staffr.com/sites?_page=1&_limit=10&_sort=createdAt&_order=desc'
    )
    expect(links[1]).toBe(
      'http://tracktik-challenge.staffr.com/sites?_page=2&_limit=10&_sort=createdAt&_order=desc'
    )
    expect(links[2]).toBe(
      'http://tracktik-challenge.staffr.com/sites?_page=171&_limit=10&_sort=createdAt&_order=desc'
    )
  })
})

describe('extractQueryParams()', () => {
  it('should extract query params from url', () => {
    const linkHeader = `http://tracktik-challenge.staffr.com/sites?_page=171&_limit=10&_sort=createdAt&_order=desc`

    const queryParams = extractQueryParams(linkHeader)
    expect(queryParams.get('_page')).toBe('171')
  })
})
