<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">按钮类型 </h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </div>
    </div>
</template>
<script>

</script>
<style scoped lang='scss'>
    .componentBox {
        position: relative;
        width: 30%;
        box-sizing: border-box;
        padding: 10px;
        .demons {
            font-size: 18px;
            font-weight: 100;
            margin: 10px 0;
        }
        .demonsContent {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            margin: 10px 0;
            text-indent: 2em;
        }
        .buttonShower{
            margin:20px 0;
            /deep/button{
                margin:5px;
            }
        }
    }
</style>