<template>
  <!-- 这是全部示例组件的展示区 ,Dropdown阻止原生contextmenu-->
  <div class="componentsShower" @dblclick='dblClick' @click.left="leftClickPage">
    <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
    <div class="pageAnchor">
      <h2 class="title">
        <a target="_blank" href="https://www.iviewui.com/components/font" class="linkOrigin">{{componentsFrameName}}</a>
        <Icon type="ios-link" />
        
      </h2>
      <toolBar></toolBar>
    </div>
    <!-- 组件展示由这里注入 -->
    <slot name="components"></slot>
    <!-- 组件右单击菜单》记录组件   -->
    <Drawer title="Basic Drawer" placement="left" :width='50' :closable="false" v-model="componentDrawer" style='overflow:hidden;'>
      <component :is='drawerChild'></component>
    </Drawer>
    <!-- 右键菜单组件 -->
    <transition name="slide-fade">
      <div class="rightClickContextMenu" v-if="visibleContextMenu" :style="{top:contextMenuXY.Y ,left:contextMenuXY.X}">
        <rightMenu></rightMenu>
      </div>
    </transition>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import contextMenuItemRunner from '@/middleware/UIDemos/contextMenuItemRunner.js' //右键菜单功能
  export default {
    props: ['componentsFrameName','frameId'],
    components: {
      toolBar: () =>
        import ('./pageShowerTools.vue'),
      rightMenu: () =>
        import ('./compsRightClickMenu.vue'),
      updateTipContent: () =>
        import ('./Form/updateTipContent.vue'), //该组件用于Drawer组建中的动态组建，由右键菜单触发替换
    },
    data() {
      return {
        showIviewModel: true, //是否展示全部组件:
        componentDrawer: false, //middleware/contextmenuitemRunner中通过$parent.$parent.componentDrawer修改
        drawerChild: 'updateTipContent'
      }
    },
    computed: {
      ...mapState('UIDemos', {
        visibleContextMenu: 'visibleDropMenu',
        contextMenuXY: 'contextMenuXY'
      })
    },
    
    methods: {
      ...mapMutations('UIDemos', {
        hideContextMenu: 'hideContextMenu',
        deleteTip: 'deleteComponentTips',
        addTip: 'newAddComponentTips',
        updateTipContent: 'updateComponentTips',
        willUpdateComponentId: 'willUpdateComponentId'
      }),
      leftClickPage(e) {
        this.hideContextMenu() //隐藏右键菜单
        if (e.target.dataset.menuitemid) {
          //如果点击的是右键菜单的选项 
          contextMenuItemRunner.call(this, e.target.dataset.menuitemid) //处理菜单命令
        }
      },
      dblClick(e) { //简化部分右键菜单命令
        if (e.target.dataset.tipid) {
          contextMenuItemRunner.call(this, 'updateTip') //处理菜单命令
        }
      },
      drawerController() {
        //操作Drawer组件的方法
      }
    }
  }
</script>

<style lang='scss'>
  .componentsShower {
    position: relative;
    .pageAnchor{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding:10px 20px 0 0;
    }
    h2 {
      text-align: left;
      padding: 0 20px 0 20px;
      margin: 0 0 10px 0;
      box-sizing: border-box;
      a {
        font-size: 18px;
      }
    }
    .button {
      display: inline;
      color: hotpink;
      float: right;
      margin: 5px 10px 0 0;
      font-size: 11px;
      font-weight: 100;
      cursor: pointer;
      padding: 0 5px;
      &:hover {
        color: gold;
        border: 1px solid gold;
        box-shadow: 1px 1px 0 gold;
      }
    }
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
  }
</style>