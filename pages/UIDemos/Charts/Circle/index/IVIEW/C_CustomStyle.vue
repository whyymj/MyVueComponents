<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Circle :size="250" :trail-width="4" :stroke-width="5" :percent="75" stroke-linecap="square" stroke-color="#43a3fb">
                <div class="demo-Circle-custom">
                    <h1>42,001,776</h1>
                    <p>消费人群规模</p>
                    <span>
                    总占人数
                    <i>75%</i>
                </span>
                </div>
            </Circle>
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
        width: 45%;
        .buttonShower {
            .demo-Circle-custom {
                & h1 {
                    color: #3f414d;
                    font-size: 28px;
                    font-weight: normal;
                }
                & p {
                    color: #657180;
                    font-size: 14px;
                    margin: 10px 0 15px;
                }
                & span {
                    display: block;
                    padding-top: 15px;
                    color: #657180;
                    font-size: 14px;
                    &:before {
                        content: '';
                        display: block;
                        width: 50px;
                        height: 1px;
                        margin: 0 auto;
                        background: #e0e3e6;
                        position: relative;
                        top: -15px;
                    }
                    ;
                }
                & span i {
                    font-style: normal;
                    color: #3f414d;
                }
            }
        }
    }
</style>