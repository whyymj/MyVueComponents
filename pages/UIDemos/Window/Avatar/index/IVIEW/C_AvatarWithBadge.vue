<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div class="demo-avatar-badge">
                    <Badge :count="1">
                        <Avatar shape="square" icon="ios-person" />
                    </Badge>
                    <Badge dot>
                        <Avatar shape="square" icon="ios-person" />
                    </Badge>
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