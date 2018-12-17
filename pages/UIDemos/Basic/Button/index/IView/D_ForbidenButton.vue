<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Disabled Button</span></Divider>
        <h6 class="demons" slot='components'>不可用状态 </h6>
        <h5 class="demonsContent" slot='components'>通过添加disabled属性可将按钮设置为不可用状态。
        </h5>
        <div class='buttonShower' slot='components' style='background:#eee;padding:10px 0;box-sizing:border-box;'>
            <Button>Default</Button>
            <Button disabled>Default(Disabled)</Button>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        position: relative;
        width: 30%;
        max-height: 500px;
        overflow: auto;
        .buttonShower {
            margin: 20px 0;
            /deep/button {
                margin: 5px;
            }
        }
    }
</style>