<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Tabs</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
        </h5>
        <div class='buttonShower'>
            <Tabs value="name1">
                <TabPane label="标签1" name="name1">标签一的内容</TabPane>
                <TabPane label="标签2" name="name2" disabled>标签二的内容</TabPane>
                <TabPane label="标签3" name="name3">标签三的内容</TabPane>
                <TabPane label="标签4" name="name4">标签四的内容</TabPane>
                <TabPane label="标签5" name="name5">标签五的内容</TabPane>
                <TabPane label="标签6" name="name6">标签六的内容</TabPane>
                <TabPane label="标签7" name="name7">标签七的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
   
    export default {}
</script>
<style scoped lang='scss'>
    .componentBox {
        width: 50%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            /deep/ .ivu-tabs {
                background: #fff;
            }
        }
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
    }
</style>