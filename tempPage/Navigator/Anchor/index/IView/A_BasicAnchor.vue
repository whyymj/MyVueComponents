<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Anchor show-ink>
                    <AnchorLink href="#basic_usage" title="Basic Usage" />
                    <AnchorLink href="#static_position" title="Static Position" />
                    <AnchorLink href="#API" title="API">
                        <AnchorLink href="#Anchor_props" title="Anchor props" />
                        <AnchorLink href="#Anchor_events" title="Anchor events" />
                        <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                    </AnchorLink>
                </Anchor>
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
        width: 45%;
    }
</style>