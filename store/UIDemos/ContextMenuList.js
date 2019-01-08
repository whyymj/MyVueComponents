/**
 * 该模块只用于存储右键菜单的内容列表，不用于状态存储
 */
export const componentsBoxDropDownMenu = [
  // 右键单击componentsBox组件模块弹出的菜单列表内容
  {
    value: 'tipComponent',
    label: '新建Tip',
    children: [{
        value: 'infoTip',
        label: `info`,
        color: '#2db7f5'
      },
      {
        value: 'successTip',
        label: `sucess`,
        color: '#19be6b'
      },
      {
        value: 'warnTip',
        label: `warn`,
        color: '#ff9900'
      },
      {
        value: 'errorTip',
        label: `error`,
        color: '#ed4014'
      }
    ]
  },
  {
    value: 'hideComponent',
    label: '隐藏该组件'
  },
  
  
];
export const componentTipDropMenu = [
  // 右键点击子页面的menu 内容
  {
    value: 'deleteTip',
    label: '删除该气泡'
  },
  {
    value: 'updateTip',
    label: '修改该气泡'
  },
]
