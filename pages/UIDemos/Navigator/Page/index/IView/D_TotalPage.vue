<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - TotalSize Page</span></Divider>
        <h6 class="demons">总数  </h6>
        <h5 class="demonsContent">显示总共多少条数据，接受 slot 来自定义内容，默认显示共{{ total }}条
        </h5>
        <div class='buttonShower'>
        <Page :total="100" show-total />
        </div>
        
    </div>
</template>
<script>
    
    export default {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
  .componentBox {
        width:45%;
       
    }
</style>