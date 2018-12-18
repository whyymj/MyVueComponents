<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div>
                    <div class="demo-avatar">
                        <Avatar icon="ios-person" size="large" />
                        <Avatar icon="ios-person" />
                        <Avatar icon="ios-person" size="small" />
                    </div>
                    <div class="demo-avatar">
                        <Avatar shape="square" icon="ios-person" size="large" />
                        <Avatar shape="square" icon="ios-person" />
                        <Avatar shape="square" icon="ios-person" size="small" />
                    </div>
                </div>
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
        width: 24%;
    }
</style>