<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Tabs value="name1">
                    <TabPane label="标签1" name="name1">标签一的内容</TabPane>
                    <TabPane label="标签2" name="name2" disabled>标签二的内容</TabPane>
                    <TabPane label="标签3" name="name3">标签三的内容</TabPane>
                    <TabPane label="标签4" name="name4">标签四的内容</TabPane>
                    <TabPane label="标签5" name="name5">标签五的内容</TabPane>
                    <TabPane label="标签6" name="name6">标签六的内容</TabPane>
                    <TabPane label="标签7" name="name7">标签七的内容</TabPane>
                </Tabs>
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
        width: 95%;
        margin: 10px 2.5%;
        .buttonShower {
            /deep/ .ivu-tabs {
                background: #fff;
            }
        }
    }
</style>