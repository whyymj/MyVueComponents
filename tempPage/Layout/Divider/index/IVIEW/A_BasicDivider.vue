<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <p>Steven Paul Jobs was an American entrepreneur . </p>
                <Divider />
                <p>Steven Paul Jobs was an American entrepreneur . </p>
                <Divider>With Text</Divider>
                <p>Steven Paul Jobs was an American entrepreneur . </p>
                <Divider dashed />
                <p>Steven Paul Jobs was an American entrepreneur . </p>
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
    }
</style>