<script setup lang="ts">
import type { Site } from "@/types/models"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, MapPin, Phone, User } from "lucide-vue-next";
import { useRouter } from "vue-router";
import Avatar from "@/components/ui/avatar/Avatar.vue";
import { AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import SiteDataPoint from "./SiteDataPoint.vue";
import { constructFullAddress } from "@/utils/address";
const props = defineProps<{
  site: Site
}>()

const router = useRouter()
const { title, images, contacts } = props.site
const { firstName, lastName, phoneNumber, email, jobTitle, address } = contacts.main
const fullAddress = constructFullAddress(address)
</script>

<template>
  <header class="flex justify-between items-center p-3 bg-green-500">
    <Button @click="router.go(-1)" size="xs">
      <ArrowLeft />
    </Button>
    <h3 class="font-bold text-center text-white">{{ title }}</h3>
    <div class="w-[40px]"></div>
  </header>
  <section class="space-y-5">
    <Avatar class="object-cover h-60 w-full rounded-none">
      <AvatarImage :src="images[0]" />
      <AvatarFallback>
        <Skeleton class="h-60 w-full bg-gray-200" />
      </AvatarFallback>
    </Avatar>
    <div class="space-y-5">
      <SiteDataPoint>
        <template v-slot:icon>
          <User />
        </template>
        <p class="font-bold">{{ firstName }} {{ lastName }}</p>
        <p>{{ jobTitle }}</p>
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <Phone />
        </template>
        {{ phoneNumber }}
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <Mail />
        </template>
        <p>{{ email }}</p>
      </SiteDataPoint>
      <SiteDataPoint>
        <template v-slot:icon>
          <MapPin />
        </template>
        <p>{{ fullAddress }}</p>
      </SiteDataPoint>
    </div>
  </section>
</template>
