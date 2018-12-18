<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Row>
                    <Col span="11">
                    <Card>
                        <p slot="title">The standard card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </Card>
                    </Col>
                    <Col span="11" offset="2">
                    <Card dis-hover>
                        <p slot="title">Disable card with hover shadows</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                        <p>Content of card</p>
                    </Card>
                    </Col>
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
        width: 47%;
    }
</style>