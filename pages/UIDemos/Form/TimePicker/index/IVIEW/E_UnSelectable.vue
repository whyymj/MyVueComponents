<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Row>
                    <Col span="12">
                    <TimePicker :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="Select time" style="width: 168px"></TimePicker>
                    </Col>
                    <Col span="12">
                    <TimePicker hide-disabled-options :disabled-hours="[1,5,10]" :disabled-minutes="[0,10,20]" placeholder="Select time" style="width: 168px"></TimePicker>
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