<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Row>
        <Col span="12">
            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
        </div>
    </div>
</template>
<script>
    export default {
         data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>
<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
      width:45%; 
    }
</style>