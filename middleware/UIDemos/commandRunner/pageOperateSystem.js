let commandObj = {};
commandObj.contextmenu = function (event) {
  console.log('contextmenu page>>', {

    [event.metaDict['hideComponent'].item.target]: true
  });
  if (event.metaDict.target == "hideComponent" && event.targettype == "pageOperateSystem" && event.eventtype == "contextmenu") {
    this.$store.commit('UIDemos/selectedComponent', {

      [event.metaDict['hideComponent'].item.target]: true
    })
  }
}
commandObj.record = function (event) {
  console.log('record page>>', event);
}
export default commandObj;
