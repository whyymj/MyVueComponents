<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <AutoComplete v-model="value1" :data="data1" @on-search="handleSearch1" placeholder="input here" style="width:200px"></AutoComplete>
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
                value1: '',
                data1: []
            }
        },
        methods: {
            handleSearch1(value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
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