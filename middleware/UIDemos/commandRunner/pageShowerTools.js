 let commandObj = {};


 commandObj.click = function (event) {
   /**
    * pageShowerTools中的按钮命令执行函数
    */
   let obj = event.metaDict[event.target].item;
   let index = obj.index;
   let moduleId = event.path[0].target; //获取组件所在模块的id
   if (event.path[0].targettype !== 'pageComponentShower') {//检测所在模块的id
     throw new Error('middleware/UIDemos/commandRunner/pageShowerTool.js：  error:: it is not moduleId')
   }

   if (index == 0) {
     console.log('add new self compoennt')
   } else if (index == 1) {
     this.$store.commit('UIDemos/shrinkModule', {
       [moduleId]: !obj.active
     })
   } else if (index == 2) {
     console.log('record frame',event)
     //记录组件框架
     
     //  commandRunner.call(this, 'recordFrame', this.moduleId) //处理菜单命令
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
