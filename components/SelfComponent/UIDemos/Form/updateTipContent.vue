<template>
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="标题">
            <Input v-model="formLeft.tipTitle"></Input>
        </FormItem>
        <FormItem label="简介">
            <Input v-model="formLeft.tipSummary"></Input>
        </FormItem>
        <FormItem label="详情">
            <Input v-model="formLeft.tipBody"></Input>
        </FormItem>
        <FormItem label="">
            <Button type="warning">取消</Button>
            <Button type="error" @click='confirm'>确定</Button>
        </FormItem>
    </Form>
</template>

<script>
    import {
        mapMutations,
        mapState
    } from 'vuex'
    export default {
        data() {
            return {
                formLeft: {
                    tipTitle: '标题', // title
                    tipSummary: '双击查看',
                    tipBody: 'tipBody', // body
                },
            }
        },
        computed: {
            ...mapState('UIDemos', {
                tipId: 'updateComponentId'
            })
        },
        methods: {
            ...mapMutations('UIDemos', {
                updateContent: 'updateComponentTips'
            }),
            confirm() {
                let that = this;
                this.updateContent(Object.assign({
                    tipId: that.tipId
                }, that.formLeft));
            }
        }
    }
</script>

<style scoped lang='scss'>
    .forUpdateTip {
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>