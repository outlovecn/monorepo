<script setup lang="ts">
const router = useRouter()
const logout = () => {
  sessionStorage.removeItem('token')
  router.replace('/login')
}
const isHome = computed(() => router.currentRoute.value.path !== '/login')
</script>

<template>
  <nav text-xl inline-flex gap-2 absolute top-6 right-6 text-light>
    <button v-show="isHome" class="icon-btn !outline-nones" @click="logout()">
      <div i-carbon-power />
    </button>
    <!-- <button class="icon-btn !outline-none" @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button> -->
    <button class="icon-btn !outline-none" @click="toggleFullscreen()">
      <div i-carbon-replicate />
    </button>
  </nav>
</template>
