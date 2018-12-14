<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Card Tabs</span></Divider>
        <h6 class="demons">卡片样式 </h6>
        <h5 class="demonsContent">设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。</h5>
            <div class='buttonShower'>
                <Tabs value="name1" type="card">
                    <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                    <TabPane label="标签二" name="name2" disabled>标签二的内容</TabPane>
                    <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                </Tabs>
            </div>
    </div>
</template>
<script>
   
    export default  {}
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