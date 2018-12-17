<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
             <Circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </Circle>
    <ButtonGroup size="large">
        <Button icon="ios-add" @click="add"></Button>
        <Button icon="ios-remove" @click="minus"></Button>
    </ButtonGroup>
        </div>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
      width:45%; 
    }
</style>