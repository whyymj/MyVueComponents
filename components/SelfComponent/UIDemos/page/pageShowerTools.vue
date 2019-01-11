<template>
  <ButtonGroup class="pageToolsBar">
    <Button :type="item.active?'primary':'default'" class="pageToolItem" v-for="(item,index) in tools" :key="index" @click="clickToolItem(index)">
            <Poptip trigger="hover" placement="top-end">
              <!-- 这是带徽标数的 -->
              <Badge :count="item.num" v-if="item.num">
                <span style="display:inline-block;width:30px;height:22px;">
                  <Icon :type="item.icon"></Icon>
                </span>
              </Badge>
              <!-- 这是不带徽标数的 -->
              <span style="display:inline-block;width:30px;height:22px;" v-else>
                <Icon :type="item.icon"></Icon>
              </span>
              <!-- 这是poptips的弹窗内容 -->
              <span
                slot="content"
                style="color:#2d8cf0;"
              >{{(item.active&&item.closeLabel)?item.closeLabel:item.label}}</span>
            </Poptip>
          </Button>
  </ButtonGroup>
</template>

<script>
  import commandRunner from '@/middleware/UIDemos/commandRunner.js' //功能集合
  import {
    getEvent
  } from '@/middleware/UIDemos/eventFactory.js'
  export default {
    props: ['recordsNum'],
    computed: {
      tools() {
        let tools = [{
            icon: 'md-add',
            value: 'addSelfComponents',
            label: '添加自己的组件',
            active: false,
            index: 0
          },
          {
            icon: 'md-eye',
            value: 'showThisModule',
            label: '收起模块',
            active: false,
            closeLabel: '展开模块',
            closeValue: 'hideThisModule',
            index: 1
          },
          {
            icon: 'md-clipboard',
            value: 'recordSomething',
            label: '写点什么',
            active: false,
            num: 1,
            index: 2
          },
          {
            icon: 'ios-apps',
            value: 'showAllComponents',
            label: '显示全部组件',
            active: false,
            closeLabel: '隐藏选中组件',
            closeValue: 'hideSelectedComponents',
            index: 3
          }
        ]
        if (this.recordsNum) {
          //记录数
          tools[2].num = this.recordsNum
        }
        return tools
      }
    },
    methods: {
      clickToolItem(index) {
        let obj = this.tools[index]
        obj.active = !obj.active
        this.$set(this.tools, index, obj)
        this.$emit('onClick', getEvent({
          //模仿事件冒泡
          target: obj.active ? obj.value : obj.closeValue, //事件源
          meta: {
            item: Object.assign({},obj)
          }, //携带的数据
          targettype: 'pageShowerTools',
          eventtype: 'click'
        }))
      }
    }
  }
</script>

<style scoped lang='scss'>
  .pageToolsBar {
    .pageToolItem {
      padding: 0;
    }
  }
</style>