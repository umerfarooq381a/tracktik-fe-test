<script setup lang="ts">
import { Avatar, AvatarFallback } from '../ui/avatar';
</script>

<template>
  <div class="flex space-x-3 items-center">
    <Avatar>
      <AvatarFallback>
        <slot name="icon"></slot>
      </AvatarFallback>
    </Avatar>
    <div class="flex flex-col text-sm">
      <slot></slot>
    </div>
  </div>
</template>
