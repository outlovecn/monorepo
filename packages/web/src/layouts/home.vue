<!-- <template>
  <main>
    <TopNav />
    <router-view />
    <div>home</div>
  </main>
</template> -->

<script lang="ts" setup>
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'

const menus = [
  {
    name: '首页',
    path: '/power/home',
    views: [],
  },
  {
    name: '通讯调度',
    path: '/power/dispatch',
    views: [{
      name: '语音调度',
      path: '/power/dispatch/voice',
    }, {
      name: '通话区域',
      path: '/power/dispatch/area',
    }],
  },
  {
    name: '场景会议',
    path: '/power/contact',
    views: [{
      name: '会议管理',
      path: '/power/contact/manage',
    }, {
      name: '场景会议',
      path: '/power/contact/scene',
    }],
  },
  {
    name: '视频监控',
    path: '/power/monitor',
    views: [{
      name: '监控',
      path: '/power/monitor/video',
    }, {
      name: '轮巡',
      path: '/power/monitor/round',
    }, {
      name: '电视墙',
      path: '/power/monitor/wall',
    }, {
      name: '回放',
      path: '/power/monitor/playback',
    }],
  },
  {
    name: '电子地图',
    path: '/power/gis',
    views: [],
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
}
</script>

<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
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
      <a-layout-content style="margin: 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        综合通信调度系统 ©2022 USC
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>

