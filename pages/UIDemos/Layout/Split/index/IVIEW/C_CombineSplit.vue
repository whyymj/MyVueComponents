<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div class="demo-split">
                    <Split v-model="split3">
                        <div slot="left" class="demo-split-pane no-padding">
                            <Split v-model="split4" mode="vertical">
                                <div slot="top" class="demo-split-pane">
                                    Top Pane
                                </div>
                                <div slot="bottom" class="demo-split-pane">
                                    Bottom Pane
                                </div>
                            </Split>
                        </div>
                        <div slot="right" class="demo-split-pane">
                            Right Pane
                        </div>
                    </Split>
                </div>
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
                split3: 0.5,
                split4: 0.5
            }
        },
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
        .buttonShower {
            min-height: 100px;
            border: 1px solid #eee;
            .demo-split {
                height: 150px;
                border: 1px solid #dcdee2;
                .demo-split-pane {
                    padding: 10px;
                }
                .demo-split-pane.no-padding {
                    height: 150px;
                    padding: 0;
                }
            }
        }
    }
</style>