export const state = () => ({
  cacheSelectedComponents: {}, // 组件的操作记录
  rightClickComponentId: '', // 右键单击组件的id
  leftClickComponentId: '', // 左键单击的组件的id
  rightClickMenu: [], // 右键菜单contextMenu的内容
  visibleDropMenu: false, // 是否显示右键菜单
  componentDrawer: false, // 是否显示抽屉组件
  componentsBoxDropDownMenu: [
    // 右键单击componentsBox组件模块弹出的菜单列表内容
    {
      value: 'tipComponent',
      label: '新建Tip',
      children: [
        {
          value: 'gugong',
          label: '故宫'
        },
        {
          value: 'tiantan',
          label: '天坛'
        },
        {
          value: 'wangfujing',
          label: '王府井'
        }
      ]
    },
    {
      value: 'hideComponent',
      label: '隐藏该组件'
    },
    {
      value: 'dealComponents',
      label: '批量处理'
    },
    {
      value: 'recordComponent',
      label: '写记录'
    }
  ],
  componentTipDropMenu: [
    // 右键点击子页面的menu 内容
    {
      value: 'deleteTip',
      label: '删除该气泡'
    }
  ],
})
export const mutations = {
  setCompDrawer (bool) {
    this.componentDrawer = bool
  },
  hideContextMenu (state) {
    // 隐藏右键菜单
    state.visibleDropMenu = false
  },
  showContextMenu (state) {
    // 显示右键菜单
    state.visibleDropMenu = true
  },
  dropDownContextMenu (state, name) {
    // 根据右键单击的组件id来判断自定义右键菜单的内容
    if (name == 'componentShower') {
      state.rightClickMenu = state.componentsBoxDropDownMenu
    } else if (name == 'componentTip') {
      state.rightClickMenu = state.componentTipDropMenu
    } else{
      state.rightClickMenu =[];
    }
  },
  rightClickComponentId (state, id) {
    // 记录右单击的组件id
    state.rightClickComponentId = id
  },
  leftClickComponentId (state, id) {
    // 记录左键单击的组件id
    state.leftClickComponentId = id
  },
  addSelectedComponents (state, param) {
    // 记录操作组件信息
    if (param.componentId) {
      let obj = Object.assign({}, state.cacheSelectedComponents)
      obj[param.componentId] = param
      state.cacheSelectedComponents = obj
    }
  },
  removeSelectedComponents (state, id) {
    // 移除操作组件信息
    if (id) {
      delete state.cacheSelectedComponents[id]
    }
  }
}
export const actions = {}

export const getters = {}
