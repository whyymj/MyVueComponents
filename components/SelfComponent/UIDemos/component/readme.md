自定义事件流：
1.tip的事件对象在componentShower中生成：
{
    target: e.target.dataset.tipid, //tipId
    meta: {
        [e.target.dataset.tipid]: item， //tip的原始参数
    },
    path: [{
        id: this.componentId,    //compoenntshower所处的moduleId
        type:'module',           //compoenntshower所属类型
    }, {
        id: e.target.dataset.tipid,//tipId
        type: 'compTip'           //tip类型
    }],
    type: 'dblclick'
}

 2.componentShower所属的事件对象格式：
 {
     ##参考上面
 }