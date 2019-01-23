let commandObj = {};
commandObj.contextmenu = function (event) {
  console.log(event, '>>>>>>>', event.targettype, '>>>>>>>>>', event.eventtype);
  if (event.target == "hideComponent") {

    this.$store.dispatch('UIDemos/selectedComponent', { //记录
      [event.metaDict['hideComponent'].item.target]: true
    })
    // this.$store.commit('UIDemos/hideContextMenu')
  } else if (event.target == 'warnTip'||event.target == 'errorTip'||event.target == 'infoTip'||event.target == 'successTip') {

    this.$store.dispatch('UIDemos/newAddComponentTips',event)
  }
}
commandObj.record = function (event) {
  console.log('record page>>', event);
  this.$store.commit('UIDemos/cacheUpdateRecordContent',event.metaDict.updateRecordContentDrawer);//缓存updateRecordContent组件的值


}
export default commandObj;
