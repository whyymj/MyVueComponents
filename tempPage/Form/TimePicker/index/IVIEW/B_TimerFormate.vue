<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Row>
                    <Col span="12">
                    <TimePicker :value="value1" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></TimePicker>
                    </Col>
                    <Col span="12">
                    <TimePicker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
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
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00']
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