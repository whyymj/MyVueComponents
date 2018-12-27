import {
  classifyTipsData
} from '@/middleware/UIDemos/storeUpdateComponentTips.js'

export const state = () => ({
  cacheSelectedComponents: {}, // 组件的操作记录
  rightClickComponentId: '', // 右键单击组件的id
  leftClickComponentId: '', // 左键单击的组件的id
  updateComponentId: "", //要更新的组建的tipId 
  updateComponentData: {}, //将更新的组建的数据
  rightClickMenu: [], // 右键菜单contextMenu的内容
  contextMenuXY: {
    X: 0,
    Y: 0,
    relX: 0,
    relY: 0
  }, // 右键菜单坐标
  visibleDropMenu: false, // 是否显示右键菜单
  cacheAllTips: [], // 暂存全部tips
  componentTips: {},
  componentsBoxDropDownMenu: [
    // 右键单击componentsBox组件模块弹出的菜单列表内容
    {
      value: 'tipComponent',
      label: '新建Tip',
      children: [{
          value: 'infoTip',
          label: `info`,
          color: '#2db7f5'
        },
        {
          value: 'successTip',
          label: `sucess`,
          color: '#19be6b'
        },
        {
          value: 'warnTip',
          label: `warn`,
          color: '#ff9900'
        },
        {
          value: 'errorTip',
          label: `error`,
          color: '#ed4014'
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
    },
    {
      value: 'updateTip',
      label: '修改该气泡'
    },
  ]
})
export const mutations = {
  setComponentTips(state, data) {
    // 对请求到的tips数据数组进行预处理,仅供初始化使用
    state.componentTips = classifyTipsData(data);
    state.cacheAllTips = data;
  },
  newAddComponentTips(state, item) { //新建 tip
    // 新增
    item.X = state.contextMenuXY.relX || '5%';
    item.Y = state.contextMenuXY.relY || '5%';
    state.cacheAllTips.push(item);

    state.componentTips = classifyTipsData(state.cacheAllTips);
  },
  updateComponentTips(state, val) { //更新tip

    state.cacheAllTips = state.cacheAllTips.map(item => {
      if (item.tipId == val.tipId) {
        return Object.assign(item, val);
      }
      return item;
    })
    state.componentTips = classifyTipsData(state.cacheAllTips);
  },

  willUpdateComponentId(state) { //记录将要修改的tip的tipId，防止修改中右键单击其他组件出bug
    state.updateComponentId = state.rightClickComponentId;

  },

  deleteComponentTips(state) { //删除tip

    state.cacheAllTips = state.cacheAllTips.filter(item => {

      if (item.tipId == state.rightClickComponentId) {
        console.log(item.tipId, '======', state.rightClickComponentId)
        return false;
      }
      return true;
    })
    state.componentTips = classifyTipsData(state.cacheAllTips);
  },

  hideContextMenu(state) {
    // 隐藏右键菜单
    state.visibleDropMenu = false;
  },
  showContextMenu(state, XY) {
    // 显示右键菜单
    state.visibleDropMenu = true;
    if (XY) {
      state.contextMenuXY = XY;
    }
  },
  dropDownContextMenu(state, name) {
    // 根据右键单击的组件id来判断自定义右键菜单的内容
    if (name == 'componentShower') {
      state.rightClickMenu = state.componentsBoxDropDownMenu;
    } else if (name == 'componentTip') {
      state.rightClickMenu = state.componentTipDropMenu;
    } else {
      state.rightClickMenu = [];
    }
  },
  rightClickComponentId(state, id) {
    console.log('::::id', id);
    // 记录右单击的组件id
    state.rightClickComponentId = id;
  },
  leftClickComponentId(state, id) {
    // 记录左键单击的组件id
    state.leftClickComponentId = id;
  },
  addSelectedComponents(state, param) {
    // 记录操作组件信息
    if (param.componentId) {
      let obj = Object.assign({}, state.cacheSelectedComponents);
      obj[param.componentId] = param;
      state.cacheSelectedComponents = obj;
    }
  },
  removeSelectedComponents(state, id) {
    // 移除操作组件信息
    if (id) {
      delete state.cacheSelectedComponents[id];
    }
  }
}
export const actions = {}

export const getters = {
  getUpdateComponentData(state) {//获取tipId对应的tip
    let len = state.cacheAllTips.length;
    let tmp = null;
    for (let i = 0; i < len; i++) {
      tmp = state.cacheAllTips[i];
      if (tmp.tipId == state.updateComponentId) {
        break;
      }
    }
    return tmp;
  },
}
