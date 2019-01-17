// componentShowerTools的命令执行
let commandObj = {};
commandObj.rightclick = function (event) { 
  if (event) {
    let meta=event.metaDict[event.target];
    meta.menutype=event.targettype;
    this.$store.commit('UIDemos/showContextMenu',meta);//显示右键菜单，
  }
  
}
export default commandObj;
