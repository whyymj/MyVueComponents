// 鼠标右键操作
import componentShower from './commandRunner/componentShower.js'
import pageShowerTools from './commandRunner/pageShowerTools.js'
import compsRightClickMenu from './commandRunner/compsRightClickMenu.js'
import compsTips from './commandRunner/compsTips.js';
import componentShowerTools from './commandRunner/componentShowerTools.js';
import updateRecordContent from './commandRunner/updateRecordContent.js';
import pageComponentsShower from './commandRunner/pageComponentsShower.js';
import pageOperateSystem from './commandRunner/pageOperateSystem.js'

let commandObj = {
  componentShower,
  compsTips,
  componentShowerTools,
  compsRightClickMenu,
  updateRecordContent,
  pageComponentsShower,
  pageShowerTools,
  pageOperateSystem
}


export default function (event) {

  if (event.cache && event.cache['targettype']) {
    let targettype = event.cache.targettype;
    let eventtype = event.cache.eventtype;
    commandObj[targettype][eventtype].call(this, event.cache)
  }
}
