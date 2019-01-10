export const CacheState = () => ({
  hideSelectedComponent: {}, //是否隐藏selectedComponent中的组件
  selectedComponent: {}, //被选中的组件，点击组件左上角隐藏checkbox
  shrinkModule: {}, //收起某个模块
  updateComponentId: "", //要更新的组建的tipId 
  updateRecordContent: {}, //将更新的组建的数据
  currentModuleId: '', //记录当前模块
})
export const CacheMutations = {
  
  currentModuleId(state, moduleId) {
    state.currentModuleId = moduleId;
  },
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


}
export const CacheActions = {}
export const CacheGetters = {}
