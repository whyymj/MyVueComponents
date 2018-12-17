<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <Steps :current="2" size="small">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
    </Steps>
        </div>
        
    </div>
</template>
<script>
   
    export default{}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
   .componentBox {
        width:45%;
        
    }
</style>