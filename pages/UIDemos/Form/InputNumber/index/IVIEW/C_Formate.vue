<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div>
                    <InputNumber :max="10000" v-model="value9" :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')" :parser="value => value.replace(/$s?|(,*)/g, '')"></InputNumber>
                    <InputNumber :max="100" v-model="value10" :formatter="value => `${value}%`" :parser="value => value.replace('%', '')"></InputNumber>
                </div>
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
                value9: 1000,
                value10: 100
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 20%;
    }
</style>