<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <Badge dot>
                <a href="#" class="demo-badge"></a>
            </Badge>
            <Badge dot>
                <Icon type="ios-notifications-outline" size="26"></Icon>
            </Badge>
            <Badge dot>
                <a href="#">可以是一个链接</a>
            </Badge>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 25%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            display: flex;
           justify-content: space-around;
            .demo-badge {
                width: 42px;
                height: 42px;
                background: #fff;
                border-radius: 6px;
                display: inline-block;
            }
            .ivu-badge {}
        } 
    }
</style>