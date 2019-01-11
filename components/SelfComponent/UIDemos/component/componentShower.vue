<template>
    <div @click.right="RClickComponent" v-if="!hideThisComponents" @dblclick="dblClick" ref="dropmenu" style="position:relative;height:100%;" class="componentShowerContext">
        <!-- 下面为效果展示部分 -->
        <Dropdown trigger="custom" placement="top-start" style="height:100%;">
            <div class="toolBarGroup" v-if="hideAllTools">
                <toolBar :componentId="componentId" @onChoose="clickTools" :moduleId="moduleId" v-for="(item,index) in tools" :key="index" :item="item"></toolBar>
            </div>
            <Divider>
                <span style="color:#2d8cf0;font-size:11px;font-weight:100;">IView Button - Basic Button</span>
            </Divider>
            <h6 class="demons">基本用法</h6>
            <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。</h5>
            <slot></slot>
        </Dropdown>
        <!-- 气泡提示组件 -->
        <tips v-for="(item,index) in allTips" :key="index" :tipsItem="item" @drag="dragTip"></tips>
    </div>
</template>

<script>
    import {
        mapMutations,
        mapState,
        mapGetters
    } from 'vuex'
    import {
        clearTimeout
    } from 'timers'
    import {
        getEvent
    } from '@/middleware/UIDemos/eventFactory.js'
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
                tools: [{
                    choose: false,
                    label: '隐藏',
                    id: 'hideModule'
                }],
                selectHideCheckbox: true,
                tipsList: [], //接口请求来的tips的数据
                componentId: '', //组建的id
                moduleId: '' //组建所在模块i的id
            }
        },
        beforeMount() {
            this.moduleId = this.$route.path + '/' + this.$parent.$parent.$props.frameId
            this.componentId = this.$parent.$props.componentId
        },
        computed: {
            ...mapGetters('UIDemos', {
                tipsdata: 'getAllClassifiedTips' //获取分类整理后的tips信息
            }),
            ...mapState('UIDemos', {
                selectedComponent: 'selectedComponent',
                hideSelectedComponent: 'hideSelectedComponent'
            }),
            hideAllTools() {
                //是否隐藏所在的这个模块
                return (
                    this.$store.state.UIDemos.hideSelectedComponent[this.moduleId] === false
                )
            },
            allTips() {
                //监控全部tips
                return this.tipsdata[this.componentId] ?
                    this.tipsdata[this.componentId] : []
            },
            hideThisComponents() {
                //是否隐藏该组件
                let res =
                    this.selectedComponent[this.componentId] === true &&
                    this.hideSelectedComponent[this.moduleId]
                if (this.$parent.$el) {
                    this.$parent.$el.style = res ? 'display:none' : 'display:block'
                }
                return res
            }
        },
        methods: {
            clickTools(e) {
                // e.meta[this.componentId] = {}
                // e.path.unshift({
                //     type: 'component',
                //     id: this.componentId
                // })
                this.bubbleEvent(e.add({
                    target: this.componentId,
                    meta: {
                        item: ''
                    },
                    targettype: "componentShower"
                }));
                // this.$store.commit('UIDemos/selectedComponent', {
                //     [this.componentId]: e.target.choose
                // })
            },
            ...mapMutations('UIDemos', {
                hideContextMenu: 'hideContextMenu', //隐藏右键菜单
                showContextMenu: 'showContextMenu', //显示右键菜单
                rightClick: 'rightClickComponentId', //记录右键点击的组件
                updateTip: 'updateComponentTips', //更新tip
                bubbleEvent: 'bubbleEventToModule' //向上冒泡至pageShower
            }),
            dragTip(event) {
                //拖拽tip时，修改数据;由子组件tips，dragOver事件触发
                //这里应该接口更新tip坐标
                // this.updateTip(Object.assign({}, data, newXY))
                this.bubbleEvent(event.add({
                    target: this.componentId,
                    meta: {
                        item: ''
                    },
                    targettype: 'componentShower'
                }))
            },
            RClickComponent(e) {
                let position = this.$refs.dropmenu.getBoundingClientRect()
                //右键单击组件
                //右键单击事件
                if (e.target.className !== 'componentsTip') {
                    this.bubbleEvent(getEvent({
                        target: this.componentId, //事件源id
                        meta: {
                            item: ''
                        }, //冒泡携带参数
                        targettype: "componentShower", //事件源类型
                        eventtype: "rightclick", //事件类型
                    }))
                    // this.$store.commit('UIDemos/dropDownContextMenu', 'componentShower') //右键菜单的内容
                    // this.rightClick(this.componentId) //记录右键单击的组件
                } else if (e.target.className == 'componentsTip') {
                    //右键点击tip组件
                    this.bubbleEvent(getEvent({
                        target: e.target.dataset.tipid, //事件源id
                        meta: {
                            item: {
                                //右键菜单的位置
                                X: e.pageX + 'px',
                                Y: e.pageY + 'px',
                                relX: ((e.pageX - position.left) / position.width) * 100 + '%', //相对组件容器的位置
                                relY: ((e.pageY - position.top) / position.height) * 100 + '%' //相对组件容器的位置
                            }
                        }, //冒泡携带参数
                        targettype: "compsTips", //事件源类型
                        eventtype: "rightclick", //事件类型
                    }))
                    // this.$store.commit('UIDemos/dropDownContextMenu', 'componentTip') //右键菜单的内容
                    // this.rightClick(e.target.dataset.tipid) //记录右键单击的组件
                }
                /**
                 * 下面这一部分代码控制右键菜单的位置与显示
                 */
                // this.showContextMenu({
                //     //右键菜单的位置
                //     X: e.pageX + 'px',
                //     Y: e.pageY + 'px',
                //     relX: ((e.pageX - position.left) / position.width) * 100 + '%', //相对组件容器的位置
                //     relY: ((e.pageY - position.top) / position.height) * 100 + '%' //相对组件容器的位置
                // })
            },
            dblClick(e) { //简化右键修改tip；双击tip直接修改
                if (e.target.dataset.tipid) {
                    // this.$store.commit('UIDemos/dropDownContextMenu', 'componentTip') //右键菜单的内容
                    // this.rightClick(e.target.dataset.tipid) //记录右键单击的组件
                    let item = null;
                    for (let o of this.allTips) {
                        if (e.target.dataset.tipid == o.tipId) {
                            item = o;
                        }
                    }
                    this.bubbleEvent(getEvent({ //事件冒泡,模拟从tips冒泡
                        target: e.target.dataset.tipid, //事件源id
                        meta: {
                            item
                        }, //冒泡携带参数
                        targettype: "compsTips", //事件源类型
                        eventtype: "dblclick", //事件类型
                    }).add({ //通过本组件继续冒泡
                        target: this.componentId,
                        meta: {
                            item: ''
                        },
                        targettype: 'componentShower'
                    }))
                }
            }
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
        .toolBarGroup {
            display: flex;
            flex-wrap: nowrap;
        }
    }
</style>