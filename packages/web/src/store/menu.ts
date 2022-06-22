import DispatchSider from '~/components/DispatchSider/index.vue'
import DispatchVoice from '~/components/DispatchVoice/index.vue'
// import DispatchArea from '~/components/DispatchArea/index.vue'

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
    handleActions: ['呼叫', '语音通拨', '点名', '临时会议', '全部挂断'],
    views: [{
      name: '语音调度',
      component: DispatchVoice,
    }, /* , {
      name: '通话区域',
      component: DispatchArea,
    } */],
  },
  {
    name: '场景会议',
    path: '/power/contact',
    siderComponent: ContactSider,
    handleActions: ['创建会议', '增加成员', '踢出成员', '会场录音', '会场禁言', '停止会议', '手柄入会'],
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
    handleActions: ['1', '4', '6', '9', '13', '全屏'],
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

export const useStoreForMenu = defineStore('web', () => {
  return { menus: markRaw(menus) }
})
