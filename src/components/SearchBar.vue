<template>
  <form
    class="relative flex h-14 w-[277px] items-center rounded-3xl border border-brand-gray-3 text-[rgb(95,99,104)]"
  >
    <label class="absolute left-[25px] top-[-30px]">Role</label>
    <span class="flex w-[60px] items-center justify-center text-xl">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </span>
    <input
      type="text"
      placeholder="Software engineer"
      class="my-0.125rem ml-[-10px] h-[50px] w-[200px] rounded-3xl pl-[10px] focus:outline-none"
    />
  </form>
</template>

<style scoped></style>

<script setup></script>
