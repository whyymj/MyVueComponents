// 鼠标右键操作

export default function (itemId) {
    if (itemId == 'recordComponent') {//开关抽屉组件
        this.$parent.$parent.componentDrawer = true;
    }

}