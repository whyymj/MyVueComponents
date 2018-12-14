<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Horizontal Divider</span></Divider>
        <h6 class="demons">水平分割线 </h6>
        <h5 class="demonsContent">默认为水平分割线，可在中间加入文字
        </h5>
        <div class='buttonShower'>
            <p>Steven Paul Jobs was an American entrepreneur . </p>
            <Divider />
            <p>Steven Paul Jobs was an American entrepreneur . </p>
            <Divider>With Text</Divider>
            <p>Steven Paul Jobs was an American entrepreneur . </p>
            <Divider dashed />
            <p>Steven Paul Jobs was an American entrepreneur . </p>
        </div>
    </div>
</template>
<script>
    export default {}
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