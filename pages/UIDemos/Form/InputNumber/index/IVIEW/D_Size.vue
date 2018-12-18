<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <InputNumber v-model="value3" size="small"></InputNumber>
                <InputNumber v-model="value4"></InputNumber>
                <InputNumber v-model="value5" size="large"></InputNumber>
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
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 35%;
    }
</style>