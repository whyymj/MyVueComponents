export function pageToolBar(event) {
  /**
   * pageShowerTools中的按钮命令执行函数
   */
  let obj = event.meta[event.target];
  let index = obj.index;
  if (index == 1) {
    this.$store.commit('UIDemos/shrinkModule', {
      [this.moduleId]: !obj.active
    })
  } else if (index == 2) {
    //记录组件框架
    commandRunner.call(this, 'recordFrame', this.moduleId) //处理菜单命令
  } else if (index == 3) {
    this.$store.commit('UIDemos/hideSelectedComponent', {
      [this.moduleId]: !obj.active
    })
  }
}
