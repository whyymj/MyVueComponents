<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Poptip trigger="focus">
                    <Input v-model="value15" prefix="logo-usd" placeholder="Enter number" style="width: 120px" />
                    <div slot="content">{{ formatNumber }}</div>
                </Poptip>
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
                value15: ''
            }
        },
        computed: {
            formatNumber() {
                if (this.value15 === '') return 'Enter number';
                function parseNumber(str) {
                    const re = /(?=(?!)(d{3})+$)/g;
                    return str.replace(re, ',');
                }
                return parseNumber(this.value15);
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