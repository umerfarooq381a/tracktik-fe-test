import type { Site } from '@/types/models'
import { constructUrl, type QueryProps } from '@/utils/url'

export const fetchSites = (query: QueryProps): Promise<{ data: Site[]; link?: string }> => {
  const url = constructUrl('sites', query)
  return fetch(url).then(async (response) => {
    const link = response.headers.get('Link')
    const data = await response.json()
    return { data: data, link: link ?? undefined }
  })
}

export const fetchSiteById = (id: string): Promise<Site> => {
  const url = constructUrl(`sites/${id}`)
  return fetch(url).then((response) => {
    if (response.status !== 200) {
      return Promise.resolve(undefined)
    }
    return response.json()
  })
}
