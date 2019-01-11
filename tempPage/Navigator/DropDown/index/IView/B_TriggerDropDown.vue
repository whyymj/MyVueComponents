<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Dropdown>
                    <a href="javascript:void(0)">
                                hover 触发
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="click" style="margin-left: 20px">
                    <a href="javascript:void(0)">
                                click 触发
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>驴打滚</DropdownItem>
                        <DropdownItem>炸酱面</DropdownItem>
                        <DropdownItem>豆汁儿</DropdownItem>
                        <DropdownItem>冰糖葫芦</DropdownItem>
                        <DropdownItem>北京烤鸭</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="contextMenu" style="margin-left: 20px">
                    <a href="javascript:void(0)">
                                right click
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>返回</DropdownItem>
                        <DropdownItem style="color: #ed4014">删除</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
                    <a href="javascript:void(0)" @click="handleOpen">
                                custom 触发
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                    <DropdownMenu slot="list">
                        <p>常用于各种自定义下拉内容的场景。</p>
                        <div style="text-align: right;margin:10px;">
                            <Button type="primary" @click="handleClose">关闭</Button>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 47%;
    }
</style>