<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <row :gutter="16">
                    <Col span="8">
                    <TimePicker size="small" placeholder="Select time"></TimePicker>
                    </Col>
                    <Col span="8">
                    <TimePicker placeholder="Select time"></TimePicker>
                    </Col>
                    <Col span="8">
                    <TimePicker size="large" placeholder="Select time"></TimePicker>
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
        width: 32%;
    }
</style>