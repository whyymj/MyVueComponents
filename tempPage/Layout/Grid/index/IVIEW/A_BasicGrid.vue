<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
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
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
        .buttonShower {
            >>>.ivu-row {
                >>>.ivu-col {
                    border: 1px solid #ccc;
                    text-align: center;
                }
            }
        }
    }
</style>