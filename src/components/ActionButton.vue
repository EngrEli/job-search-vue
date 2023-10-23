<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  text: String,
  isPrimary: Boolean
})

const buttonClass = computed(() => {
  return props.isPrimary ? 'primary' : 'secondary'
  // return { primary: props.isPrimary, secondary: !props.isPrimary }
})
</script>

<style scoped>
button {
  @apply bg-brand-blue-1 text-white hover:bg-blue-500 focus:ring active:bg-blue-500;
}

.primary {
  @apply rounded-md px-6 py-2;
}

.secondary {
  @apply rounded-full px-5 py-3;
}
</style>
