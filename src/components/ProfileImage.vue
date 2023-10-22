<template>
  <img
    :src="profilePic"
    alt="Profile Image"
    class="h-10 w-10 cursor-pointer rounded-full object-cover"
  />
</template>

<script setup>
import { ref } from 'vue'

const profilePic = ref('https://i.pinimg.com/564x/73/99/b3/7399b329ef9731503b2af6b0b669d9c6.jpg')
</script>
