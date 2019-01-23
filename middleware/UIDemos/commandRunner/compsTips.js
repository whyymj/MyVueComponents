let commandObj = {};
commandObj.dragtip = function (event) {
    console.log('dragtip>>', event);
  }
  commandObj.rightclick = function (event) {
    console.log('rightclick tip>>', event);
  }
export default commandObj;