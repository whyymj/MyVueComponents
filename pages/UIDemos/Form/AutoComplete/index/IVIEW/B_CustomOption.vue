<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <AutoComplete v-model="value2" @on-search="handleSearch2" placeholder="input here" style="width:200px">
                    <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
                </AutoComplete>
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
                value2: '',
                data2: []
            }
        },
        methods: {
            handleSearch2(value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
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