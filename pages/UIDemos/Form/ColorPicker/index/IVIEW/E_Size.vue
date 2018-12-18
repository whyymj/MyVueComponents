<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Row>
                    <Col span="8">
                    <ColorPicker v-model="color6" size="large" />
                    </Col>
                    <Col span="8">
                    <ColorPicker v-model="color6" />
                    </Col>
                    <Col span="8">
                    <ColorPicker v-model="color6" size="small" />
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
        data() {
            return {
                color6: '#19be6b'
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
    }
</style>