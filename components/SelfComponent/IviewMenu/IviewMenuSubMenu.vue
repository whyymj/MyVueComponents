<template>
    <Submenu class='IviewSubMenu' :name="data.menuName">
        <template slot="title">
                        <Icon :type="data.info.icon"></Icon>{{data.menuName}}
</template>
        <MenuItem :name="'/'+data.kind+'/'+item.kind" v-for='(item,index) in data.children' :key='index'  >
            <Icon :type="item.info.icon"></Icon>
            {{item.menuName}}
        </MenuItem>
    </Submenu>
</template>
<script>
    export default {
        props: {
            subId: {
                type: Number
            }
        },
        data: {
            type: Object,
            default: {
                name: '',
                subMenus: [],
            },
        }
    }
</script>
<style scoped lang='scss'>
    .IviewSubMenu {
        /deep/ .ivu-menu-submenu-title {
            text-align: left;
        }
        ;
        /deep/ .ivu-menu-item {
            text-align: left;
        }
        ;
    }
</style>