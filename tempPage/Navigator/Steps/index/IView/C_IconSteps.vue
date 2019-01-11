<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Steps :current="1">
                    <Step title="注册" icon="ios-person"></Step>
                    <Step title="上传头像" icon="ios-camera"></Step>
                    <Step title="验证邮箱" icon="ios-mail"></Step>
                </Steps>
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
        width: 48%;
        .buttonShower {
            >>>.ivu-steps {
                 ::before {
                    float: left;
                }
            }
        }
    }
</style>