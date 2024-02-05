<template>
  <header
    class="fixed left-0 top-0 flex h-16 w-full items-center justify-between border-b border-brand-gray-1 bg-brand-white px-16 py-3 text-black"
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

    <!-- Clicking the sign in button logs the user in - sample case -->
    <ActionButton v-if="!isLoggedIn" @click="handleLogin" text="Sign in" type="primary" />
    <ProfileImage v-else />
  </header>

  <!-- I commented this out for future use only // primary and secondary button-->
  <!-- <ActionButton text="Search" type="secondary" /> -->
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
