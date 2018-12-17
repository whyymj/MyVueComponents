<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Page</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">基本的分页，页数过多时会自动折叠。
        </h5>
        <div class='buttonShower'>
             <Page :total="100" />
              <Page :total="100" prev-text="Previous" next-text="Next" />
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