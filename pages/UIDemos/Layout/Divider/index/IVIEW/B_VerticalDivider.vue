<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Horizontal Divider</span></Divider>
        <h6 class="demons">垂直分割线 </h6>
        <h5 class="demonsContent">使用 type="vertical" 设置为行内的垂直分割线。
        </h5>
        <div class='buttonShower'>
            Text
            <Divider type="vertical" />
            <a href="#">Link</a>
            <Divider type="vertical" />
            <a href="#">Link</a>
        </div>
    </div>
</template>
<script>
    
    export default {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox { 
        width: 30%; 
    }
</style>