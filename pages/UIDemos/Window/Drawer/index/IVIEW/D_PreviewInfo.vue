<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <div>
                <Button @click="value4 = true" type="primary">View Profile</Button>
                <Drawer :closable="false" width="640" v-model="value4">
                    <p :style="pStyle">User Profile</p>
                    <p :style="pStyle">Personal</p>
                    <div class="demo-drawer-profile">
                        <Row>
                            <Col span="12"> Full Name: Aresn
                            </Col>
                            <Col span="12"> Account: aresn@aresn.com
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12"> City: BeiJing
                            </Col>
                            <Col span="12"> Country: China
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12"> Birthday: May 14, 1991
                            </Col>
                            <Col span="12"> Website: <a href="https://dev.iviewui.com" target="_blank">https://dev.iviewui.com</a>
                            </Col>
                        </Row>
                        Message: Hello, Developer
                    </div>
                    <Divider />
                    <p :style="pStyle">Company</p>
                    <div class="demo-drawer-profile">
                        <Row>
                            <Col span="12"> Position: Programmer
                            </Col>
                            <Col span="12"> Responsibilities:Coding
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12"> Department: Map visualization
                            </Col>
                        </Row>
                        Skills:C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc.
                    </div>
                    <Divider />
                    <p :style="pStyle">Contacts</p>
                    <div class="demo-drawer-profile">
                        <Row>
                            <Col span="12"> Email: admin@aresn.com
                            </Col>
                            <Col span="12"> Phone Number: +86 18888888888
                            </Col>
                        </Row>
                        <Row>
                            <Col span="12"> GitHub: <a href="https://github.com/iview/iview" target="_blank">https://github.com/iview/iview</a>
                            </Col>
                        </Row>
                    </div>
                </Drawer>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value4: false,
                pStyle: {
                    fontSize: '16px',
                    color: 'rgba(0,0,0,0.85)',
                    lineHeight: '24px',
                    display: 'block',
                    marginBottom: '16px'
                }
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
         width: 19%;
        .buttonShower {
            .demo-drawer-profile {
                font-size: 14px;
            }
            .demo-drawer-profile .ivu-col {
                margin-bottom: 12px;
            }
        }
    }
</style>