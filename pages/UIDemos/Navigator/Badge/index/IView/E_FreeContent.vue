<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <Row>
                <Col span="6">
                <Badge text="new">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                </Col>
                <Col span="6">
                <Badge text="hot">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            
            .demo-badge {
                width: 42px;
                height: 42px;
                background: #fff;
                border-radius: 6px;
                display: inline-block;
            }
        } 
    }
</style>