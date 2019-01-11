// componentShowerTools的命令执行
let commandObj = {};
commandObj.hideComponent = function (itemId, data) {
  // hideComponent:隐藏当前组件
  this.$store.commit('UIDemos/selectedComponent', {
    [this.$store.state.UIDemos.rightClickComponentId]: true
  });
}
export default commandObj;