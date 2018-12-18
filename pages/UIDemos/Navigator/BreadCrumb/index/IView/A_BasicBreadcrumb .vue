<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Breadcrumb>
                    <BreadcrumbItem to="/">Home</BreadcrumbItem>
                    <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
                    <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
                </Breadcrumb>
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
        width: 32%;
    }
</style>