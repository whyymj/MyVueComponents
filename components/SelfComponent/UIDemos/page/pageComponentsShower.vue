<template>
  <!-- 这是全部示例组件的展示区 ,Dropdown阻止原生contextmenu-->
  <div class="componentsShower" @dblclick="dblClick" @click.left="leftClickPage">
    <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
    <div class="pageAnchor">
      <h2 class="title">
        <a target="_blank" href="https://www.iviewui.com/components/font" class="linkOrigin">{{componentsFrameName}}</a>
        <Icon type="ios-link" />
      </h2>
      <toolBar :recordsNum="recordsNum" @onClick="clickToolBar"></toolBar>
    </div>
    <!-- 组件展示由这里注入 -->
    <div class="componentsBox" v-show="shrink">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'
  import commandRunner from '@/middleware/UIDemos/commandRunner.js' //功能集合
  import {
    getEvent
  } from '@/middleware/UIDemos/eventFactory.js'
  export default {
    props: ['componentsFrameName', 'frameId'],
    components: {
      toolBar: () =>
        import ('./pageShowerTools.vue')
    },
    beforeMount() {
      this.moduleId = this.$route.path + '/' + this.frameId
      this.hideSelectedComponent({
        //初始化隐藏全部组件的data
        [this.moduleId]: true
      })
      this.shrinkModule({
        //初始化各个模块的收缩状态
        [this.moduleId]: true
      })
      this.beforeMountStatus = false //用来统一前后端渲染
    },
    data() {
      return {
        moduleId: '',
        beforeMountStatus: true,
        recordsNum: 0,
      }
    },
    computed: {
      ...mapState('UIDemos', {
        shrinkThisModule: 'shrinkModule',
        bubbleEventToModule: 'bubbleEventToModule',
        records: 'frameRecord'
      }),
      shrink() {
        return (!this.beforeMountStatus && this.shrinkThisModule[this.moduleId] === true)
      }
    },
    watch: {
      records() {//监听记录
        if (this.records[this.moduleId]) {
          this.recordsNum = this.records[this.moduleId].length;
        } else {
          this.recordsNum = 0;
        }
      },
      bubbleEventToModule() {
        let origin = getEvent(this.bubbleEventToModule)
        let newEvent = origin.add({
          target: this.moduleId, 
          meta: {
            item: {
                pageId:this.moduleId,
            }
          },
          targettype: 'pageComponentsShower'
        });
        console.log('page get new event :::', newEvent);
        this.bubbleEvent(newEvent);
      }
    },
    methods: {
      ...mapMutations('UIDemos', {
        currentModuleId: 'currentModuleId',
        hideSelectedComponent: 'hideSelectedComponent',
        hideContextMenu: 'hideContextMenu',
        shrinkModule: 'shrinkModule',
        bubbleEvent: 'bubbleEventToPage' //事件冒泡至页面
      }),
      leftClickPage(e) {
        this.hideContextMenu() //隐藏右键菜单
        this.currentModuleId(this.moduleId) //当前操作的模块id
        if (e.target.dataset.menuitemid) {
          //如果点击的是右键菜单的选项
          commandRunner.call(this, e.target.dataset.menuitemid) //处理菜单命令
        }
      },
      dblClick(e) {
        //简化部分右键菜单命令
        // this.currentModuleId(this.moduleId) //当前操作的模块id
        // this.bubbleEvent(getEvent({
        //   target: this.moduleId,
        //   meta: {
        //     item: {
                // pageId:this.moduleId,
            // }
        //   },
        //   eventtype: 'dblclick',
        //   targettype: 'pageComponentShower',
        // }));
        //继续向上冒泡至UIDemos页面接受
        // if (e.target.dataset.tipid) {
        //   commandRunner.call(this, 'updateTip') //处理菜单命令
        // }
      },
      clickToolBar(event) {
        this.bubbleEvent(event.add({
          target: this.moduleId, 
          meta: {
            item: {
                pageId:this.moduleId,
            }
          },
          eventtype: 'click',
          targettype: 'pageComponentShower',
        }))
        //点击右上角，模块操作按钮
        // event.path.unshift({
        //   type: 'pageComponentsShower',
        //   id: this.moduleId
        // });
        // event.meta[this.moduleId] = {
        //   compFrameId: this.componentsFrameName
        // };
        // this.bubbleEvent(event); //继续向上冒泡至UIDemos页面接受
      }
    }
  }
</script>

<style lang='scss'>
  .componentsShower {
    position: relative;
    .pageAnchor {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 10px 20px 0 0;
    }
    .componentsBox {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      >>>.componentBox {
        box-shadow: 1px 1px 5px 0 #ccc;
        margin: 10px 0;
      }
      >>>.componentBox:hover {
        box-shadow: 1px 1px 10px 1px #ccc;
      }
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
  }
</style>