<template>
    <div @click.right="RClickComponent" v-if='!hideThisComponents' @dblclick='dblClick' ref="dropmenu" style="position:relative;height:100%;" class="componentShowerContext">
        <!-- 下面为效果展示部分 -->
        <Dropdown trigger="custom" placement="top-start" style="height:100%;">
            <toolBar :componentId='componentId'></toolBar>
            <Divider>
                <span style="color:#2d8cf0;font-size:11px;font-weight:100;">IView Button - Basic Button</span>
            </Divider>
            <h6 class="demons">基本用法</h6>
            <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。</h5>
            <slot></slot>
        </Dropdown>
        <!-- 气泡提示组件 -->
        <tips v-for="(item,index) in allTips" :key="index" :tipsItem="item"></tips>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapState
    } from 'vuex'
    import {
        clearTimeout
    } from 'timers'
    // 引入右键菜单的运行中间件,
    export default {
        components: {
            tips: () =>
                import ('./compsTips.vue'),
            toolBar: () =>
                import ('./componentShowerTools.vue')
        },
        data() {
            return {
                selectHideCheckbox: true,
                tipsList: [], //接口请求来的tips的数据
                componentId: ''
            }
        },
        beforeMount() {
            this.componentId = this.$parent.$props.componentId;
        },
        computed: {
            ...mapState('UIDemos', {
                tipsdata: 'componentTips',
                selectedComponent: 'selectedComponent',
                hideSelectedComponent: "hideSelectedComponent"
            }),
            allTips() { //监控全部tips
                return this.tipsdata[this.componentId] ? this.tipsdata[this.componentId] : [];
            },
            hideThisComponents() { //是否隐藏该组件
                let res = (this.selectedComponent[this.componentId] === true) && this.hideSelectedComponent; 
                if (this.$parent.$el) {
                    this.$parent.$el.style = res ? 'display:none' : "display:block";
                }
                return res;
            }
        },
        methods: {
            ...mapMutations('UIDemos', {
                hideContextMenu: 'hideContextMenu', //显示右键菜单
                rightClick: 'rightClickComponentId', //记录右键点击的组件
                showContextMenu: 'showContextMenu', //隐藏右键菜单
                updateTip: 'updateComponentTips', //更新tip
            }),
            dragTip(data, newXY) {
                //拖拽tip时，修改数据;由子组件tips，dragOver事件触发
                //这里应该接口更新tip坐标
                this.updateTip(Object.assign({}, data, newXY))
            },
            RClickComponent(e) {
                //右键单击事件
                if (e.target.className !== 'componentsTip') {
                    this.$store.commit('UIDemos/dropDownContextMenu', 'componentShower') //右键菜单的内容
                    this.rightClick(this.componentId) //记录右键单击的组件
                } else if (e.target.className == 'componentsTip') {
                    //右键点击tip组件
                    this.$store.commit('UIDemos/dropDownContextMenu', 'componentTip') //右键菜单的内容
                    this.rightClick(e.target.dataset.tipid) //记录右键单击的组件
                }
                /**
                 * 下面这一部分代码控制右键菜单的位置与显示
                 */
                let position = this.$refs.dropmenu.getBoundingClientRect();
                this.showContextMenu({
                    X: e.pageX + 'px',
                    Y: e.pageY + 'px',
                    relX: (e.pageX - position.left) / position.width * 100 + '%', //相对组件容器的位置
                    relY: (e.pageY - position.top) / position.height * 100 + '%', //相对组件容器的位置
                }) //右键菜单的位置
            },
            dblClick(e) { //简化右键修改tip
                if (e.target.dataset.tipid) {
                    this.$store.commit('UIDemos/dropDownContextMenu', 'componentTip') //右键菜单的内容
                    this.rightClick(e.target.dataset.tipid) //记录右键单击的组件
                }
            },
        }
    }
</script>

<style lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentShowerContext {
        &>.ivu-dropdown {
            &>.ivu-dropdown-rel {
                height: 100%;
            }
        }
    }
</style>