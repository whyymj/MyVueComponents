<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Icon Breadcrumb</span></Divider>
        <h6 class="demons">带图标的 </h6>
        <h5 class="demonsContent">可自定义每项的内容，比如带有一个图标。
        </h5>
        <div class='buttonShower'>
            <Breadcrumb separator=">">
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
                <BreadcrumbItem to="/">Home</BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>
</template>
<script>
   
    export default {}
</script>
<style scoped lang='scss'>
   .componentBox {
        width:45%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            a{
                width:95px;
                height:32px;
                background: #fff;
                display: inline-block;
                line-height: 32px;
                margin:10px;
                 text-align: center;
            }
        }
        
        box-sizing: border-box;
        padding: 10px;
           .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
        }
    }
</style>