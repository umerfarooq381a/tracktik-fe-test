import { API_BASE_URL } from '@/constants'

export type QueryProps = {
  page: number
  limit: number
  order: string
  search?: {
    key: string
    value: string
  }
}

export const constructQueryParams = (query: Partial<QueryProps>): string => {
  const queryParams = []

  const { page, limit, order, search } = query

  if (page) {
    queryParams.push(`_page=${page}`)
  }

  if (limit) {
    queryParams.push(`_limit=${limit}`)
  }

  if (order) {
    queryParams.push(`_sort=createdAt&_order=${order}`)
  }

  if (search && search.value) {
    queryParams.push(`${search.key}=${search.value}`)
  }

  return queryParams.join('&')
}

export const constructUrl = (endpoint: string, query?: Partial<QueryProps>) => {
  let url = `${API_BASE_URL}/${endpoint}`

  if (!query) return url

  const queryParams = constructQueryParams(query)

  if (queryParams.length) {
    url += `?${queryParams}`
  }

  return url
}

export const extractLinks = (header?: string): string[] => {
  if (!header) return []

  return header
    .split(',')
    .map((link) => {
      return link.split(';').at(0)?.trim().slice(1, -1) ?? ''
    })
    .filter(Boolean)
}

export const extractQueryParams = (url?: string): URLSearchParams => {
  if (!url) return new URLSearchParams()

  const link = new URL(url)
  return new URLSearchParams(link.search)
}
