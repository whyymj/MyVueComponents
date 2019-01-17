let commandObj = {};
commandObj.checkbox = function (event) {

  let meta = event.metaDict[event.target].item;

  if (meta.id == 'hideModule') {
    let componentId = event.path[1].target
    console.log('hide this comp>>', meta, componentId);
    this.$store.commit('UIDemos/selectedComponent', {
      [componentId]: meta.choose
    })
  }

}
export default commandObj;
