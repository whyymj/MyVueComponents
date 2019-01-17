let commandObj = {};
commandObj.dblclick = function (event) {
    console.log('dblclick page>>', event);
  }
  commandObj.click = function (event) {
    console.log('click page>>', event);
  }
export default commandObj;