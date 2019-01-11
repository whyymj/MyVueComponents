<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Badge :count="5" type="primary">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="success">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="normal">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="info">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="error">
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge :count="5" type="warning">
                    <a href="#" class="demo-badge"></a>
                </Badge>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
    }
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