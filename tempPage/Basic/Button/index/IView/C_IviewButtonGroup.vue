<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <!-- 下面为效果展示部分 -->
        <componentShower>
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
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        position: relative;
        width: 30%;
        max-height: 500px;
        overflow: auto;
        .buttonShower {
            margin: 20px 0;
            /deep/button {
                margin: 5px;
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