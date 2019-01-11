<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div class="demo-spin-article">
                    <h3>登金陵凤凰台</h3>
                    <address>李白</address>
                    <article>
                        <p>凤凰台上凤凰游，凤去台空江自流。</p>
                        <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
                        <p>三山半落青天外，二水中分白鹭洲。</p>
                        <p>总为浮云能蔽日，长安不见使人愁。</p>
                    </article>
                    <Spin size="large" fix v-if="spinShow"></Spin>
                </div>
                <br> 切换显示状态：
                <i-switch @on-change="spinShow = !spinShow"></i-switch>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                spinShow: true
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        position: relative;
        width: 32%;
    }
</style>