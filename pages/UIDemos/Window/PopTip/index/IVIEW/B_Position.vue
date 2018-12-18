<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <div class="top">
                <Poptip title="Title" content="content" placement="top-start">
                    <Button>Top Left</Button>
                </Poptip>
                <Poptip title="Title" content="content" placement="top">
                    <Button>Top Center</Button>
                </Poptip>
                <Poptip title="Title" content="content" placement="top-end">
                    <Button>Top Right</Button>
                </Poptip>
            </div>
            <div class="center">
                <div class="center-left">
                    <Poptip title="Title" content="content" placement="left-start">
                        <Button>Left Top</Button>
                    </Poptip><br><br>
                    <Poptip title="Title" content="content" placement="left">
                        <Button>Left Center</Button>
                    </Poptip><br><br>
                    <Poptip title="Title" content="content" placement="left-end">
                        <Button>Left Right</Button>
                    </Poptip>
                </div>
                <div class="center-right">
                    <Poptip title="Title" content="content" placement="right-start">
                        <Button>Right Top</Button>
                    </Poptip><br><br>
                    <Poptip title="Title" content="content" placement="right">
                        <Button>Right Center</Button>
                    </Poptip><br><br>
                    <Poptip title="Title" content="content" placement="right-end">
                        <Button>Right Bottom</Button>
                    </Poptip>
                </div>
            </div>
            <div class="bottom">
                <Poptip title="Title" content="content" placement="bottom-start">
                    <Button>Bottom Left</Button>
                </Poptip>
                <Poptip title="Title" content="content" placement="bottom">
                    <Button>Bottom Center</Button>
                </Poptip>
                <Poptip title="Title" content="content" placement="bottom-end">
                    <Button>Bottom Right</Button>
                </Poptip>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
       width:32%;
        .buttonShower {
            .top,
            .bottom {
                text-align: center;
            }
            .center {
                width: 300px;
                margin: 10px auto;
                overflow: hidden;
            }
            .center-left {
                float: left;
            }
            .center-right {
                float: right;
            }
        }
    }
</style>