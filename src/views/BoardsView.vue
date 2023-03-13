<script setup lang="ts">
import BoardCm from '@/components/BoardCm.vue'
import { ref } from 'vue'
const boards = ref(['Pending', 'Processing', 'Done'])
</script>

<template>
  <v-row>
    <BoardCm v-for="board in boards" :key="board" :title="board"> </BoardCm>
  </v-row>
</template>
