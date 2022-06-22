<script lang="ts" setup>
import DispatchSider from '~/components/DispatchSider/index.vue'
import DispatchVoice from '~/components/DispatchVoice/index.vue'
import DispatchArea from '~/components/DispatchArea/index.vue'

import ContactSider from '~/components/ContactSider/index.vue'
import ContactManage from '~/components/ContactManage/index.vue'
import ContactScene from '~/components/ContactScene/index.vue'

import MonitorSider from '~/components/MonitorSider/index.vue'
import MonitorVideo from '~/components/MonitorVideo/index.vue'
import MonitorRound from '~/components/MonitorRound/index.vue'
import MonitorWall from '~/components/MonitorWall/index.vue'
import MonitorPlayback from '~/components/MonitorPlayback/index.vue'

import GisSider from '~/components/GisSider/index.vue'
import GisMap from '~/components/GisMap/index.vue'

const activeTabKey = ref(0)
// 导航菜单
const menus = [
  // {
  //   name: '首页',
  //   path: '/power/home',
  //   views: [],
  // },
  {
    name: '通讯录',
    path: '/power/dispatch',
    siderComponent: DispatchSider,
    views: [{
      name: '语音调度',
      component: DispatchVoice,
      handleActions: ['呼叫', '语音通拨', '点名', '临时会议', '全部挂断'],
    }, /* , {
      name: '通话区域',
      component: DispatchArea,
    } */],
  },
  {
    name: '场景会议',
    path: '/power/contact',
    siderComponent: ContactSider,
    views: [{
      name: '会议管理',
      component: ContactManage,
    }, {
      name: '场景会议',
      component: ContactScene,
    }],
  },
  {
    name: '视频监控',
    path: '/power/monitor',
    siderComponent: MonitorSider,
    views: [{
      name: '监控',
      component: MonitorVideo,
    }, {
      name: '轮巡',
      component: MonitorRound,
    }, {
      name: '电视墙',
      component: MonitorWall,
    }, {
      name: '回放',
      component: MonitorPlayback,
    }],
  },
  {
    name: '电子地图',
    path: '/power/gis',
    siderComponent: GisSider,
    views: [{
      name: '地图',
      component: GisMap,
    }],
  },
]
interface item {
  key: string
}
const router = useRouter()
const collapsed = ref<boolean>(false)
const defaultSelectedKeys = menus[0].path
const selectedKeys = ref<string[]>([defaultSelectedKeys])
const goto = (item: item) => {
  router.push(item.key)
  activeTabKey.value = 0
}
// 侧边栏
const siderWidth = '300'
const selectedKey = computed(() => {
  return selectedKeys.value[0]
})
const currentSidebar = computed(() => {
  const item = menus.find(item => item.path === selectedKey.value)
  return item ? item.siderComponent : ''
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
          v-model:selectedKeys="selectedKeys"
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
          <div class="bottom-0 right-0 w-full">
            <HandleArea />
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

