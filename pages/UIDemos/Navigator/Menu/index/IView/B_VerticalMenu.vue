<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Vertical Button</span></Divider>
        <h6 class="demons">侧栏导航 </h6>
        <h5 class="demonsContent">垂直导航菜单，可以内嵌子菜单。 (1)设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。  (2)设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。  (3)通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。
        </h5>
        <div class='buttonShower'>
            <Row>
                <Col span="8">
                <h6>垂直菜单</h6>
                <Menu :theme="theme2">
                    <Submenu name="1">
                        <template slot="title">
                                        <Icon type="ios-paper" />
                                        内容管理
</template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
<template slot="title">
    <Icon type="ios-people" />
    用户管理
</template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
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
            </Menu>
        </Col>
        <Col span="8">
          <h6>默认展开</h6>
            <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
                <Submenu name="1">
<template slot="title">
    <Icon type="ios-paper" />
    内容管理
</template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
<template slot="title">
    <Icon type="ios-people" />
    用户管理
</template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
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
            </Menu>
        </Col>
        <Col span="8">
          <h6>手风琴模式</h6>
            <Menu :theme="theme2" :open-names="['1']" accordion>
                <Submenu name="1">
<template slot="title">
    <Icon type="ios-paper" />
    内容管理
</template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
<template slot="title">
    <Icon type="ios-people" />
    用户管理
</template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
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
            </Menu>
        </Col>
    </Row>
 <div style='min-width:200px;'>
         <p>Change theme</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
 </div>

 
  
        </div>
        
    </div>
</template>
<script>
    export default {
        data() {
            return {
                theme2: 'light'
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
        h6 {
            height: 30px;
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