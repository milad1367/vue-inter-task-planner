<script setup lang="ts">
import { ref } from 'vue'

const power = ref(78)
</script>

<template>
  <div class="container">
    <h1><strong>Progress</strong></h1>
    <v-progress-linear v-model="power" color="amber" height="25">
      <strong>{{ Math.ceil(power) }}%(Done 1 out of 2)</strong>
    </v-progress-linear>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid rgb(242, 242, 242);
  border-radius: 5px;
  padding: 1rem;
}
</style>
