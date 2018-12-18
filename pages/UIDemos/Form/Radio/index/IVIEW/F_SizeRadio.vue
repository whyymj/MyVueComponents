<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <RadioGroup v-model="button4" type="button" size="large">
                    <Radio label="北京"></Radio>
                    <Radio label="上海"></Radio>
                    <Radio label="深圳"></Radio>
                    <Radio label="杭州"></Radio>
                </RadioGroup>
                <RadioGroup v-model="button5" type="button">
                    <Radio label="北京"></Radio>
                    <Radio label="上海"></Radio>
                    <Radio label="深圳"></Radio>
                    <Radio label="杭州"></Radio>
                </RadioGroup>
                <RadioGroup v-model="button6" type="button" size="small">
                    <Radio label="北京"></Radio>
                    <Radio label="上海"></Radio>
                    <Radio label="深圳"></Radio>
                    <Radio label="杭州"></Radio>
                </RadioGroup>
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
                button4: '北京',
                button5: '北京',
                button6: '北京'
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