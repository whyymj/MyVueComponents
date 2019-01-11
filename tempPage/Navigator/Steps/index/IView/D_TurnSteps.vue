<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <p>当前正在进行第 {{ current + 1 }} 步</p>
                <Steps :current="current">
                    <Step title="步骤1"></Step>
                    <Step title="步骤2"></Step>
                    <Step title="步骤3"></Step>
                    <Step title="步骤4"></Step>
                </Steps>
                <Button type="primary" @click="next">Next step</Button>
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
                current: 0
            }
        },
        methods: {
            next() {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
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