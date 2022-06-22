<script lang="ts" setup>
const activeTabKey = ref(0)
const { menus } = useStoreForMenu()
interface item {
  key: string
}
const router = useRouter()
const goto = (item: item) => {
  router.push(item.key)
  activeTabKey.value = 0
}
// 侧边栏
const collapsed = ref<boolean>(false)
const defaultSelectedKeys = computed(() => {
  return router.currentRoute.value.path
})
const selectedMenuKeys = ref<string[]>([defaultSelectedKeys.value])
const siderWidth = '300'
const selectedKey = computed(() => {
  return selectedMenuKeys.value[0]
})
const currentSidebar = computed(() => {
  const item = menus.find(item => item.path === selectedKey.value)
  return item ? item.siderComponent : ''
})
const currentHandleActions = computed(() => {
  const item = menus.find(item => item.path === selectedKey.value)?.handleActions
  return item || []
})
const showCurrentHandleActions = computed(() => {
  return currentHandleActions.value.length > 0
})
// Tab 区域
const currentTabs = computed(() => {
  return menus.find(item => item.path === selectedKey.value)?.views || []
})
const onlyOneTab = computed(() => {
  return currentTabs.value.length === 1
})
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible :width="siderWidth">
      <div class="home-logo" />
      <component :is="currentSidebar" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-menu
          v-model:selectedKeys="selectedMenuKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
          @select="goto"
        >
          <a-menu-item v-for="{ name, path } in menus" :key="path">
            {{ name }}
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <div class="relative p-sm h-full">
          <div v-if="showCurrentHandleActions" class="bottom-0 right-0 w-full">
            <HandleArea :actions="currentHandleActions" />
          </div>
          <component :is="currentTabs[0].component" v-if="onlyOneTab" />
          <a-tabs v-else v-model:activeKey="activeTabKey">
            <a-tab-pane v-for="{ name, component }, i in currentTabs" :key="i" :tab="name">
              <component :is="component" />
            </a-tab-pane>
          </a-tabs>
        </div>
      </a-layout-content>
      <!-- <a-layout-footer class="text-center home-footer">
        综合通信调度系统 ©2022 USC
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<style>
.home-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
.home-footer {
  padding: 1em 0;
}
</style>

