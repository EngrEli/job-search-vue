<template>
  <header
    class="fixed left-0 top-0 flex w-full items-center justify-between border-b border-brand-gray-1 px-16 py-3"
  >
    <div class="flex items-center">
      <h1 class="mb-1 text-xl">
        <a href="/">Careers</a>
      </h1>
      <ul class="flex items-center">
        <li class="ml-10">
          <a href="#" class="text-sm">Teams</a>
        </li>
        <li class="ml-10">
          <a href="#" class="text-sm">Locations</a>
        </li>
        <li class="ml-10">
          <a href="#" class="text-sm">Students</a>
        </li>
        <li class="ml-10">
          <a href="#" class="text-sm">Jobs</a>
        </li>
      </ul>
    </div>

    <!-- Clicking the sign in button logs the user in -->
    <ActionButton v-if="!isLoggedIn" @click="handleLogin" />
    <ProfileImage v-else />
  </header>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'

const isLoggedIn = ref(false)

const handleLogin = () => {
  isLoggedIn.value = true
}
</script>
