<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Horizon Split</span></Divider>
        <h6 class="demons">左右分割 </h6>
        <h5 class="demonsContent">左右分割用法。
        </h5>
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
    </div>
</template>
<script>
   
    export default  {
        data() {
            return {
                split1: 0.5
            }
        }, 
    }
</script>
<style scoped lang='scss'>
    .componentBox {
       
        width:30%;
      
        box-sizing: border-box;
        padding: 10px;
        .buttonShower {
            height: 200px;
            border: 1px solid #dcdee2;
            .demo-split-pane {
                padding: 10px;
            }
        }
        .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
        }
    }
</style>