<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button @click="modal9 = true">20px from the top</Button>
                <Modal title="Title" v-model="modal9" :styles="{top: '20px'}">
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                </Modal>
                <Button @click="modal10 = true">Vertical center</Button>
                <Modal title="Title" v-model="modal10" class-name="vertical-center-modal">
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
                    <p>Content of dialog</p>
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
                modal9: false,
                modal10: false,
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
        .buttonShower {
            .vertical-center-modal {
                display: flex;
                align-items: center;
                justify-content: center;
                .ivu-modal {
                    top: 0;
                }
            }
        }
    }
</style>