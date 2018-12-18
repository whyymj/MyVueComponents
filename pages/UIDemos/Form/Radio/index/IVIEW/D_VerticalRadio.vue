<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <RadioGroup v-model="vertical" vertical>
                    <Radio label="apple">
                        <Icon type="social-apple"></Icon>
                        <span>Apple</span>
                    </Radio>
                    <Radio label="android">
                        <Icon type="social-android"></Icon>
                        <span>Android</span>
                    </Radio>
                    <Radio label="windows">
                        <Icon type="social-windows"></Icon>
                        <span>Windows</span>
                    </Radio>
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
                vertical: 'apple'
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