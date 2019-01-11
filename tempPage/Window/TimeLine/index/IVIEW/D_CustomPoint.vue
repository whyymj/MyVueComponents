<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Timeline>
                    <TimelineItem color="green">
                        <Icon type="ios-trophy" slot="dot"></Icon>
                        <span>发布里程碑版本</span>
                    </TimelineItem>
                    <TimelineItem>发布1.0版本</TimelineItem>
                    <TimelineItem>发布2.0版本</TimelineItem>
                    <TimelineItem>发布3.0版本</TimelineItem>
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