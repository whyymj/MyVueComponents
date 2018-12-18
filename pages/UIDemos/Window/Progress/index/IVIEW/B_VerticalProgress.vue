<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div style="height: 100px;">
                    <Progress vertical :percent="25" />
                    <Progress vertical :percent="45" status="active" />
                    <Progress vertical :percent="65" status="wrong" />
                    <Progress vertical :percent="100" />
                    <Progress vertical :percent="25" hide-info />
                </div>
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
        width: 32%;
    }
</style>