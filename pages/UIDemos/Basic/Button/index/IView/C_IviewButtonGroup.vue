<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <!-- 下面为效果展示部分 -->
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Button Group</span></Divider>
        <h6 class="demons" slot='components'>按钮组合</h6>
        <h5 class="demonsContent" slot='components'>将多个Button放入ButtonGroup内，可实现按钮组合的效果。
        </h5>
        <h5 class="demonsContent" slot='components'>通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。
        </h5>
        <h5 class="demonsContent" slot='components'>通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。
        </h5>
        <div class='buttonShower'>
            <div class='iviewButtonGroup'>
                <h4>Icons</h4>
                <ButtonGroup>
                    <Button type="primary">
                    <Icon type="ios-arrow-back"></Icon>
                    Backward
                </Button>
                    <Button type="primary">
                    Forward
                    <Icon type="ios-arrow-forward"></Icon>
                </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary" icon="ios-skip-backward"></Button>
                    <Button type="primary" icon="ios-skip-forward"></Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button icon="ios-color-wand-outline"></Button>
                    <Button icon="ios-sunny-outline"></Button>
                    <Button icon="ios-crop"></Button>
                    <Button icon="ios-color-filter-outline"></Button>
                </ButtonGroup>
                <h4>Circle</h4>
                <ButtonGroup shape="circle">
                    <Button type="primary">
                                <Icon type="ios-arrow-back"></Icon>
                                Backward
                            </Button>
                    <Button type="primary">
                                Forward
                                <Icon type="ios-arrow-forward"></Icon>
                            </Button>
                </ButtonGroup>
                <ButtonGroup shape="circle">
                    <Button type="primary" icon="ios-skip-backward"></Button>
                    <Button type="primary" icon="ios-skip-forward"></Button>
                </ButtonGroup>
                <h4>Vertical</h4>
                <ButtonGroup vertical>
                    <Button icon="logo-facebook"></Button>
                    <Button icon="logo-twitter"></Button>
                    <Button icon="logo-googleplus"></Button>
                    <Button icon="logo-tumblr"></Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
</template>
<script>
 
    export default {}
</script>
<style scoped lang='scss'>
    .componentBox {
        position: relative;
        width: 30%;
        box-sizing: border-box;
        padding: 10px;
        max-height: 500px;
        overflow: auto;
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
    .iviewButtonGroup {
        h4 {
            text-align: left;
            padding-left: 10px;
            font-size: 16px;
            font-weight: 100;
        }
        /deep/ .ivu-btn-group {
            margin: 10px;
            button {
                margin: 0;
            }
        }
    }
</style>