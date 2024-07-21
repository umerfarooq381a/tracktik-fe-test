<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

</script>

<template>
  <div class="my-2">
    <Alert>
      <AlertCircle class="w-4 h-4" />
      <AlertTitle>Try something else</AlertTitle>
      <AlertDescription>
        No site found for this search term
      </AlertDescription>
    </Alert>
  </div>
</template>
