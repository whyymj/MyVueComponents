<template>
    <!-- 用于主页的菜单栏 -->
    <div class='IviewMenu' v-if='MenuTreeData'>
        <Menu active-name="/Basic/Color" :theme="theme" width="auto" :open-names="['0']" @on-select='select'>
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
        mounted() {},
        props: {
            MenuTreeData: {
                type: Array,
                default () {
                    return [];
                },
            },
            activeName: {
                type: String,
                default: '基础',
            },
            theme: {
                type: String,
                default: 'light',
            },
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