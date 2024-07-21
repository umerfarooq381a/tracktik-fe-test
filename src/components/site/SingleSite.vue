<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import type { Site } from "@/types/models"
import { Skeleton } from "../ui/skeleton";
defineProps<{
  site: Site
}>()
</script>

<template>
  <RouterLink :to="`/${site.id}`">
    <div class="flex items-center p-3 hover:bg-slate-100 hover:cursor-pointer hover:shadow">
      <Avatar class="h-9 w-9">
        <AvatarImage :src="site.images[0]" alt="Avatar" />
        <AvatarFallback>
          <Skeleton class="h-9 w-9 rounded-full" />
        </AvatarFallback>
      </Avatar>
      <div class="ml-4 space-y-1">
        <p class="text-sm font-medium leading-none">
          {{ site.title }}
        </p>
        <p class="text-sm text-muted-foreground">
          {{ site.contacts.main.jobTitle }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
