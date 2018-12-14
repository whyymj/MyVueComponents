<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Horizontal Menu</span></Divider>
        <h6 class="demons">顶部导航 </h6>
        <h5 class="demonsContent">水平的顶部导航菜单。 通过设置属性 theme 为 light、dark、primary 可以选择主题。 通过事件 on-select 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。
        </h5>
        <div class='buttonShower'>
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">
                <Icon type="ios-paper" /> 内容管理
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-people" /> 用户管理
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                                        <Icon type="ios-stats" />
                                        统计分析
</template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
 
 <div style='width:100%;'>
       <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
 </div>
  
        </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme1: 'light'
            }
        },
    }
</script>
<style scoped lang='scss'>
    .componentBox {
        .buttonShower {
            background: #eee;
            padding: 10px;
        }
        box-sizing: border-box;
        padding: 10px;
        .demons {
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