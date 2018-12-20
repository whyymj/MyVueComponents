export const state = () => ({
    cacheSelectedComponents: {}, //组件的操作记录
    rightClickComponentId: '', //右击组件的id
    rightClickMenu: [], //右键菜单contextMenu的内容
    visibleDropMenu: false, //是否显示右键菜单
    componentsBoxDropDownMenu: [
        { //右键单击componentsBox组件模块弹出的菜单列表内容
            value: 'tipComponent',
            label: '小贴士',
            children: [
                {
                    value: 'gugong',
                    label: '故宫'
                }, {
                    value: 'tiantan',
                    label: '天坛'
                }, {
                    value: 'wangfujing',
                    label: '王府井'
                }
            ]
        }, {
            value: 'hideComponent',
            label: '隐藏该组件'
        }, {
            value: 'dealComponents',
            label: '批量处理'
        }, {
            value: 'recordComponent',
            label: '组件记录'
        }
    ]

})

export const mutations = {
    hideContextMenu(state) {
        state.visibleDropMenu = false;
    },
    showContextMenu(state) {
        state.visibleDropMenu = true;
    },
    dropDownContextMenu(state, name) {
        state.rightClickMenu = state[name];
    },
    rightClickComponentId(state, id) { //记录右单击的组件id
        state.rightClickComponentId = id;
    },
    addSelectedComponents(state, param) { //记录操作组件信息
        if (param.componentId) {
            let obj = Object.assign({}, state.cacheSelectedComponents);
            obj[param.componentId] = param;
            state.cacheSelectedComponents = obj;
        }

    },
    removeSelectedComponents(state, id) { //移除操作组件信息
        if (id) {
            delete state.cacheSelectedComponents[id];

        }
    }
}
export const actions = {}

export const getters = {}