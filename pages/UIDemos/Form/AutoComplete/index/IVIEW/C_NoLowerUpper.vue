<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <AutoComplete v-model="value3" :data="data3" :filter-method="filterMethod" placeholder="input here" style="width:200px">
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
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            filterMethod(value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
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