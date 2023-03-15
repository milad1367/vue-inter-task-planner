<script setup lang="ts">
defineProps<{
  title: string
  description: string
  estimateTime: string
  attachments: string
}>()
</script>

<template>
  <v-card class="my-2" width="380">
    <p class="text-h6">title:{{ title }}</p>
    <p class="text-h6">description:{{ description }}</p>
    <p class="text-h6">estimateTime:{{ estimateTime }}</p>
    <p class="text-h6">attachments:{{ attachments }}</p>
  </v-card>
</template>
<style scoped></style>
