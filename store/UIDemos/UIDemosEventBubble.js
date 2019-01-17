export const BubbleState = () => ({
  bubbleEventToPage: {}, //事件冒泡至页面
  bubbleEventToModule: {}, //事件冒泡至pageShower也就是模块容器
  rightClickComponentId: '', // 右键单击的组件的id
  leftClickComponentId: '', // 左键单击的组件的id
})
export const BubbleMutations = {
  bubbleEventToPage(state, event) {
    state.bubbleEventToPage = event;
    
  },
  bubbleEventToModule(state, event) {
    state.bubbleEventToModule = event;
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
export const BubbleActions = {}
export const BubbleGetters = {

}
