export function classifyTipsData (arr) {
  // 用于分类整理tips的数据
  let obj = {};
  if (arr.length) {
    arr.forEach(item => {
      if (obj[item.target]) {
        obj[item.target].push(item);
      } else {
        obj[item.target] = [item];
      }
    })
  }
  return obj;
}
