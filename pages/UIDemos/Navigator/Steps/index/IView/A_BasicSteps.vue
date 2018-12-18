<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Steps :current="1">
                    <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                    <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    <Step title="待进行" content="这里是该步骤的描述信息"></Step>
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
            >>>.ivu-steps .ivu-steps-head-inner>.ivu-steps-icon.ivu-icon {
                line-height: 10px;
            }
        }
    }
</style>