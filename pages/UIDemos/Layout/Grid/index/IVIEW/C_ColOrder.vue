<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Layout - Col Order</span></Divider>
        <h6 class="demons">Col顺序&排序</h6>
        <h5 class="demonsContent">Flex布局，不展示</h5>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
@import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
   .componentBox {
        width:30%;
        /deep/ .ivu-row {
            width: 100%;
            background: #ccc;
            box-sizing: border-box;
            margin: 5px 0;
           
            .ivu-col {
                text-align: center;
                border: 1px solid #aaa;
            }
        }
    }
</style>