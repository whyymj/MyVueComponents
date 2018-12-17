<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Show Size Page</span></Divider>
        <h6 class="demons">每页数量 </h6>
        <h5 class="demonsContent">可以切换每页显示的数量。
        </h5>
        <div class='buttonShower'>
           <Page :total="100" show-sizer />
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