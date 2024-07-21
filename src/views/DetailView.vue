<script lang="ts" setup>
import { onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router"
import { useSiteStore } from "@/stores/site";
import SiteDetail from "@/components/site/SiteDetail.vue";
import SiteDetailSkeleton from "@/components/site/SiteDetailSkeleton.vue";
import SiteNotFound from "@/components/site/SiteNotFound.vue";

const route = useRoute()
const router = useRouter()
const site = useSiteStore()
const id = route.params.id as string

if (!id) {
  router.go(-1)
}

onBeforeMount(() => {
  site.fetchData(id)
})
</script>

<template>
  <div v-if="site.loading">
    <SiteDetailSkeleton />
  </div>
  <div v-else-if="site.data">
    <SiteDetail :site="site.data" />
  </div>
  <div v-else>
    <SiteNotFound :id="id" />
  </div>
</template>
