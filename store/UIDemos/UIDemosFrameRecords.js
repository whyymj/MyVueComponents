export const FrameState = () => ({
  framesRecordsList: {} //全部框架的记录，按照moduleId分类
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

}
export const FrameActions = {}
export const FrameGetters = {
  getRecord:(state) => (id) => {//查找对应的id 的记录

  }
}
