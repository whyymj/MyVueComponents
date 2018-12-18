<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Transfer :data="data1" :target-keys="targetKeys1" :render-format="render1" @on-change="handleChange1"></Transfer>
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
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
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
            render1(item) {
                return item.label;
            },
            handleChange1(newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
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