<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button type="primary" @click="time">Open notice</Button>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            time() {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 22%;
    }
</style>