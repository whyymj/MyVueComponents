<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div style="background:#eee;padding: 20px">
                    <Card :bordered="false">
                        <p slot="title">No border title</p>
                        <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                    </Card>
                </div>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 47%;
    }
</style>