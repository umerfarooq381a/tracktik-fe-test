<script setup lang="ts">
import { Mail, MapPin, Phone, User } from 'lucide-vue-next';
import SiteDataPoint from './SiteDataPoint.vue';
import { Skeleton } from '../ui/skeleton';
</script>
<template>
  <header class="flex justify-between items-center p-3 bg-gray-100">
    <Skeleton class="h-[28px] w-[40px] bg-gray-200" />

    <h3 class="font-bold text-center text-white">
      <Skeleton class="h-[28px] w-[200px] bg-gray-200" />
    </h3>
    <div class="w-[40px]"></div>
  </header>
  <section class="space-y-5">
    <Skeleton class="h-60 w-full bg-gray-300 rounded-none" />
    <div class="space-y-5">
      <SiteDataPoint>
        <template v-slot:icon>
          <User />
        </template>
        <div class="space-y-2">
          <Skeleton class="h-[20px] w-[150px]" />
          <Skeleton class="h-[20px] w-[250px]" />
        </div>
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <Phone />
        </template>
        <Skeleton class="h-[21px] w-[150px]" />
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <Mail />
        </template>
        <Skeleton class="h-[21px] w-[250px]" />
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <MapPin />
        </template>
        <Skeleton class="h-[21px] w-[450px]" />
      </SiteDataPoint>
    </div>
  </section>
</template>
