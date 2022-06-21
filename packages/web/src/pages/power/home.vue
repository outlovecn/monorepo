<script setup lang="ts">
const tabs: string[] = ['home']
</script>

<template>
  <TabView :tabs="tabs">
    首页
  </TabView>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
