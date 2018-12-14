<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Align Dropdown</span></Divider>
        <h6 class="demons">嵌套用法 </h6>
        <h5 class="demonsContent">下拉菜单可以进行嵌套实现级联的效果，嵌套时注意设置子集的展开方向。
        </h5>
        <div class='buttonShower'>
            <Dropdown>
                <a href="javascript:void(0)">
                北京小吃
                <Icon type="ios-arrow-down"></Icon>
            </a>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem>豆汁儿</DropdownItem>
                    <Dropdown placement="right-start">
                        <DropdownItem>
                            北京烤鸭
                            <Icon type="ios-arrow-forward"></Icon>
                        </DropdownItem>
                        <DropdownMenu slot="list">
                            <DropdownItem>挂炉烤鸭</DropdownItem>
                            <DropdownItem>焖炉烤鸭</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script lang='ts'>
    import {
        Component,
        Prop,
        Vue,
        Watch,
        Emit,
        Inject,
        Model,
        Provide,
    } from 'vue-property-decorator';
    import {
        mixins,
        createDecorator,
    } from 'vue-class-component';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from 'vuex-class';
    @Component({
        name: 'BasicButton',
    })
    export default class BasicButton extends Vue {
      
    }
</script>
<style scoped lang='scss'>
    .componentBox {
        width: 50%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            a {
                width: 95px;
                height: 32px;
                background: #fff;
                display: inline-block;
                line-height: 32px;
                margin: 10px;
            }
        }
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
    }
</style>