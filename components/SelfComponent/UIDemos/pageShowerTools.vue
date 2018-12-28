<template>
    <ButtonGroup class='pageToolsBar'>
        <Button :type="item.active?'primary':'default'" class='pageToolItem' v-for='(item,index) in tools' :key='index' @click='clickToolItem(index)'>
            <Poptip trigger="hover" placement="top-end">
                <span style='display:inline-block;width:30px;height:22px;'>
                    <Icon :type="item.icon"></Icon>
                </span>
                <span slot='content' style='color:#2d8cf0;'>
                    {{(item.active&&item.closeLabel)?item.closeLabel:item.label}}
                </span>
            </Poptip>
        </Button>
    </ButtonGroup>
</template>

<script>
    export default {
        data() {
            return {
                tools: [{
                    icon: 'md-add',
                    value: 'addSelfComponents',
                    label: '添加自己的组件',
                    active: false,
                }, {
                    icon: 'md-eye',
                    value: 'showThisModule',
                    label: '显示模块',
                    active: false,
                    closeLabel: '隐藏模块',
                    closeValue: 'hideThisModule',
                }, {
                    icon: 'md-clipboard',
                    value: 'recordSomething',
                    label: '写点什么',
                    active: false,
                }, {
                    icon: 'ios-apps',
                    value: 'showAllComponents',
                    label: '显示全部组件',
                    active: false,
                    closeLabel: '隐藏选中组件',
                    closeValue: 'hideSelectedComponents'
                }]
            }
        },
        methods: {
            clickToolItem(index) {
                let obj = this.tools[index];
                obj.active = !obj.active;
                this.$set(this.tools, index, obj);
            }
        }
    }
</script>

<style scoped lang='scss'>
    .pageToolsBar {
        .pageToolItem {
            padding: 0;
        }
    }
</style>