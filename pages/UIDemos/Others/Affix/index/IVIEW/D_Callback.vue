<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Affix :offset-top="100" @on-change="change">
                    <span class="demo-affix">Fix the position at the top of 100px at the top</span>
                </Affix>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            change(status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 24%;
    }
</style>