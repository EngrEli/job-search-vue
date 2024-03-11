<template>
  <div class="main-hero-container mt-16 bg-brand-white py-10">
    <main class="main-hero mx-auto flex justify-between px-16 text-black">
      <div class="hero-left flex flex-col px-2">
        <h4 class="hero-headline text-4xl leading-tight">
          <span :class="['block ', textTransitionColor]">{{ textTransition }}</span>
          for everyone
        </h4>
        <div class="hero-sub">Find your next job at Google.</div>
      </div>
      <!-- <div class="hero-right px-2">Hero image</div> -->
    </main>

    <SearchBarFormComponent />
  </div>
</template>

<style scoped>
.main-hero {
  max-width: calc(1200px + 6rem);
}
.main-hero .design {
  color: green;
}
.main-hero .code {
  color: red;
}
.main-hero .build {
  color: blue;
}
.main-hero .create {
  color: orange;
}

.hero-headline {
  font-size: 88px;
}
</style>
<style>
.main-hero .hero-headline,
.main-hero .hero-headline span {
  font-weight: bold !important;
}

.hero-sub {
  margin-top: 24px;
  font-size: 28px;
  line-height: 2.25rem;
}
</style>
<script setup>
import { ref, computed, onMounted, reactive, onBeforeUnmount } from 'vue'
import SearchBarFormComponent from './SearchBarFormComponent.vue'
import ActionButton from '../Shared/ActionButton.vue'

const mainText = reactive(['Design', 'Code', 'Build', 'Create'])
const currentIndex = ref(0)
const interval = ref()

const trans = ref(mainText[currentIndex])

const textTransition = computed(() => {
  return mainText[currentIndex.value]
})

const textTransitionColor = computed(() => {
  //   return mainTextColor[currentIndex.value]
  return mainText[currentIndex.value].toLowerCase()
})

const changeTitle = () => {
  interval.value = setInterval(() => {
    if (currentIndex.value >= 3) {
      currentIndex.value = 0
    } else {
      currentIndex.value++
    }
  }, 1000)
}

onMounted(() => {
  changeTitle()
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
</script>
