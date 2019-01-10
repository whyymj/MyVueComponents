export const FrameState = () => ({
  framesRecordsList: {}, //全部框架的记录，按照moduleId分类
  showUpdateRecordContent: false, //是否展示更新记录内容抽屉组件
  updateRecordContentInfo: {}, //更新记录的内容
  updateRecordContentType: 'tips', //更新的组件类型
  showAllRecords: false, //模块记录查询组件是否展示
  showRecord: {}, //查询那一条记录
})
export const FrameMutations = {
  recordFrame(state, data) { //写框架记录
    if (state.frameRecord[state.leftClickComponentId]) {
      state.frameRecord[state.leftClickComponentId].push(data)
    } else {
      state.frameRecord[state.leftClickComponentId] = [data];
    }

  },
  delFrameRecord(state, recordId) { //删除框架记录

  },
  showUpdateRecordContent(state, bool) {
    state.showUpdateRecordContent = bool;
  }
}
export const FrameActions = {}
export const FrameGetters = {
  getRecord: (state) => (id) => { //查找对应的id 的记录

  }
}
