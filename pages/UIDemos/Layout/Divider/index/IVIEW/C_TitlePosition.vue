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
        box-sizing: border-box;
        padding: 10px;
        width: 30%;
         .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
           margin-bottom: 10px;
        }
    }
</style>