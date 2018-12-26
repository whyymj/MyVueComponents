export function classifyTipsData (arr) {
  // 用于分类整理tips的数据
  let obj = {};
  if (arr.length) {
    arr.forEach(item => {
      if (obj[item.pageId]) {
        obj[item.pageId].push(item);
      } else {
        obj[item.pageId] = [item];
      }
    })
  }
  return obj;
}
