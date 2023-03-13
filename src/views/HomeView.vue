<script setup lang="ts">
import AddTaskAndFilters from '@/components/AddTaskAndFilters.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import BoardsView from './BoardsView.vue'
</script>

<template>
  <main class="home-container">
    <ProgressBar />
    <AddTaskAndFilters />
    <BoardsView />
  </main>
</template>
<style scoped>
.home-container > div {
  margin: 1rem 0;
}
</style>
