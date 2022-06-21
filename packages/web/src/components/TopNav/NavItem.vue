<script setup lang="ts">
const props = defineProps<{
  name: string
  path: string
}>()
const router = useRouter()
const goto = (path: string) => {
  router.push(path)
}
const className = computed(() => {
  return {
    'nav-bar-item-active': router.currentRoute.value.path === props.path,
    'nav-bar-item': true,
  }
})
</script>

<template>
  <div
    :class="className"

    @click="goto(props.path)"
  >
    {{ props.name }}
  </div>
</template>

<style scoped>

</style>
