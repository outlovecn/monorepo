<script setup lang="ts">
const props = defineProps<{
  name: string
  path: string
}>()
const router = useRouter()
const goto = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div @click="goto(props.path)">
    {{ props.name }}
  </div>
</template>

<style scoped>

</style>
