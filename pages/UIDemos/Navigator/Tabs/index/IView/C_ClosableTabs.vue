<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Tabs value="name1" type="card" closable @on-tab-remove="handleTabRemove">
                    <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
                    <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
                    <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
                </Tabs>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
            }
        },
        methods: {
            handleTabRemove(name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
        margin: 10px 2%;
    }
</style>