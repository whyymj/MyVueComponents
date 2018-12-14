<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Tabs</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
        </h5>
        <div class='buttonShower'>
           
         有问题
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
    .componentBox {
        width: 45%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            a {
                width: 95px;
                height: 32px;
                background: #fff;
                display: inline-block;
                line-height: 32px;
                margin: 10px;
                text-align: center;
            }
        }
        box-sizing: border-box;
        padding: 10px;
        .demons {
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