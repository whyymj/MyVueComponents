<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button @click="value5 = true" type="primary">Open Drawer</Button>
                <Drawer title="Multi-level drawer" width="512" :closable="false" v-model="value5">
                    <Button @click="value6 = true" type="primary">Two-level Drawer</Button>
                </Drawer>
                <Drawer title="Two-level Drawer" :closable="false" v-model="value6">
                    This is two-level drawer.
                </Drawer>
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
                value5: false,
                value6: false
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 19%;
    }
</style>