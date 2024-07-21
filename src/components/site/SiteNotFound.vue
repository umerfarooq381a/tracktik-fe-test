<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { Button } from '../ui/button';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { useRouter } from 'vue-router';

defineProps<{
  id: string
}>()

const router = useRouter()

</script>

<template>
  <header class="p-3 bg-orange-500">
    <h3 class="font-bold text-center text-white">404</h3>
  </header>
  <Alert>
    <AlertCircle class="w-4 h-4" />
    <AlertTitle>Site not found</AlertTitle>
    <AlertDescription>
      Site ID ({{ id }}) might be incorrect.
    </AlertDescription>
  </Alert>
  <footer class="p-3 flex justify-center">
    <Button @click="router.go(-1)" size="sm">
      Go Back
    </Button>
  </footer>
</template>
