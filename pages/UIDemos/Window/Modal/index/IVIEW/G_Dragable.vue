<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button @click="modal12 = true">Open the first modal</Button>
                <Button @click="modal13 = true">Open the second modal</Button>
                <Modal v-model="modal12" draggable scrollable title="Modal 1">
                    <div>This is the first modal</div>
                </Modal>
                <Modal v-model="modal13" draggable scrollable title="Modal 2">
                    <div>This is the second modal</div>
                </Modal>
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
                modal12: false,
                modal13: false
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 33%;
    }
</style>