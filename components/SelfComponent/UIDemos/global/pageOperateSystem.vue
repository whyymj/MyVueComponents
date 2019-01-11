<template>
  <!-- 页面通用的操作组件 -->
  <div class="pageOperators">
    <!-- 记录组件工具   -->
    <Drawer
      title="Basic Drawer"
      placement="left"
      :width="50"
      :closable="false"
      v-model="componentDrawer"
      style="overflow:hidden;"
    >
      <updateRecordContent :recordType="recordType" @getVal="getRecordVal"></updateRecordContent>
    </Drawer>
    <!-- 组件记录查看 -->
    <Drawer
      title="Basic Drawer"
      placement="left"
      :width="50"
      :closable="false"
      v-model="showRecords"
      style="overflow:hidden;"
    >
      <showAllRecords :moduleId="moduleId"></showAllRecords>
    </Drawer>
    <!-- 右键菜单组件 -->
    <transition name="slide-fade">
      <div
        class="rightClickContextMenu"
        v-if="visibleContextMenu"
        @click="clickMenu"
        :style="{top:contextMenuXY.Y ,left:contextMenuXY.X}"
      >
        <rightMenu></rightMenu>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import { getEvent } from '@/middleware/UIDemos/eventFactory.js'
export default {
  components: {
    showAllRecords: () => import('./showAllRecords.vue'),
    rightMenu: () => import('./compsRightClickMenu.vue'),
    updateRecordContent: () => import('./updateRecordContent.vue') //该组件用于Drawer组建中的动态组建，由右键菜单触发替换
  },
  data() {
    return {
      componentDrawer: false, //
      showRecords: false,
      recordType: 'tips', //记录的是tips，components或者frames
      moduleId: ''
    }
  },
  computed: {
    ...mapState('UIDemos', {
      visibleContextMenu: 'visibleDropMenu',
      contextMenuXY: 'contextMenuXY',
      shrinkThisModule: 'shrinkModule',
      showUpdater: 'showUpdateRecordContent'
    }),
    shrink() {
      return (
        !this.beforeMountStatus && this.shrinkThisModule[this.moduleId] === true
      )
    }
  },
  watch: {
    componentDrawer() {
      this.showUpdateRecorder(this.componentDrawer)
    },
    showUpdater() {}
  },
  methods: {
    ...mapMutations('UIDemos', {
      showUpdateRecorder: 'showUpdateRecordContent',
      bubbleEvent: 'bubbleEventToPage'
    }),
    clickMenu(e) {
      this.bubbleEvent(
        getEvent({
          target: e.target.dataset.menuitemid,
          meta: {
            item: Object.assign(this.item, {
              choose: this.choose
            })
          },
          eventtype: 'contextmenu',
          targettype: 'compsRightClickMenu'
        })
      )
    },
    getRecordVal(data) {
      this.bubbleEvent(
        getEvent({
          target: '',
          meta: data,
          eventtype: 'contextmenu',
          targettype: 'updateRecordContent'
        })
      )
    }
  }
}
</script>

<style scoped lang='scss'>
.rightClickContextMenu {
  position: fixed;
  width: 100px;
  background: #fff; // border: 1px solid #ccc;
  z-index: 100000;
  border-radius: 10px;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
    .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
 {
  opacity: 0;
}
</style>