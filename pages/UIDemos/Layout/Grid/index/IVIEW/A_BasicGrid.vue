<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Layout - Basic Grid</span></Divider>
        <h6 class="demons">24栅格系统</h6>
        <h5 class="demonsContent">采用了24栅格系统包括两个概念，行row和列col，具体使用方法如下：<span>1.row>col ;</span><span>2.设置col的span参数，指定跨越的范围，其范围是1到24 ;</span><span>3.每个row中的col总和应该为24</span>
        </h5>
        <!-- 下面为效果 -->
        <div class='buttonShower'>
            <Row>
                <Col span="12">col-12</Col>
                <Col span="12">col-12</Col>
            </Row>
            <br>
            <Row>
                <Col span="8">col-8</Col>
                <Col span="8">col-8</Col>
                <Col span="8">col-8</Col>
            </Row>
            <br>
            <Row>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
                <Col span="6">col-6</Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
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