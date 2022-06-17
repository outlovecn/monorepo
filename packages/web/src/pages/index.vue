<script setup lang="ts">
const router = useRouter()
const token = sessionStorage.token
if (!token)
  router.push('/login')

// const go = () => {
//   if (name)
//     router.push(`/hi/${encodeURIComponent(name)}`)
// }
</script>

<template>
  <Counter :initial="777" />
</template>
