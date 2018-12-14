<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Vertical Split</span></Divider>
        <h6 class="demons">上下分割 </h6>
        <h5 class="demonsContent">上下分割用法。
        </h5>
        <div class='buttonShower'>
            <Split v-model="split2" mode="vertical">
                <div slot="top" class="demo-split-pane">
                    Top Pane
                </div>
                <div slot="bottom" class="demo-split-pane">
                    Bottom Pane
                </div>
            </Split>
        </div>
    </div>
</template>
<script>
  
    export default  {
        data() {
            return {
                split2: 0.5
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
        }
    }
</style>