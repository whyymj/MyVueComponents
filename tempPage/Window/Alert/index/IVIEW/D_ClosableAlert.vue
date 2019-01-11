<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Alert closable>An info prompt</Alert>
                <Alert type="success" show-icon closable>
                    A success prompt
                    <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
                </Alert>
                <Alert type="warning" closable>
                    Custom closing content
                    <span slot="close">No longer prompt</span>
                </Alert>
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