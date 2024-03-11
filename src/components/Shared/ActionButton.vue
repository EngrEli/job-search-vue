<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script setup>
import { ref, computed } from 'vue'

// props: ['text, type']

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  // return props.isPrimary ? 'primary' : 'secondary'
  // return {
  //   primary: props.type === 'primary',
  //   secondary: props.type === 'secondary'
  // }
  return {
    [props.type]: true
  }
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
  @apply rounded-full px-7 py-3;
}
</style>
