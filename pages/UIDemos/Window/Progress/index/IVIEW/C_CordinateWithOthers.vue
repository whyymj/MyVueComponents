<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Progress :percent="percent" />
                <ButtonGroup size="large">
                    <Button icon="ios-add" @click="add"></Button>
                    <Button icon="ios-remove" @click="minus"></Button>
                </ButtonGroup>
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
                percent: 0
            }
        },
        methods: {
            add() {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus() {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
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