<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <p>With desc</p>
                <Button @click="info(false)">Info</Button>
                <Button @click="success(false)">Success</Button>
                <Button @click="warning(false)">Warning</Button>
                <Button @click="error(false)">Error</Button>
                <p>Only title</p>
                <Button @click="info(true)">Info</Button>
                <Button @click="success(true)">Success</Button>
                <Button @click="warning(true)">Warning</Button>
                <Button @click="error(true)">Error</Button>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            info(nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success(nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning(nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error(nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 26%;
    }
</style>