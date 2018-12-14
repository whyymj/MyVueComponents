<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Layout - Col Offset</span></Divider>
        <h6 class="demons">Col偏移</h6>
        <h5 class="demonsContent">通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。</span>
        </h5>
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
   
    export default{}
</script>
<style scoped lang='scss'>
    .componentBox {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
        /deep/ .ivu-row {
            width: 100%;
            box-sizing: border-box;
            background: #fff;
            margin: 5px 0;
            .ivu-col {
                border: 1px solid #aaa;
                background: #ccc;
            }
        }
        .demonsContent {
            span {
                display: block;
                text-indent: 3em;
            }
        }
    }
</style>