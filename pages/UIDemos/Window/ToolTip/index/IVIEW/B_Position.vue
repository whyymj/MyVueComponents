<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
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
        width: 32%;
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