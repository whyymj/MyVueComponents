<template>
    <div @click.right='RClickComponent' style='position:relative;height:100%;' class='componentShowerContext'>
        <!-- 下面为效果展示部分 -->
        <div placement='top-start' style='height:100%;'>
            <Checkbox v-model="selectHideCheckbox">hide</Checkbox>
            <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
            <h6 class="demons">基本用法</h6>
            <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
            </h5>
            <slot></slot>
        </div>
        <!-- 气泡提示组件 -->
        <tips v-for='(item,index) in tipsList' :key='index' :tipsItem='item'></tips>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'
    import {
        clearTimeout
    } from 'timers';
    // 引入右键菜单的运行中间件,
    // import contextMenuRunner from '@/middleware/UIDemos/contextMenuItemRunner.js'
    export default {
        components: {
            tips: () =>
                import ('./compsTips.vue')
        },
        data() {
            return {
                selectHideCheckbox: true,
                tipsList: [{
                    X: '100px',
                    Y: '100px',
                    tipTitle: 'tipTitle',
                    tipBody: 'tipBody',
                    tipId: 'UIDemos/C_ColOffset/IVIEW/C_ColOffset/tip1'
                }]
            }
        },
        methods: {
            ...mapMutations('UIDemos', {
                rightClick: 'rightClickComponentId'
            }),
            dragTip(data) { //拖拽tip时，修改数据;由子组件tips，dragOver事件触发
                this.tipsList.forEach((item, index) => {
                    if (item.tipId == data.tipId) {
                        this.tipsList[index] = item;
                    }
                });
            },
            RClickComponent(e) { //右键单击事件 
                if (e.target.className !== 'componentsTip') {
                    this.$store.commit('UIDemos/dropDownContextMenu', 'componentShower'); //右键菜单的内容
                    this.rightClick(this.$parent.$props.componentId); //记录右键单击的组件
                } else if (e.target.className == 'componentsTip') { //右键点击tip组件
                    this.$store.commit('UIDemos/dropDownContextMenu', 'componentTip'); //右键菜单的内容
                    this.rightClick(e.target.dataset.tipid); //记录右键单击的组件
                };
            }
        },
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