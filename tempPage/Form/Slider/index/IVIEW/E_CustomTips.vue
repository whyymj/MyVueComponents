<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Slider v-model="value9" :tip-format="format"></Slider>
                <Slider v-model="value10" :tip-format="hideFormat"></Slider>
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
                value9: 25,
                value10: 25
            }
        },
        methods: {
            format(val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat() {
                return null;
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