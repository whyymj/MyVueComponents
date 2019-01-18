let commandObj = {};
commandObj.contextmenu = function (event) {
  console.log(event, '>>>>>>>', event.targettype, '>>>>>>>>>', event.eventtype);
  if (event.target == "hideComponent") {
    
    this.$store.dispatch('UIDemos/selectedComponent', {//记录
      [event.metaDict['hideComponent'].item.target]: true
    })
    // this.$store.commit('UIDemos/hideContextMenu')
  }else if(event.target=='warnTip'){
this.$store
  }
}
commandObj.record = function (event) {
  console.log('record page>>', event);
}
export default commandObj;
