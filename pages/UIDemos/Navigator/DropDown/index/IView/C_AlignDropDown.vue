<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Align Dropdown</span></Divider>
        <h6 class="demons">对齐方向 </h6>
        <h5 class="demonsContent">通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。
        </h5>
        <div class='buttonShower'>
            <Dropdown placement="bottom-start">
                <a href="javascript:void(0)">
                菜单(左)
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
            <Dropdown style="margin-left: 20px">
                <a href="javascript:void(0)">
                菜单(居中)
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
            <Dropdown style="margin-left: 20px" placement="bottom-end">
                <a href="javascript:void(0)">
                菜单(右)
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
        </div>
    </div>
</template>
<script>
   
    export default {
        
    }
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
       
    }
</style>