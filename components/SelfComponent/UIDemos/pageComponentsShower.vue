<template>
    <!-- 这是全部示例组件的展示区 ,Dropdown阻止原生contextmenu-->
    <div class="componentsShower" @click.right='rightClickPage' ref='dropmenu' @click.left='leftClickPage'>
        <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
        <div class="pageAnchor">
            <h2 class="title">
                <a target="_blank" href="https://www.iviewui.com/components/font" class="linkOrigin">{{componentsFrameName}}</a>
                <Icon type="ios-link" />
                <span class="closeModel button" @click="showIviewModel=!showIviewModel">{{showIviewModel?'close model':'show model'}}</span>
            </h2>
        </div>
        <slot name='components'></slot>
        <!-- 组件右单击菜单》记录组件   -->
        <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="componentDrawer">
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
        <!-- 右键菜单组件 -->
        <transition name="slide-fade">
            <div class='rightClickContextMenu' v-if='visibleContextMenu||toggleDrawer' :style="{top:menuPositionY ,left:menuPositionX}">
                <rightMenu></rightMenu>
            </div>
        </transition>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    export default {
        props: ['componentsFrameName'],
        components: {
            rightMenu: () =>
                import ('./compsRightClickMenu.vue'),
        },
        data() {
            return {
                showIviewModel: true, //是否展示全部组件: 
                componentDrawer: false, //middleware/contextmenuitemRunner中通过$parent.$parent.componentDrawer修改
                menuPositionX: 0,
                menuPositionY: 0
            }
        },
        watch: {
            componentDrawer() {
                console.log('hehh', this.componentDrawer)
                this.$store.mutations.UIDemos.setCompDrawer(this.componentDrawer)
            }
        },
        computed: {
            visibleContextMenu() {
                return this.$store.state.UIDemos.visibleDropMenu;
            },
            toggleDrawer() {
                this.componentDrawer = this.$store.state.UIDemos.componentDrawer;
            }
        },
        methods: {
            ...mapMutations('UIDemos', {
                hideContextMenu: "hideContextMenu",
                showContextMenu: "showContextMenu",
                rightClick: 'rightClickComponentId'
            }),
            leftClickPage(e) {
                this.hideContextMenu(); //隐藏右键菜单
            },
            rightClickPage(e) {
                
                this.$store.commit('UIDemos/dropDownContextMenu', 'componentsBox'); //右键菜单的内容
                this.rightClick(this.$route.path); //记录右键单击的组件
                /**
                 * 下面这一部分代码控制右键菜单的位置与显示
                 */
                {
                    let getBoundingClientRect = this.$refs.dropmenu.getBoundingClientRect();
                    this.menuPositionX = (e.pageX - getBoundingClientRect.left) + 'px';
                    this.menuPositionY = (e.pageY - getBoundingClientRect.top) + 'px';
                    this.showContextMenu(); //显示菜单
                }
            },
            drawerController() { //操作Drawer组件的方法
            }
        }
    }
</script>

<style lang='scss'>
    .componentsShower {
        position: relative;
        h2 {
            text-align: left;
            padding: 0 20px 0 20px;
            margin: 0 0 10px 0;
            box-sizing: border-box;
            a {
                font-size: 18px;
            }
        }
        .button {
            display: inline;
            color: hotpink;
            float: right;
            margin: 5px 10px 0 0;
            font-size: 11px;
            font-weight: 100;
            cursor: pointer;
            padding: 0 5px;
            &:hover {
                color: gold;
                border: 1px solid gold;
                box-shadow: 1px 1px 0 gold;
            }
        }
        .rightClickContextMenu {
            position: absolute;
            width: 100px;
            background: #fff; // border: 1px solid #ccc;
            z-index: 100000;
            border-radius: 10px;
        }
        /* 可以设置不同的进入和离开动画 */
        /* 设置持续时间和动画函数 */
        .slide-fade-enter-active {
            transition: all .3s ease;
        }
        .slide-fade-leave-active {
            transition: all .3s ease;
        }
        .slide-fade-enter,
        .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */
        {
            opacity: 0;
        }
    }
</style>