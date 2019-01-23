 let commandObj = {};


 commandObj.click = function (event) {
   /**
    * pageShowerTools中的按钮命令执行函数
    */
   let obj = event.metaDict[event.target].item;
   let index = obj.index;
   let moduleId = event.path[0].target; //获取组件所在模块的id


   if (index == 0) {
     console.log('add new self compoennt')
   } else if (index == 1) {
     this.$store.commit('UIDemos/shrinkModule', {
       [moduleId]: !obj.active
     })
   } else if (index == 2) {
     console.log('record frame', event)
     let frameId = event.path[1].target
     //记录组件框架
     let record = {
       frameId: frameId,
       content: event.metaDict.updateRecordContentDrawer
     }
     this.$store.commit('UIDemos/recordFrame', record); //记录模块 
     this.$store.commit('UIDemos/hideContextMenu')
   } else if (index == 3) {
     this.$store.commit('UIDemos/hideSelectedComponent', {
       [moduleId]: !obj.active
     })
   }
   // recordComponent:开关抽屉组件
   // this.showRecords = true;
   // this.$store.commit('UIDemos/leftClickComponentId',data);

 }
 export default commandObj;
