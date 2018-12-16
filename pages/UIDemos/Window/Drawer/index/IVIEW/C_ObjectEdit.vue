<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <div>
        <Button @click="value3 = true" type="primary">Create</Button>
        <Drawer
            title="Create"
            v-model="value3"
            width="720"
            :mask-closable="false"
            :styles="styles"
        >
            <Form :model="formData">
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Name" label-position="top">
                            <Input v-model="formData.name" placeholder="please enter user name" />
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Url" label-position="top">
                            <Input v-model="formData.url" placeholder="please enter url">
                                <span slot="prepend">http://</span>
                                <span slot="append">.com</span>
                            </Input>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Owner" label-position="top">
                            <Select v-model="formData.owner" placeholder="please select an owner">
                                <Option value="jobs">Steven Paul Jobs</Option>
                                <Option value="ive">Sir Jonathan Paul Ive</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="Type" label-position="top">
                            <Select v-model="formData.type" placeholder="please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                            </Select>
                        </FormItem>
                    </Col>
                </Row>
                <Row :gutter="32">
                    <Col span="12">
                        <FormItem label="Approver" label-position="top">
                            <Select v-model="formData.approver" placeholder="please choose the approver">
                                <Option value="jobs">Steven Paul Jobs</Option>
                                <Option value="ive">Sir Jonathan Paul Ive</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col span="12">
                        <FormItem label="DateTime" label-position="top">
                            <DatePicker v-model="formData.date" type="daterange" placeholder="please select the date" style="display: block" placement="bottom-end"></DatePicker>
                        </FormItem>
                    </Col>
                </Row>
                <FormItem label="Description" label-position="top">
                    <Input type="textarea" v-model="formData.desc" :rows="4" placeholder="please enter the description" />
                </FormItem>
            </Form>
            <div class="demo-drawer-footer">
                <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
                <Button type="primary" @click="value3 = false">Submit</Button>
            </div>
        </Drawer>    
    </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value3: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
            }
        }
    }
</script>
<style scoped lang='scss'>
    .componentBox {
      width:45%;
        box-sizing: border-box;
        padding: 10px;
      
        .buttonShower {
            p {
                text-align: left;
            }
            li {
                list-style: none;
                text-align: left;
                span {
                    float: right;
                    color: #ff9900;
                }
            } .demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }
        }
    }
</style>