<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
                <CheckboxGroup v-model="disabledGroup">
                    <Checkbox label="香蕉" disabled></Checkbox>
                    <Checkbox label="苹果" disabled></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </CheckboxGroup>
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
                disabledGroup: ['苹果']
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