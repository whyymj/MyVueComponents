<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Steps :current="2" size="small">
                    <Step title="已完成"></Step>
                    <Step title="进行中"></Step>
                    <Step title="待进行"></Step>
                    <Step title="待进行"></Step>
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