<template>
    <!-- 组件效果区 -->
    <div class='EffectShower'>
        <div class="effect" @click='click'>效果展示</div>
        <div class="trans">
            <slot name='components'></slot>
        </div>
        <!-- 代码伸缩 -->
        <div class='collapse'>
            <Collapse v-model="value1" v-if='code&&code.length'>
                <Panel name="1">
                    点此查看代码
                    <div slot="content">
                        <!-- <myCollapseAutoHeight :show='show' myName='show' :minHeight='100'>
                                                                                                                            <iframe width="100%" slot='right' height="300" src="//jsfiddle.net/whyymj/ud435nbt/28/embedded/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
                                                                                                                            <p slot='left'>1111</p>
                                                                                                                        </myCollapseAutoHeight> -->
                        <CodeShower :code='code'></CodeShower>
                    </div>
                </Panel>
            </Collapse>
        </div>
    </div>
</template>



<script>
    export default {
        components: {
            // myCollapseAutoHeight: () =>
            //     import ('../Layout/Collapse/MyCollapseAutoHeight.vue'),
            CodeShower: () =>
                import ('./VueCodeShower.vue'),
        },
        props: {
            code: {
                type: Array,
                default: [],
            }
        },
        data() {
            return {
                show: true,
                value1: 0
            }
        },
        methods: {
            click() {
                this.show = !this.show;
            }
        }
    }
</script>
<style scoped lang='scss'>
    .mycollapse {
        max-height: 20px;
        transition: all 1s;
        border: 1px solid green;
        overflow: hidden;
        &.show {
            max-height: 500px;
        }
    }
    .EffectShower {
        position: relative;
        border: 1px solid #eee;
        width: 95%;
        margin: auto;
        transition: all 0.5s;
        &:hover {
            transform: translate(0, -1px);
            box-shadow: 2px 2px 3px #aaa;
        }
        .trans {
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 10px;
            justify-content: flex-start;
        }
        .collapse {
            width: 98%;
            margin: 50px auto 20px;
            padding-bottom: 50px;
            /deep/ .ivu-collapse {
                border-color: #800;
                background: rgba(255, 153, 0, 0.7);
                &>.ivu-collapse-item>.ivu-collapse-header {
                    color: #800;
                }
            }
            &:hover {
                /deep/ .ivu-collapse {
                    border-color: #ed4014;
                    &>.ivu-collapse-item>.ivu-collapse-header {
                        color: #ed4014;
                    }
                }
            }
        }
        .effect {
            font-size: 20px;
            line-height: 50px;
            border-bottom: 1px solid #eee;
            width: 96%;
            margin: 0 auto 20px;
            font-weight: 600;
            color: #17233d;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        }
    }
</style>