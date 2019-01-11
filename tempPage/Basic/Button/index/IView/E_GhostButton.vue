<template>
    <div class='componentBox'>
        <componentShower>
            <div class='buttonShower' slot='components' style='background:#eee;padding:10px 0;box-sizing:border-box;'>
                <Button ghost>Default</Button>
                <Button type="primary" ghost>Primary</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button type="text" ghost>Text</Button>
                <Button type="info" ghost>Info</Button>
                <Button type="success" ghost>Success</Button>
                <Button type="warning" ghost>Warning</Button>
                <Button type="error" ghost>Error</Button>
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
        position: relative;
        width: 30%;
        max-height: 500px;
        overflow: auto;
        .buttonShower {
            margin: 20px 0;
            /deep/button {
                margin: 5px;
            }
        }
    }
</style>