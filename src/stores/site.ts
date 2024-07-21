import { defineStore } from 'pinia'
import type { Site } from '@/types/models'
import { fetchSiteById } from '@/services/http'

export const useSiteStore = defineStore<
  string,
  { loading: boolean; data?: Site },
  {},
  { fetchData: (id: string) => void }
>('site', {
  state: () => {
    return {
      loading: false,
      data: undefined
    }
  },
  actions: {
    fetchData(id: string) {
      this.loading = true

      fetchSiteById(id)
        .then((data) => {
          this.data = data
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
})
