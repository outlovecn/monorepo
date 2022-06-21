<script setup lang="ts">
const token = sessionStorage.token
const router = useRouter()
if (!token)
  router.push('/login')

// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }
</script>

<template>
  <!-- <Counter :initial="777" /> -->
  <div :style="`background: ${useRouter().currentRoute.value.meta.bgColor};`">
    <router-view />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
