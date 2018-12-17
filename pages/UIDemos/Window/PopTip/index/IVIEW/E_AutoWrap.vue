<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
          <Poptip word-wrap width="200" content="Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.">
        <Button>Long Content</Button>
    </Poptip>
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
      width:45%; 
    }
</style>