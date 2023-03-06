<script setup lang="ts">
import AddTaskAndFilters from '@/components/AddTaskAndFilters.vue'
import ProgressBar from '@/components/ProgressBar.vue'
</script>

<template>
  <main class="home-container">
    <ProgressBar />
    <AddTaskAndFilters />
  </main>
</template>
<style scoped>
.home-container > div {
  margin: 1rem 0;
}
</style>
