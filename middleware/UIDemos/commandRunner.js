// 鼠标右键操作
let commandObj = {}

function createNewTip(data, type) {
  // :创建气泡
  let createTipId =
    '' + new Date().getTime() + Math.round(Math.random() * 10000000) // 生成tipid

  // :创建淡蓝色气泡
  this.$store.commit('UIDemos/newAddComponentTips', {
    // 组件内的tips数据结构

    tipTitle: '标题', // title
    tipSummary: '',
    tipBody: 'tipBody', // body
    tipId: this.$store.state.UIDemos.rightClickComponentId + '/tip' + createTipId, // tip的id，等于页面id/tip的index
    index: 'tip' + createTipId, // 组件内部的标识
    pageId: this.$store.state.UIDemos.rightClickComponentId,
    type: type
  })
  // this.addTip()
}

commandObj.recordFrame = function (itemId) {
  // recordComponent:开关抽屉组件
  this.showRecords = true;
  this.recordType = 'components'
}

commandObj.hideComponent = function (itemId) {
  // hideComponent:隐藏当前组件
  this.$store.commit('UIDemos/selectedComponent', {
    [this.$store.state.UIDemos.rightClickComponentId]: true
  });
}
commandObj.deleteTip = function (itemId) {
  // deleteTip:删除当前气泡
  this.$store.commit('UIDemos/deleteComponentTips')
  // this.deleteTip();
}
commandObj.updateTip = function (itemId) { //更新tip
  // this.willUpdateComponentId(); //记录将要修改的tip的tipId
  this.$store.commit('UIDemos/willUpdateComponentId')
  this.componentDrawer = true; //打开抽组件
  this.drawerChild = "updateTipContent"; //抽屉中的子组件名
}
commandObj.infoTip = function (itemId, data) {
  createNewTip.call(this, data, 'info')
}
commandObj.successTip = function (itemId, data) {
  // :创建淡绿色气泡
  createNewTip.call(this, data, 'success')
}
commandObj.warnTip = function (itemId, data) {
  // :创建橙色气泡
  createNewTip.call(this, data, 'warn')
}
commandObj.errorTip = function (itemId, data) {
  // :创建暗红色气泡
  createNewTip.call(this, data, 'error')
}
export default function (itemId, ...data) {

  if (itemId && commandObj[itemId]) {
    commandObj[itemId].call(this, itemId, data)
  }
}
