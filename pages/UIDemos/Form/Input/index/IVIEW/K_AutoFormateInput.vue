<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Poptip trigger="focus">
                <Input v-model="value15" prefix="logo-usd" placeholder="Enter number" style="width: 120px" />
                <div slot="content">{{ formatNumber }}</div>
            </Poptip>
        </div>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                value15: ''
            }
        },
        computed: {
            formatNumber () {
                if (this.value15 === '') return 'Enter number';
                function parseNumber(str) {
                    const re = /(?=(?!)(d{3})+$)/g;
                    return str.replace(re, ',');
                }
                return parseNumber(this.value15);
            }
        }
    }
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%; 
    }
</style>