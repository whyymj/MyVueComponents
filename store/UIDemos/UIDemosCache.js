export const CacheState = () => ({
  hideSelectedComponent: {}, //是否隐藏selectedComponent中的组件
  selectedComponent: {}, //被选中的组件，点击组件左上角隐藏checkbox
  shrinkModule: {}, //收起某个模块
  rightClickComponentId: '', // 右键单击的组件的id
  leftClickComponentId: '', // 左键单击的组件的id
  updateComponentId: "", //要更新的组建的tipId 
  updateRecordContent: {}, //将更新的组建的数据

})
export const CacheMutations = {
  hideSelectedComponent(state, data) { //是否隐藏全部选中的组件
    state.hideSelectedComponent = Object.assign({}, state.hideSelectedComponent, data);
  },

  selectedComponent(state, data) { //compId是选中的组建id，bool是添加或者隐藏
    state.selectedComponent = Object.assign({}, state.selectedComponent, data);
  },
  shrinkModule(state, data) { //收起某个模块
    state.shrinkModule = Object.assign({}, state.shrinkModule, data);
  },

  willUpdateComponentId(state) { //记录将要修改的tip的tipId，防止修改中右键单击其他组件出bug
    state.updateComponentId = state.rightClickComponentId;

  },
  rightClickComponentId(state, id) {

    // 记录右单击的组件id
    state.rightClickComponentId = id;
  },
  leftClickComponentId(state, id) {
    // 记录左键单击的组件id
    state.leftClickComponentId = id;
  },

}
export const CacheActions = {}
export const CacheGetters = {}
