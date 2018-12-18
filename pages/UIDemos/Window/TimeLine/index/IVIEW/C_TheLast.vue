<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Timeline pending>
                    <TimelineItem>发布1.0版本</TimelineItem>
                    <TimelineItem>发布2.0版本</TimelineItem>
                    <TimelineItem>发布3.0版本</TimelineItem>
                    <TimelineItem><a href="#">查看更多</a></TimelineItem>
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