<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <i-circle :percent="percent" :stroke-color="color">
                    <Icon v-if="percent == 100" type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
                    <span v-else style="font-size:24px">{{ percent }}%</span>
                </i-circle>
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
        computed: {
            color() {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
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
        width: 31%;
    }
</style>