<template>
  <div class="searchform-container mx-auto mt-20 flex px-16">
    <form class="flex h-14 gap-[16px] text-[rgb(95,99,104)]">
      <div class="relative flex w-[277px] items-center rounded-3xl border border-brand-gray-3">
        <label class="absolute left-[25px] top-[-30px]">Role</label>
        <span class="flex w-[60px] items-center justify-center text-xl">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>
        <!-- <input
          type="text"
          
          
          v-model="role"
        /> -->
        <TextInput
          placeholder="Software engineer"
          class="my-0.125rem ml-[-10px] h-[50px] w-[200px] rounded-3xl pl-[10px] focus:outline-none"
          v-model="role"
        />
      </div>

      <div class="relative flex w-[277px] items-center rounded-3xl border border-brand-gray-3">
        <label class="absolute left-[25px] top-[-30px]">Where</label>
        <span class="flex w-[60px] items-center justify-center text-xl">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </span>
        <!-- <input
          type="text"
          placeholder="Los Angeles"
          class="my-0.125rem ml-[-10px] h-[50px] w-[200px] rounded-3xl pl-[10px] focus:outline-none"
          v-model="location"
        /> -->
        <TextInput
          placeholder="Los Angeles"
          class="my-0.125rem ml-[-10px] h-[50px] w-[200px] rounded-3xl pl-[10px] focus:outline-none"
          v-model="location"
        />
      </div>
      <ActionButton text="Search" type="secondary" />
    </form>
  </div>
</template>

<style scoped>
.searchform-container {
  max-width: calc(1200px + 6rem);
}
</style>

<script setup>
import { defineProps, ref } from 'vue'
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'

const role = ref('')
const location = ref('')
</script>
