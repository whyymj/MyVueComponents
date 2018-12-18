<template>
    <div class='componentBox'>
        <componentShower>
            <div class='buttonShower'>
                <div class='loadingIviewButton'>
                    <Button type="primary" loading>Loading...</Button>
                    <Button type="primary" :loading="loading" @click="toLoading">
                                                <span v-if="!loading">Click me!</span>
                                                <span v-else>Loading...</span>
                                            </Button>
                    <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
                                                <span v-if="!loading2">Click me!</span>
                                                <span v-else>Loading...</span>
                                            </Button>
                    <Button loading shape="circle"></Button>
                    <Button loading shape="circle" type="primary"></Button>
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
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading() {
                this.loading = true;
            },
            toLoading2() {
                this.loading2 = true;
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 30%;
        .buttonShower {
            margin: 20px 0;
            /deep/button {
                margin: 5px;
            }
        }
    }
    .loadingIviewButton {
        width: 100%;
        display: flex;
        background: #eee;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>