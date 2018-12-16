<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Button @click="modal12 = true">Open the first modal</Button>
    <Button @click="modal13 = true">Open the second modal</Button>
    <Modal v-model="modal12" draggable scrollable title="Modal 1">
        <div>This is the first modal</div>
    </Modal>
    <Modal v-model="modal13" draggable scrollable title="Modal 2">
        <div>This is the second modal</div>
    </Modal>
        </div>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                modal12: false,
                modal13: false
            }
        }
    }
</script>
<style scoped lang='scss'>
    .componentBox {
      width:45%;
        box-sizing: border-box;
        padding: 10px;
      
        .buttonShower {
            p {
                text-align: left;
            }
            li {
                list-style: none;
                text-align: left;
                span {
                    float: right;
                    color: #ff9900;
                }
            }
        }
    }
</style>