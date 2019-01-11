<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Button @click="success">Display success prompt</Button>
                <Button @click="warning">Display warning prompt</Button>
                <Button @click="error">Display error prompt</Button>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        methods: {
            success() {
                this.$Message.success('This is a success tip');
            },
            warning() {
                this.$Message.warning('This is a warning tip');
            },
            error() {
                this.$Message.error('This is an error tip');
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
    }
</style>