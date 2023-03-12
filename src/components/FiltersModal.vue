<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  active: boolean
}>()
const emit = defineEmits(['onClose'])
const open = ref(props.active)
function onClose() {
  emit('onClose')
}
watch(props, () => (open.value = props.active))
watch(open, (next, prev) => {
  if (next === false && prev === true) {
    emit('onClose') // TODO, it happens when we fire close button too!
  }
})
</script>
<template>
  <div class="text-center">
    <v-dialog v-model="open" width="auto">
      <v-card>
        <v-card-text> Filters </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="onClose">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
