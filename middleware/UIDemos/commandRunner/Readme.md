###  自定义组件中无具体的业务流程，触发产生的事件以及数据通过自定义事件冒泡形式传递至 UIDemos 页面以及pageOperateSystem 组件等页面级组件中进行处理  



###目前的自定义事件类型(targettype)：
rightclick, //右键单击事件
dblclick,   //双击事件
checkbox,     ///选中checkbox事件
dragtip,      //拖拽tip事件
contextmenu,     //自定义右键菜单命令 
        

###自定义事件源类型(eventtype)：（名称等于组件名  === middleware/UIDemos/commandRunner目录下的js文件结构）
componentShower,   
compsTips,
componentShowerTools,
compsRightClickMenu,
updateRecordContent,
pageComponentShower,
pageShowerTools



###----------  自定义事件的处理由middleware中的 commandRunner.js统一处理 ----------######