<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
           <div class="top">
        <Tooltip content="Top Left text" placement="top-start">
            <Button>Top Left</Button>
        </Tooltip>
        <Tooltip content="Top Center text" placement="top">
            <Button>Top Center</Button>
        </Tooltip>
        <Tooltip content="Top Right text" placement="top-end">
            <Button>Top Right</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top text" placement="left-start">
                <Button>Left Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center text" placement="left">
                <Button>Left Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom text" placement="left-end">
                <Button>Left Bottom</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top text" placement="right-start">
                <Button>Right Top</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center text" placement="right">
                <Button>Right Center</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom text" placement="right-end">
                <Button>Right Bottom</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left text" placement="bottom-start">
            <Button>Bottom Left</Button>
        </Tooltip>
        <Tooltip content="Bottom Center text" placement="bottom">
            <Button>Bottom Center</Button>
        </Tooltip>
        <Tooltip content="Bottom Right text" placement="bottom-end">
            <Button>Bottom Right</Button>
        </Tooltip>
    </div>
        </div>
    </div>
</template>
<script>
    export default {
       
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
            } .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
        }
    }
</style>