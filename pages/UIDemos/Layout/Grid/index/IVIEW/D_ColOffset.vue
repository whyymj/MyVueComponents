<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Layout - Col Offset</span></Divider>
        <h6 class="demons">Col偏移</h6>
        <h5 class="demonsContent">通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</h5>
        <!-- 下面为效果 -->
        <div class='buttonShower'>
            <Row>
                <Col span="8">col-8</Col>
                <Col span="8" offset="8">col-8 | offset-8</Col>
            </Row>
            <br>
            <Row>
                <Col span="6" offset="8">col-6 | offset-8</Col>
                <Col span="6" offset="4">col-6 | offset-4</Col>
            </Row>
            <br>
            <Row>
                <Col span="12" offset="8">col-12 | offset-8</Col>
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
            margin: 5px 0;
           
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