<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button type="primary" @click="open(false)">Open notice</Button>
                <Button @click="open(true)">Open notice(only title)</Button>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            open(nodesc) {
                this.$Notice.open({
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
        width: 24%;
    }
</style>