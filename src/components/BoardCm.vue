<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  title: string
}>()
const percent = ref(50)
const done = ref(1)
const all = ref(3)
</script>

<template>
  <v-card :title="title + `(${done}/${all})(${percent}%)`" class="mx-auto" width="400"> </v-card>
</template>
<style scoped>
:deep(.v-card-title) {
  text-align: center;
}
</style>
