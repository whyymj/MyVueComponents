<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
           <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
        </div>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    }
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
      width:24%; 
    }
</style>