<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>'
            <div class='buttonShower'>
                <BackTop :height="100" :bottom="200">
                    <div class="top">返回顶端</div>
                </BackTop>
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
        width: 45%;
        .buttonShower {
            .top {
                padding: 10px;
                background: rgba(0, 153, 229, .7);
                color: #fff;
                text-align: center;
                border-radius: 2px;
            }
        }
    }
</style>