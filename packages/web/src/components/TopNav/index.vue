<script setup lang="ts">
const navitems = [
  {
    name: '首页',
    path: '/',
  },
  {
    name: '通讯调度',
    path: '/power/dispatch',
  },
  {
    name: '场景会议',
    path: '/power/contact',
  },
  {
    name: '视频监控',
    path: '/power/monitor',
  },
  {
    name: '电子地图',
    path: '/power/gis',
  },
]
</script>

<template>
  <nav class="nav-bar">
    <NavItem
      v-for="item of navitems"
      :key="item.name"
      :name="item.name"
      :path="item.path"
    />
  </nav>
</template>

<style scoped>

</style>
