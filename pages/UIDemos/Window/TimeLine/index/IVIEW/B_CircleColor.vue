<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Timeline>
                    <TimelineItem color="green">发布1.0版本</TimelineItem>
                    <TimelineItem color="green">发布2.0版本</TimelineItem>
                    <TimelineItem color="red">严重故障</TimelineItem>
                    <TimelineItem color="blue">发布3.0版本</TimelineItem>
                </Timeline>
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
        width: 24%;
    }
</style>