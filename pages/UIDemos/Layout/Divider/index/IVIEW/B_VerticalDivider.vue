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