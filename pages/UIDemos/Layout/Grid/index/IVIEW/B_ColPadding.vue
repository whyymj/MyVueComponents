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
 @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
   .componentBox {
        width:30%;
    }
</style>