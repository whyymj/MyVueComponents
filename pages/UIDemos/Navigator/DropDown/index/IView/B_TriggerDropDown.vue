<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Trigger Dropdown</span></Divider>
        <h6 class="demons">触发方式 </h6>
        <h5 class="demonsContent">通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。 触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。
        </h5>
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
    </div>
</template>
<script>
    export default {
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
    .componentBox {
        width: 45%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            a {
                width: 95px;
                height: 32px;
                background: #fff;
                display: inline-block;
                line-height: 32px;
                margin: 10px 0 10px 0;
               text-align: center;
            }
        }
       
        box-sizing: border-box;
        padding: 10px;
         .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
        }
    }
</style>