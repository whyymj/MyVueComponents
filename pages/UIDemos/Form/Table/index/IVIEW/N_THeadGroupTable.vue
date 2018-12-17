<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <Table :columns="columns11" :data="data10" border height="500"></Table>
        </div>
    </div>
</template>
<script>
    export default {
       data () {
            return {
                columns11: [
                    {
                        title: 'Name',
                        key: 'name',
                        align: 'center',
                        width: 200,
                        fixed: 'left',
                        filters: [
                            {
                                label: 'Joe',
                                value: 1
                            },
                            {
                                label: 'John',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.name === 'Joe';
                            } else if (value === 2) {
                                return row.name === 'John Brown';
                            }
                        }
                    },
                    {
                        title: 'Other',
                        align: 'center',
                        children: [
                            {
                                title: 'Age',
                                key: 'age',
                                align: 'center',
                                width: 200,
                                sortable: true
                            },
                            {
                                title: 'Address',
                                align: 'center',
                                children: [
                                    {
                                        title: 'Street',
                                        key: 'street',
                                        align: 'center',
                                        width: 200
                                    },
                                    {
                                        title: 'Block',
                                        align: 'center',
                                        children: [
                                            {
                                                title: 'Building',
                                                key: 'building',
                                                align: 'center',
                                                width: 200,
                                                sortable: true
                                            },
                                            {
                                                title: 'Door No.',
                                                key: 'door',
                                                align: 'center',
                                                width: 200
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Company',
                        align: 'center',
                        children: [
                            {
                                title: 'Company Address',
                                key: 'caddress',
                                align: 'center',
                                width: 200
                            },
                            {
                                title: 'Company Name',
                                key: 'cname',
                                align: 'center',
                                width: 200
                            }
                        ]
                    },
                    {
                        title: 'Gender',
                        key: 'gender',
                        align: 'center',
                        width: 200,
                        fixed: 'right'
                    }
                ],
                data10: []
            }
        },
        mounted () {
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    key: i,
                    name: 'John Brown',
                    age: i + 1,
                    street: 'Lake Park',
                    building: 'C',
                    door: 2035,
                    caddress: 'Lake Street 42',
                    cname: 'SoftLake Co',
                    gender: 'M',
                });
            }
            this.data10 = data;
        }
    }
</script>
<style scoped lang='scss'>
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
       width:98%; 
    }
</style>