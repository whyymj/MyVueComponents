<template>
    <!-- 菜单的点击事件是在page/UIDemos页面clickRightClickMenuItem事件统一监听的 -->
    <Card :padding='0'>
        <p slot="title">组件记录</p>
        <rightClickMenu :menuItems='menuList'></rightClickMenu>
    </Card>
</template>

<script>
    export default {
        components: {
            rightClickMenu: () =>
                import ('./customRightClickMenu.vue')
        },
          computed:{
            menuList(){
                return this.$store.state.UIDemos.rightClickMenu;
            }
        },
        methods: {
            handleChange() {},
            RunCommand(e) {
                console.log('????????????????', e.target.dataset.index)
            }
        }
    }
</script>

<style scoped lang='scss'>
    li {
        padding: 5px 16px;
    }
    li:hover {
        background: rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
</style>