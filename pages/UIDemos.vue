<template>
    <div class="layout">
        <div class="anchor"></div>
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <Icon type="logo-vimeo" />
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>Item 1
                        </MenuItem>
                        <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>Item 2
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>Item 3
                        </MenuItem>
                        <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{left: '280px',right:0,position:'fixed',top:'64px',bottom:0}">
                <Sider hide-trigger :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto',width:'280px',maxWidth:'350px'}">
                    <LeftMenu :MenuTreeData="MenuTreeData"></LeftMenu>
                </Sider>
                <Layout :style="{padding: '0 240px 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '0',background: '#fff',position:'fixed',top:'130px',bottom:'24px',left:'294px',right:'224px',overflow:'auto',boxSizing:'border-box'}" @scroll.native="scrollPosition">
                        <nuxt-child/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        <!-- 各种页面通用操作功能 -->
        <PageOperaters :bubbleEventToPage='bubbleEventToPage'></PageOperaters>
    </div>
</template>

<script>
    import timeFormater from '@/middleware/getFormateDate.js'
    import {
        mapState,
        mapMutations
    } from 'vuex'
 
    export default {
        components: {
            LeftMenu: () =>
                import ('../components/SelfComponent/IviewMenu/IviewMenu.vue'),
            PageOperaters: () =>
                import ('../components/SelfComponent/UIDemos/global/pageOperateSystem')
        },
        data() {
            return {
                offset: 10,
                MenuTreeData: []
            }
        },
        computed: {
            ...mapState('UIDemos', {
                bubbleEventToPage: 'bubbleEventToPage'
            })
        },
        beforeMount() {
            if ('serviceWorker' in navigator) {//PWA
                navigator.serviceWorker.register('/static/pwa/pwa.js', {
                        scope: '/'
                    })
                    .then(function(registration) {
                        // 注册成功
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(function(err) {
                        // 注册失败:(
                        console.log('ServiceWorker registration failed: ', err);
                    });
            }
            Date.prototype.getFormateDate = function() {
                return timeFormater.call(this)
            }
            this.$axios
                .get('http://localhost:8080/UIindex/UIDemosMenu/menu')
                .then(res => {
                    this.MenuTreeData = res.data
                })
            this.$axios
                .get(
                    'http://localhost:8080/UIindex/UIDemosRecords/UIDemos/getComponentTips'
                )
                .then(res => {
                    console.log('get compos>>', res.data)
                })
        },
        methods: {
            scrollPosition(e) {
                //滚动
                //    var top= e.target.scrollTop
                //     Array.prototype.forEach.call(document.getElementsByClassName('UIComponentsShower'), function(e) {
                //         console.log(e.offsetTop,'>>>>>>>>',top)
                //     })
            }
        }
    }
</script>

<style lang='scss'>
    .myContentSwiper {
        height: 100%;
        width: 100%;
    }
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .anchor {
        position: fixed;
        width: 180px;
        top: 130px;
        right: 24px;
        z-index: 10;
    }
    .anchorp {
        height: 500px;
    }
    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        padding: 0;
        top: 15px;
        left: 20px;
        i {
            font-size: 30px;
            color: #fff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
    }
    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>

