// 鼠标右键操作
import componentShower from './commandRunner/componentShower.js'
import pageShowerTools from './commandRunner/pageShowerTools.js'
import compsRightClickMenu from './commandRunner/compsRightClickMenu.js'
import compsTips from './commandRunner/compsTips.js';
import componentShowerTools from './commandRunner/componentShowerTools.js';
import updateRecordContent from './commandRunner/updateRecordContent.js';
import pageComponentShower from './commandRunner/pageComponentShower.js';


let commandObj = {
  componentShower,
  compsTips,
  componentShowerTools,
  compsRightClickMenu,
  updateRecordContent,
  pageComponentShower,
  pageShowerTools
}


export default function (event) {

  if (event && event[targettype]) {
    let targettype = event.targettype;
    let eventtype = event.targettype;
    commandObj[targettype][eventtype].call(this, event)
  }
}
