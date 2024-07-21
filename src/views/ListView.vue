<script setup lang="ts">
import { computed, onBeforeMount, ref, watch } from 'vue'
import { useSitesStore } from "@/stores/sites"
import SingleSite from '@/components/site/SingleSite.vue'
import SingleSiteSkeleton from '@/components/site/SingleSiteSkeleton.vue';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import SelectContent from '@/components/ui/select/SelectContent.vue';
import { constructQueryParams, type QueryProps } from '@/utils/url';
import debounce from 'lodash.debounce'
import { useRouter, useRoute } from 'vue-router';
import NoDataFound from '@/components/site/NoDataFound.vue';

const route = useRoute();
const router = useRouter()

const page = ref(Number(route.query._page ?? 1))
const limit = ref(Number(route.query._limit ?? 10))
const search = ref(String(route.query.title_like ?? ''))
const order = ref(String(route.query._order ?? 'desc'));
const sites = useSitesStore()

const fetchSitesData = (query: Partial<QueryProps>) => {
  const newQuery = {
    page: page.value,
    limit: limit.value,
    order: order.value,
    search: {
      key: 'title_like',
      value: search.value.trim()
    },
    ...query
  }
  const queryParams = constructQueryParams(newQuery)
  router.push(`/?${queryParams}`)
  sites.fetchData(newQuery)
}

onBeforeMount(() => {
  fetchSitesData({})
})

watch(search, debounce((newValue: string) => {
  if (page.value !== 1) {
    // this will trigger fetchSitesData() as we are watching changes to page ref
    page.value = 1
  } else {
    fetchSitesData({ search: { key: 'title_like', value: newValue.trim() } })
  }
}, 750))

watch(order, (newValue: string) => {
  if (page.value !== 1) {
    // this will trigger fetchSitesData() as we are watching changes to page ref
    page.value = 1
  } else {
    fetchSitesData({ order: newValue })
  }
})

watch(page, (newValue: number) => {
  fetchSitesData({ page: newValue })
})

const handleFirstClick = () => page.value = 1

const handlePrevClick = () => page.value -= 1

const handleNextClick = () => page.value += 1

const handleLastClick = () => page.value = sites.lastPage

const disableFirst = computed(() => {
  return sites.data.length === 0 || page.value === 1
})

const disablePrev = computed(() => {
  return sites.data.length === 0 || page.value < 2
})

const disableNext = computed(() => {
  return sites.data.length === 0 || page.value >= sites.lastPage
})

const disableLast = computed(() => {
  return sites.data.length === 0 || page.value === sites.lastPage
})

</script>

<template>
  <header class="p-3 bg-green-500 h-[52px]">
    <h3 class="font-bold text-center text-white">List of sites</h3>
  </header>
  <div class="flex">
    <Input placeholder="Search by title..." class="rounded-r-none rounded-t-none focus:ring-0" v-model="search" />
    <Select v-model="order">
      <SelectTrigger class="w-[150px] rounded-l-none rounded-t-none">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="desc">
            Latest
          </SelectItem>
          <SelectItem value="asc">
            Oldest
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <section>
    <div v-if="sites.loading">
      <SingleSiteSkeleton v-for="n in limit" :key="n" />
    </div>
    <div v-else-if="sites.data.length !== 0">
      <SingleSite v-for="site of sites.data" :key="site.id" :site="site" />
    </div>
    <div v-else>
      <NoDataFound />
    </div>
    <Separator class="my-2" />
    <div class="flex justify-between items-center px-3">
      <Button :disabled="disableFirst" @click="handleFirstClick" size="xs">First</Button>
      <Button :disabled="disablePrev" @click="handlePrevClick" size="xs">Prev</Button>
      <span>Page: {{ page }} / {{ sites.lastPage || 1 }}</span>
      <Button :disabled="disableNext" @click="handleNextClick" size="xs">Next</Button>
      <Button :disabled="disableLast" @click="handleLastClick" size="xs">Last</Button>
    </div>
  </section>
</template>
