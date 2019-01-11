<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Timeline>
                    <TimelineItem>
                        <p class="time">1976年</p>
                        <p class="content">Apple I 问世</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">1984年</p>
                        <p class="content">发布 Macintosh</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2007年</p>
                        <p class="content">发布 iPhone</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2010年</p>
                        <p class="content">发布 iPad</p>
                    </TimelineItem>
                    <TimelineItem>
                        <p class="time">2011年10月5日</p>
                        <p class="content">史蒂夫·乔布斯去世</p>
                    </TimelineItem>
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
        .buttonShower {
            .time {
                font-size: 14px;
                font-weight: bold;
            }
            .content {
                padding-left: 5px;
            }
        }
    }
</style>