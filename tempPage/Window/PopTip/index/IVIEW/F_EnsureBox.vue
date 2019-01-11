<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Poptip confirm title="Are you sure you want to delete this item?" @on-ok="ok" @on-cancel="cancel">
                    <Button>Delete</Button>
                </Poptip>
                <Poptip confirm title="Are you sure delete this task?" @on-ok="ok" @on-cancel="cancel" ok-text="yes" cancel-text="no">
                    <Button>Internationalization</Button>
                </Poptip>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            ok() {
                this.$Message.info('You click ok');
            },
            cancel() {
                this.$Message.info('You click cancel');
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
    }
</style>