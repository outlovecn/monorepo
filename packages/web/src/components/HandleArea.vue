<script setup lang='ts'>
const props = defineProps<{
  actions: string[]
}>()
</script>

<template>
  <section class="h-12 text-white">
    <div class="flex h-full items-center">
      <a-space class="flex-wrap">
        <a-button v-for="action, i in props.actions" :key="i" type="primary" ghost>
          {{ action }}
        </a-button>
      </a-space>
    </div>
  </section>
</template>

<style>

</style>
