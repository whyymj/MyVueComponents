<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Split v-model="split1">
                    <div slot="left" class="demo-split-pane">
                        Left Pane
                    </div>
                    <div slot="right" class="demo-split-pane">
                        Right Pane
                    </div>
                </Split>
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
                split1: 0.5
            }
        },
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
        .buttonShower {
            border: 1px solid #eee;
            height: 150px;
            .demo-split {
                height: 200px;
                border: 1px solid #dcdee2;
            }
            .demo-split-pane {
                padding: 10px;
            }
        }
    }
</style>