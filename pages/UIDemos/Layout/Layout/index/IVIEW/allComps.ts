/**
 * 该文件用来导出全部组件
 * 本层级的文件夹内的所有.vue文件将作为示例，被显示在对应的页面上，
 * 组件在文件夹中的顺序决定了其在页面上的展示顺序；
 * 可以通过在文件名字前面添加A_,B_来调整文件的顺序；
 */

const allComps = require.context('./', true, /\.vue$/);

const obj = {};
allComps
    .keys()
    .map((item) => item.split(/[/\.]/)[2])
    .forEach((item) => {
        obj[item] = require('./' + item + '.vue').default
    });
export default obj;
