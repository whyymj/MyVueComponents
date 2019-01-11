###自定义事件流：
1. 事件对象生成：
{
    target: id, //如tipId
    meta: {
        item：{}， // 携带的参数
    },
   
    targettype: 'compsTips',//事件源类型，组件名称（具体参考middleware/UIDemos/commandRunner/ReaadME.md）

    eventtype:'dblclick',//事件类型，（具体参考middleware/UIDemos/commandRunner/ReaadME.md）
}

 