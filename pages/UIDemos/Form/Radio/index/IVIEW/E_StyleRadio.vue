<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <RadioGroup v-model="button1" type="button">
                    <Radio label="北京"></Radio>
                    <Radio label="上海"></Radio>
                    <Radio label="深圳"></Radio>
                    <Radio label="杭州"></Radio>
                </RadioGroup>
                <RadioGroup v-model="button2" type="button">
                    <Radio label="北京"></Radio>
                    <Radio label="上海" disabled></Radio>
                    <Radio label="深圳"></Radio>
                    <Radio label="杭州"></Radio>
                </RadioGroup>
                <RadioGroup v-model="button3" type="button">
                    <Radio label="北京" disabled></Radio>
                    <Radio label="上海" disabled></Radio>
                    <Radio label="深圳" disabled></Radio>
                    <Radio label="杭州" disabled></Radio>
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
                button1: '北京',
                button2: '北京',
                button3: '北京'
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