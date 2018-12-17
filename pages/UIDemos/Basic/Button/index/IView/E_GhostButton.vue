<template>
    <div class='componentBox'>
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Ghost Button</span></Divider>
        <!-- 下面为效果展示部分 -->
        <h6 class="demons" slot='components'>幽灵按钮 </h6>
        <h5 class="demonsContent" slot='components'>幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
        </h5>
        <div class='buttonShower' slot='components' style='background:#eee;padding:10px 0;box-sizing:border-box;'>
            <Button ghost>Default</Button>
            <Button type="primary" ghost>Primary</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="text" ghost>Text</Button>
            <Button type="info" ghost>Info</Button>
            <Button type="success" ghost>Success</Button>
            <Button type="warning" ghost>Warning</Button>
            <Button type="error" ghost>Error</Button>
        </div>
    </div>
</template>
<script >
   
    export default {}
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
  .componentBox {
        position: relative;
        width: 30%;
        max-height: 500px;
        overflow: auto;
        .buttonShower{
            margin:20px 0;
            /deep/button{
                margin:5px;
            }
        }
    }
</style>