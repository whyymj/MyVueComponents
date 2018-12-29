<template>
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="标题">
            <Input v-model="tipTitle"></Input>
        </FormItem>
        <FormItem label="简介">
            <richTextEditor :getCommand='getCommand' :defaultContent='tipSummary' @getValue='getValue' v-model="formLeft.tipSummary"></richTextEditor>
        </FormItem>
        <FormItem label="">
            <Button type="warning" @click='cancel'>取消</Button>
            <Button type="error" @click='confirm'>确定</Button>
        </FormItem>
    </Form>
</template>

<script>
    import {
        mapMutations,
        mapState,
        mapGetters
    } from 'vuex';
    export default {
        components: {
            richTextEditor: () =>
                import ('../../richTextEditor.vue')
        },
        props: ['recordType'],
        data() {
            return {
                formLeft: {
                    tipTitle: '标题', // title
                    tipSummary: '简介',
                },
                getCommand: '', //通知 富文本编辑器把输入值传回，》》》'getValue':获取输入值；'clearValue':清空编辑器；'setValue'：将defaultContent的值赋值给编辑器
                tipSummary: '', //富文本编辑器的默认值
                tipTitle: '',
                moduleId: ''
            }
        },
        beforeMount() {
            this.moduleId = this.$parent.$parent.moduleId;
        },
        computed: {
            ...mapState('UIDemos', {
                tipId: 'updateComponentId'
            }),
            ...mapGetters('UIDemos', {
                getData: 'getUpdateComponentData'
            }),
        },
        watch: {
            getData() {
                if (this.getData) {
                    this.tipSummary = this.getData.tipSummary;
                    this.tipTitle = this.getData.tipTitle;
                    this.getCommand = 'setValue'; //初始化富文本编辑器
                    this.$nextTick(() => {
                        this.getCommand = ''; //命令结束后清空，防止bug
                    })
                }
            },
        },
        methods: {
            getValue(data) { //获取富文本编辑器的输入值
                let that = this;
                this.getCommand = '';
                this.formLeft = {
                    tipTitle: this.tipTitle,
                    tipSummary: data
                };
                this.tipSummary = data;
                if (this.recordType == 'tips') {
                    this.updateContent(Object.assign({
                        tipId: that.tipId,
                        createTime: new Date().getFormateDate(),
                    }, that.formLeft));
                } else if (this.recordType == 'components') {
                    let time = new Date().getTime() + '' + Math.round(Math.random() * 1000000);
                    this.recordFrame(Object.assign({
                        recordId: that.moduleId + '/frameRecord' + time,
                        createTime: new Date().getFormateDate(),
                    }, that.formLeft));
                 
                }
            },
            ...mapMutations('UIDemos', {
                updateContent: 'updateComponentTips',
                recordFrame: 'recordFrame'
            }),
            cancel() {
                this.getCommand = 'clearValue'; //清空富文本编辑器
                this.$nextTick(() => {
                    this.getCommand = ''; //命令结束后清空，防止bug
                })
                this.$parent.$parent.componentDrawer = false; //关闭抽屉
            },
            confirm() {
                this.getCommand = 'getValue'; //触发getValue()
                this.$nextTick(() => {
                    this.getCommand = ''; //命令结束后清空，防止bug
                })
                this.$parent.$parent.componentDrawer = false; //关闭抽屉
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