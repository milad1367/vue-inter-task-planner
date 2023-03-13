<script setup lang="ts">
import { ref } from 'vue'
import TaskCm from './TaskCm.vue'

defineProps<{
  title: string
}>()
const percent = ref(50)
const done = ref(1)
const all = ref(3)
</script>

<template>
  <v-card
    :title="title + `(${done}/${all})(${percent}%)`"
    class="d-flex align-center flex-column"
    width="400"
  >
    <TaskCm
      title="Task"
      attachments="attachments"
      estimate-time="estimate-time"
      description="description"
    />
  </v-card>
</template>
<style scoped>
/* TODO style hast effect on TaskCm */
:deep(.v-card) {
  text-align: center;
}
</style>
