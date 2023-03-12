<script setup lang="ts">
import { ref } from 'vue'
import CreateTaskModal from './CreateTaskModal.vue'
import FiltersModal from './FiltersModal.vue'

const open = ref(false)
const openFilters = ref(false)
function onClose() {
  open.value = false
}

function onOpen() {
  open.value = true
}
</script>

<template>
  <div class="d-flex flex-row-reverse">
    <v-btn @click="onOpen" class="ma-2 pa-2" variant="outlined" color="primary"> Add Task </v-btn>
    <v-btn @click="openFilters = true" class="ma-2 pa-2" variant="outlined" color="primary">
      Search & Filters
    </v-btn>
  </div>
  <CreateTaskModal @onClose="onClose" :active="open"></CreateTaskModal>
  <FiltersModal @onClose="openFilters = false" :active="openFilters"></FiltersModal>
</template>

<style lang="scss" scoped></style>
