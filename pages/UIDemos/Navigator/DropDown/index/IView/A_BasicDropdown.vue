<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic DropDown</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">需要配合 DropdownMenu 和 DropdownItem 两个组件来使用，并且给列表设置具名 slot 为 list。 触发对象可以是链接、按钮等各种元素。 本例还展示了禁用项和分隔线。
        </h5>
        <div class='buttonShower'>
            <Dropdown>
                <a href="javascript:void(0)">
                下拉菜单
                <Icon type="ios-arrow-down"></Icon>
            </a>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Dropdown style="margin-left: 20px">
                <Button type="primary">
                下拉菜单
                <Icon type="ios-arrow-down"></Icon>
            </Button>
                <DropdownMenu slot="list">
                    <DropdownItem>驴打滚</DropdownItem>
                    <DropdownItem>炸酱面</DropdownItem>
                    <DropdownItem disabled>豆汁儿</DropdownItem>
                    <DropdownItem>冰糖葫芦</DropdownItem>
                    <DropdownItem divided>北京烤鸭</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>
</template>
<script>
  
    export default  {}
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width:45%;
       
    }
</style>