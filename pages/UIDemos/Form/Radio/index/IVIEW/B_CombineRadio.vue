<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <RadioGroup v-model="phone">
                    <Radio label="apple">
                        <Icon type="logo-apple"></Icon>
                        <span>Apple</span>
                    </Radio>
                    <Radio label="android">
                        <Icon type="logo-android"></Icon>
                        <span>Android</span>
                    </Radio>
                    <Radio label="windows">
                        <Icon type="logo-windows"></Icon>
                        <span>Windows</span>
                    </Radio>
                </RadioGroup>
                <RadioGroup v-model="animal">
                    <Radio label="金斑蝶"></Radio>
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
                phone: 'apple',
                animal: '爪哇犀牛'
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