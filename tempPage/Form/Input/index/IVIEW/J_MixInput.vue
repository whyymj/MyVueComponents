<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Input v-model="value11">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
                </Input>
                <br>
                <Input v-model="value12">
                <Select v-model="select1" slot="prepend" style="width: 80px">
                <Option value="http">http://</Option>
                <Option value="https">https://</Option>
            </Select>
                <Select v-model="select2" slot="append" style="width: 70px">
                <Option value="com">.com</Option>
                <Option value="org">.org</Option>
                <Option value="io">.io</Option>
            </Select>
                </Input>
                <br>
                <Input v-model="value13">
                <Select v-model="select3" slot="prepend" style="width: 80px">
                <Option value="day">Day</Option>
                <Option value="month">Month</Option>
            </Select>
                <Button slot="append" icon="ios-search"></Button>
                </Input>
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
                value11: '',
                value12: '',
                value13: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
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