<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <CheckboxGroup v-model="social">
                    <Checkbox label="twitter">
                        <Icon type="logo-twitter"></Icon>
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox label="facebook">
                        <Icon type="logo-facebook"></Icon>
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox label="github">
                        <Icon type="logo-github"></Icon>
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox label="snapchat">
                        <Icon type="logo-snapchat"></Icon>
                        <span>Snapchat</span>
                    </Checkbox>
                </CheckboxGroup>
                <CheckboxGroup v-model="fruit">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
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
                social: ['facebook', 'github'],
                fruit: ['苹果']
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