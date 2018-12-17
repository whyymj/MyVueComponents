<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <div>
                <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
                <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSpinShow() {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom() {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%; 
        .buttonShower {
            
            .demo-spin-icon-load {
                animation: ani-demo-spin 1s linear infinite;
            }
        }
    }
</style>