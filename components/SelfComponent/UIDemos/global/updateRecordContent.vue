<template>
    <Form :model="formLeft" label-position="left" :label-width="100">
        <FormItem label="标题">
            <Input v-model="Title"></Input>
        </FormItem>
        <FormItem label="简介">
            <richTextEditor :getCommand='getCommand' :defaultContent='Summary' @getValue='getValue' v-model="formLeft.Summary"></richTextEditor>
        </FormItem>
        <FormItem label="">
            <Button type="warning" @click='cancel'>取消</Button>
            <Button type="error" @click='confirm'>确定</Button>
        </FormItem>
    </Form>
</template>

<script> 
    export default {
        components: {
            richTextEditor: () =>
                import ('../../Global/RichTextEditor.vue')
        },
        props: ['defaultContent'],
        data() {
            return {
                formLeft: {
                    Title: '标题', // title
                    Summary: '简介',
                },
                getCommand: '', //通知 富文本编辑器把输入值传回，》》》'getValue':获取输入值；'clearValue':清空编辑器；'setValue'：将defaultContent的值赋值给编辑器
                Summary: '', //富文本编辑器的默认值
                Title: '',
            }
        },
        beforeMount() {
            

        },
        watch: {
            defaultContent() {
                if (this.defaultContent) {
                    this.Summary = this.defaultContent.Summary;
                    this.Title = this.defaultContent.Title;
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
                    Title: this.Title,
                    Summary: data
                };
                this.Summary = data;
                this.$emit('getVal', Object.assign({
                        createTime: new Date().getFormateDate(),
                    }, that.formLeft));
            },
            cancel() {
                this.getCommand = 'clearValue'; //清空富文本编辑器
                this.$emit('cancel')
                this.$nextTick(() => {
                    this.getCommand = ''; //命令结束后清空，防止bug
                })
            },
            confirm() {
                this.getCommand = 'getValue'; //触发getValue()
                this.$nextTick(() => {
                    this.getCommand = ''; //命令结束后清空，防止bug
                })
            }
        }
    }
</script>

<style scoped lang='scss'> 
</style>