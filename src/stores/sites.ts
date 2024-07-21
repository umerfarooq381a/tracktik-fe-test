import { defineStore } from 'pinia'
import type { Site } from '@/types/models'
import { extractLinks, extractQueryParams, type QueryProps } from '@/utils/url'
import { fetchSites } from '@/services/http'

export const useSitesStore = defineStore<
  string,
  { loading: boolean; data: Site[]; lastPage: number },
  {},
  { fetchData: (query: QueryProps) => void }
>('sites', {
  state: () => {
    return {
      loading: false,
      data: [],
      lastPage: 0
    }
  },
  actions: {
    fetchData(query: QueryProps) {
      this.loading = true

      fetchSites(query)
        .then(({ data, link }) => {
          this.data = data
          const urls = extractLinks(link)
          const lastPageLinkQueryParams = extractQueryParams(urls.at(-1))
          const lastPage = lastPageLinkQueryParams.get('_page')
          this.lastPage = lastPage ? Number(lastPage) : 0
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
})
