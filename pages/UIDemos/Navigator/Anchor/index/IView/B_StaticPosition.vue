<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Tabs</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
        </h5>
        <div class='buttonShower'>
            <Anchor :affix="false" show-ink>
                <AnchorLink href="#basic_usage" title="Basic Usage" />
                <AnchorLink href="#static_position" title="Static Position" />
                <AnchorLink href="#API" title="API">
                    <AnchorLink href="#Anchor_props" title="Anchor props" />
                    <AnchorLink href="#Anchor_events" title="Anchor events" />
                    <AnchorLink href="#AnchorLink_props" title="AnchorLink props" />
                </AnchorLink>
            </Anchor>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
    }
</style>