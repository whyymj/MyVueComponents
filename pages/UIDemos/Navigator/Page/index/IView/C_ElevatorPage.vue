<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Elevator Page</span></Divider>
        <h6 class="demons">电梯 </h6>
        <h5 class="demonsContent">快速跳转到某一页。
        </h5>
        <div class='buttonShower'>
         <Page :total="100" show-elevator />
        </div>
        
    </div>
</template>
<script>
   
    export default {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
   .componentBox {
          width: 47%;
    }
</style>