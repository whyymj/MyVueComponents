<template>
    <DropdownMenu>
        <Dropdown style='width:100%;' placement="right-start" v-for='(item,index) in menuItems' :key='index' v-if='item.children&&item.children.length'>
            <DropdownItem class='rightClickMenuItem'>
                {{item.label}}
                <Icon type="ios-arrow-forward"></Icon>
            </DropdownItem>
            <DropdownMenu slot="list">
                <customRightClickMenu :menuItems='item.children' v-if='item.children&&item.children.length'></customRightClickMenu>
            </DropdownMenu>
        </Dropdown>
        <DropdownItem  class='rightClickMenuItem' v-for='(item,index) in menuItems' :key='index' v-if='!item.children||!item.children.length'>
            {{item.label}}
        </DropdownItem>
    </DropdownMenu>
</template>

<script>
    export default {
        name: 'customRightClickMenu',
        props: ['menuItems'],
    }
</script>

<style scoped lang='scss'>

</style>