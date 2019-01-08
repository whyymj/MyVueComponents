/**
 * 右键菜单的内容
 */
import {
  componentsBoxDropDownMenu,
  componentTipDropMenu
} from './ContextMenuList'//导入右键菜单的内容

export const MenuState = () => ({
  rightClickMenu: [], // 右键菜单contextMenu的内容，当右键点击对应的区域时，给此状态赋值，就会显示对应的自定义右键菜单
  contextMenuXY: { // 右键菜单坐标
    X: 0,
    Y: 0,
    relX: 0,
    relY: 0
  },
  visibleDropMenu: false, // 是否显示右键菜单
  cacheSelectedComponents: {}, // 组件的操作记录
})
export const MenuMutations = {
  hideContextMenu(state) {
    // 隐藏右键菜单
    state.visibleDropMenu = false;
  },
  showContextMenu(state, XY) {
    // 显示右键菜单，同时计算其坐标
    state.visibleDropMenu = true;
    if (XY) {
      state.contextMenuXY = XY;
    }
  },
  dropDownContextMenu(state, name) {
    // 根据右键单击的组件id来判断自定义右键菜单的内容
    if (name == 'componentShower') {
      state.rightClickMenu = componentsBoxDropDownMenu;
    } else if (name == 'componentTip') {
      state.rightClickMenu = componentTipDropMenu;
    } else {
      state.rightClickMenu = [];
    }
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
export const MenuActions = {}
export const MenuGetters = {}
