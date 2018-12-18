<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                    <Checkbox :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
                </div>
                <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox label="香蕉"></Checkbox>
                    <Checkbox label="苹果"></Checkbox>
                    <Checkbox label="西瓜"></Checkbox>
                </CheckboxGroup>
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
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll() {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;
                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange(data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
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