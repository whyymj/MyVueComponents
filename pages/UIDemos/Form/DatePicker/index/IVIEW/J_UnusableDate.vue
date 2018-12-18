<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Row>
                    <Col span="12">
                    <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
                    </Col>
                    <Col span="12">
                    <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
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
                options3: {
                    disabledDate(date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate(date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
    }
</style>