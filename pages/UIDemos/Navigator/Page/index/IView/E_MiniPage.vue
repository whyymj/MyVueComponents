<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Mini Page</span></Divider>
        <h6 class="demons">迷你型 </h6>
        <h5 class="demonsContent">设置size为small使用迷你型，迷你型拥有普通的所有功能。
        </h5>
        <div class='buttonShower'>
            <Page :total="40" size="small" />
            <Page :total="40" size="small" show-elevator show-sizer />
            <Page :total="40" size="small" show-total />
            <Page :current="2" :total="50" simple />
            
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