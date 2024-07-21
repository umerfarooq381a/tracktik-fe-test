<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-center p-3">
    <Skeleton class="h-9 w-9 rounded-full" />
    <div class="ml-4 space-y-1">
      <Skeleton class="h-[17px] w-[150px]" />
      <Skeleton class="h-[17px] w-[250px]" />
    </div>
  </div>
</template>