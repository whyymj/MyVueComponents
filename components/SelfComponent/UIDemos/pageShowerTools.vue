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
        props: ['frameId'],
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
                    label: '收起模块',
                    active: false,
                    closeLabel: '展开模块',
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
                }],
                pageModuleId: '', //生成该模块的id
            }
        },
        beforeMount() {
            this.pageModuleId = this.$route.path + '/' + this.frameId;
        },
        watch: {
            '$parent.$data.componentDrawer' () {
                this.tools[2].active = this.$parent.$data.componentDrawer;
            }
        },
        methods: {
            clickToolItem(index) {
                let obj = this.tools[index];
                obj.active = !obj.active;
                this.$set(this.tools, index, obj);
                if (index == 1) {
                    this.$store.commit('UIDemos/shrinkModule', {
                        [this.pageModuleId]: !obj.active
                    })
                } else if (index == 2) { //模拟右键点击
                    this.$parent.leftClickPage({
                        'target': {
                            dataset: {
                                menuitemid: "recordFrame"
                            }
                        }
                    });
                    this.$store.commit('UIDemos/leftClickComponentId',this.pageModuleId);
                 
                } else if (index == 3) {
                    this.$store.commit('UIDemos/hideSelectedComponent', {
                        [this.pageModuleId]: !obj.active
                    })
                }
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