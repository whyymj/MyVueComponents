<template>
    <div class='componentBox'>
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Loading Status</span></Divider>
        <!-- 下面为效果展示部分 -->
        <h6 class="demons">加载中状态</h6>
        <h5 class="demonsContent">通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。
        </h5>
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
    </div>
</template>
<script>
    export default {
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