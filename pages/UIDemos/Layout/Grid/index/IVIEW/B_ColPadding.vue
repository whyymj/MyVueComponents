<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Layout - Col Padding</span></Divider>
        <h6 class="demons">Col间隔</h6>
        <h5 class="demonsContent">通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。</h5>
        <!-- 下面为效果 -->
        <div class='buttonShower'>
            <Row :gutter="16">
                <Col span="6">
                <div>col-6</div>
                </Col>
                <Col span="6">
                <div>col-6</div>
                </Col>
                <Col span="6">
                <div>col-6</div>
                </Col>
                <Col span="6">
                <div>col-6</div>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
   
    export default {}
</script>
<style scoped lang='scss'>
   .componentBox {
        width:30%;
        box-sizing: border-box;
        padding: 10px;
        /deep/ .ivu-row {
            width: 100%;
            background: #ccc;
            box-sizing: border-box;
            margin: 5px 0!important;
           
            .ivu-col {
                text-align: center;
                border: 1px solid #aaa;
            }
        }
        .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
        }
    }
</style>