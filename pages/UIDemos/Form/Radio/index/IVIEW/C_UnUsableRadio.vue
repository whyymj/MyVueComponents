<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Radio v-model="disabledSingle" disabled>Radio</Radio>
                <RadioGroup v-model="disabledGroup">
                    <Radio label="金斑蝶" disabled></Radio>
                    <Radio label="爪哇犀牛"></Radio>
                    <Radio label="印度黑羚"></Radio>
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
                disabledSingle: true,
                disabledGroup: '爪哇犀牛'
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