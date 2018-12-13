<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Long Button</span></Divider>
        <h6 class="demons">长按钮 </h6>
        <h5 class="demonsContent" slot='components'>通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。 使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。
        </h5>
        <div class='buttonShower' slot='components' style='background:#eee;padding:10px 0;box-sizing:border-box;'>
            <Button type="success" long>SUBMIT</Button>
            <Button type="error" long>DELETE</Button>
        </div>
    </div>
</template>
<script >
    
    export default {}
</script>
<style scoped lang='scss'>
    .componentBox {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
         width:30%;
        justify-content: flex-start;
    }
</style>