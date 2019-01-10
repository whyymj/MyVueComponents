自定义事件流：
1.pageComponentShower的事件对象在c：
{
   
    target:'', //事件源的id
    meta: {
    [id]: obj，//冒泡路径过程中的携带的参数
    }, 
    path: [{
        type: 'pageShowerTool',//事件源类型
        id: id,            //事件源id
    }], 
    type: 'click'
})
