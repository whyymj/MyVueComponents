<template>
    <!-- 用于主页的菜单栏 -->
    <div class='IviewMenu'>
        <Menu :active-name="activeName" :theme="theme" width="auto" :open-names="openNames" @on-select='select'>
            <IviewSubMenu v-for="(item,index) in MenuTreeData" :data="item" :key='index' :subId='index'></IviewSubMenu>
        </Menu>
    </div>
</template>
<script>
    export default {
        components: {
            IviewSubMenu: () =>
                import ('./IviewMenuSubMenu.vue'),
        },
        props: {
            MenuTreeData: {
                type: Array,
                default () {
                    return [];
                },
            },
            activeName: {
                type: String,
                default: '1',
            },
            theme: {
                type: String,
                default: 'light',
            },
            openNames: {
                type: Array,
                default () {
                    return ['1'];
                },
            }
        },
        watch:{
            MenuTreeData(){
                console.log('???????',this.MenuTreeData)
            }
        },
        methods: {
            select(item) {
                const path = this.$route.matched[0].path;
                this.$router.replace({
                    path: path + item,
                });
            }
        }
    }
</script>
<style scoped lang='scss'>

</style>