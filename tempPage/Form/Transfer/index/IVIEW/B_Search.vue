<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Transfer :data="data2" :target-keys="targetKeys2" filterable :filter-method="filterMethod" @on-change="handleChange2"></Transfer>
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
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys()
            }
        },
        methods: {
            getMockData() {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys() {
                return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
            },
            handleChange2(newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod(data, query) {
                return data.label.indexOf(query) > -1;
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 48%;
    }
</style>