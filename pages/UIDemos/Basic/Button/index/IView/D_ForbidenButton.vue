<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower' slot='components' style='background:#eee;padding:10px 0;box-sizing:border-box;'>
                <Button>Default</Button>
                <Button disabled>Default(Disabled)</Button>
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
        position: relative;
        width: 30%;
        max-height: 500px;
        overflow: auto;
        .buttonShower {
            margin: 20px 0;
            /deep/button {
                margin: 5px;
            }
        }
    }
</style>