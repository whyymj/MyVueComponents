<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Row style="background:#eee;padding:20px">
                <Col span="11">
                <Card :bordered="false">
                    <p slot="title">Borderless card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
                </Col>
                <Col span="11" offset="2">
                <Card shadow>
                    <p slot="title">Use a card with a shadow effect</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 47%;
    }
</style>