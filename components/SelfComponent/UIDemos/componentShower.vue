<template>
    <div @click.left='LClickComponent' @click.right='RClickComponent' @mouseleave="MouseLeaveBox" style='position:relative;'>
        <!-- 下面为效果展示部分 -->
        <Dropdown trigger="custom" placement='top-start' ref='dropmenu'>
            <Checkbox v-model="selectHideCheckbox">hide</Checkbox>
            <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
            <h6 class="demons">基本用法</h6>
            <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
            </h5>
            <slot></slot>
        </Dropdown>
        <!-- 右键菜单组件 -->
        <transition name="slide-fade">
            <div class='rightClickContextMenu' :style="{top:menuPositionY ,left:menuPositionX}" v-if='visibleDropMenu'>
                <rightMenu></rightMenu>
            </div>
        </transition>
        <tips v-for='(item,index) in tipsList' :key='index' :tipsItem='item'></tips>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    export default {
        components: {
            rightMenu: () =>
                import ('./compsRightClickMenu.vue'),
            tips: () =>
                import ('./compsTips.vue')
        },
        computed: {
            visibleDropMenu() { //控制下拉菜单的显示隐藏
                return this.$store.state.UIDemos.visibleDropMenu;
            }
        },
        data() {
            return {
                selectHideCheckbox: true,
                menuPositionX: 0,
                menuPositionY: 0,
                tipsList: [{
                    X: '100px',
                    Y: '100px',
                    tipTitle: 'tipTitle',
                    tipBody: 'tipBody'
                }]
            }
        },
        methods: {
            ...mapMutations('UIDemos', {
                addComponents: 'addSelectedComponents',
                hideContextMenu: "hideContextMenu",
                showContextMenu: "showContextMenu"
            }),
            LClickComponent() { //点击后将选中的组件存入vuex
                this.hideContextMenu();
                let that = this;
                this.addComponents({
                    componentId: this.$parent.$props.componentId
                })
            },
            MouseLeaveBox() { //鼠标移除后关闭
                this.hideContextMenu();
            },
            RClickComponent(e) {
                this.$store.commit('UIDemos/dropDownContextMenu', 'componentsBoxDropDownMenu');
                let getBoundingClientRect = this.$refs.dropmenu.$el.getBoundingClientRect();
                this.showContextMenu();
                this.menuPositionX = (e.pageX - getBoundingClientRect.left) + 'px';
                this.menuPositionY = (e.pageY - getBoundingClientRect.top) + 'px';
            }
        },
    }
</script>

<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
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
</style>