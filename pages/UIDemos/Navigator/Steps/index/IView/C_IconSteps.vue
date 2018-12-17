<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <Steps :current="1">
        <Step title="注册" icon="ios-person"></Step>
        <Step title="上传头像" icon="ios-camera"></Step>
        <Step title="验证邮箱" icon="ios-mail"></Step>
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