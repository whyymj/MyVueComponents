<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Combine Split</span></Divider>
        <h6 class="demons">面板嵌套</h6>
        <h5 class="demonsContent">可以嵌套使用。</h5>
        <div class='buttonShower'>
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
</template>
<script>
 
    export default {
        data() {
            return {
                split3: 0.5,
                split4:0.5
            }
        }, 
    }
</script>
<style scoped lang='scss'>
    .componentBox {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
        width: 50%;
        .buttonShower {
            height: 200px;
            border: 1px solid #dcdee2;
            .demo-split-pane {
                padding: 10px;
            }
            .demo-split-pane.no-padding {
                height: 200px;
                padding: 0;
            }
        }
    }
</style>