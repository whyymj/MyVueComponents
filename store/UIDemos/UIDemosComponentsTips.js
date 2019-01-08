import {
  classifyTipsData
} from '@/middleware/UIDemos/storeUpdateComponentTips.js'

export const TipsState = () => ({
  cacheAllTips: [], // 暂存全部tips
})
export const TipsMutations = {
  setComponentTips(state, data) {
    // 对请求到的tips数据数组进行预处理,仅供初始化使用
    state.cacheAllTips = data;
  },
  newAddComponentTips(state, item) { //新建 tip
    // 新增
    item.X = state.contextMenuXY.relX || '5%';
    item.Y = state.contextMenuXY.relY || '5%';
    state.cacheAllTips.push(item);
  },
  updateComponentTips(state, val) { //更新tip
    state.cacheAllTips = state.cacheAllTips.map(item => {
      if (item.tipId == val.tipId) {
        return Object.assign(item, val);
      }
      return item;
    })
  },
  deleteComponentTips(state) { //删除tip
    state.cacheAllTips = state.cacheAllTips.filter(item => {
      if (item.tipId == state.rightClickComponentId) {
        return false;
      }
      return true;
    })
  },
}
export const TipsActions = {}
export const TipsGetters = {
  getUpdateComponentData(state) { //获取tipId对应的tip
    let len = state.cacheAllTips.length;
    let tmp = null;
    for (let i = 0; i < len; i++) {
      tmp = state.cacheAllTips[i];
      if (tmp.tipId == state.updateComponentId) {
        break;
      }
    }
    return tmp;
  },
  getAllClassifiedTips(state){//获取按照pageId分类的tips组件
    return classifyTipsData(state.cacheAllTips);
  }
}
