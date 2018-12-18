<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Rate clearable v-model="value1" /> clearable: true
                <Rate v-model="value2" /> clearable: false
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
                value1: 3,
                value2: 3
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