<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Icon Breadcrumb</span></Divider>
        <h6 class="demons">带图标的 </h6>
        <h5 class="demonsContent">可自定义每项的内容，比如带有一个图标。
        </h5>
        <div class='buttonShower'>
            <Breadcrumb>
                <BreadcrumbItem to="/">
                    <Icon type="ios-home-outline"></Icon> Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">
                    <Icon type="logo-buffer"></Icon> Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon type="ios-cafe"></Icon> Breadcrumb
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
</template>
<script>
   
    export default{}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
   .componentBox {
        width:32%;
    }
</style>