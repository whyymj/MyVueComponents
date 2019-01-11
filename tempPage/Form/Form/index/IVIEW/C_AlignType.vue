<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Form :model="formLeft" label-position="left" :label-width="100">
                    <FormItem label="Title">
                        <Input v-model="formLeft.input1"></Input>
                    </FormItem>
                    <FormItem label="Title name">
                        <Input v-model="formLeft.input2"></Input>
                    </FormItem>
                    <FormItem label="Aligned title">
                        <Input v-model="formLeft.input3"></Input>
                    </FormItem>
                </Form>
                <Form :model="formRight" label-position="right" :label-width="100">
                    <FormItem label="Title">
                        <Input v-model="formRight.input1"></Input>
                    </FormItem>
                    <FormItem label="Title name">
                        <Input v-model="formRight.input2"></Input>
                    </FormItem>
                    <FormItem label="Aligned title">
                        <Input v-model="formRight.input3"></Input>
                    </FormItem>
                </Form>
                <Form :model="formTop" label-position="top">
                    <FormItem label="Title">
                        <Input v-model="formTop.input1"></Input>
                    </FormItem>
                    <FormItem label="Title name">
                        <Input v-model="formTop.input2"></Input>
                    </FormItem>
                    <FormItem label="Aligned title">
                        <Input v-model="formTop.input3"></Input>
                    </FormItem>
                </Form>
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
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
    }
</style>