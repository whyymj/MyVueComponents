<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Badge :count="10"></Badge>
                <Badge :count="20" class-name="demo-badge-alone"></Badge>
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
        width: 23%;
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
            .demo-badge-alone {
                background: #5cb85c !important;
            }
        }
    }
</style>