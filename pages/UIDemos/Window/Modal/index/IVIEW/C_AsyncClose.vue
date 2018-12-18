<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button type="primary" @click="modal6 = true">Display dialog box</Button>
                <Modal v-model="modal6" title="Title" :loading="loading" @on-ok="asyncOK">
                    <p>After you click ok, the dialog box will close in 2 seconds.</p>
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
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK() {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 28%;
    }
</style>