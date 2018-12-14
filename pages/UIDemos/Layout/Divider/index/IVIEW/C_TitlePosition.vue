<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Horizontal Divider</span></Divider>
        <h6 class="demons">标题位置 </h6>
        <h5 class="demonsContent">修改分割线标题的位置。
        </h5>
        <div class='buttonShower'>
            <Divider orientation="left">Left Text</Divider>
            <p>Steven Paul Jobs was an American entrepreneur and business magnate</p>
            <Divider orientation="right">Right Text</Divider>
            <p>Steven Paul Jobs was an American entrepreneur and business magnate</p>
        </div>
    </div>
</template>
<script>
 
    export default  {}
</script>
<style scoped lang='scss'>
    .componentBox {
        border: 1px dashed #eee;
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
        width: 50%;
    }
</style>