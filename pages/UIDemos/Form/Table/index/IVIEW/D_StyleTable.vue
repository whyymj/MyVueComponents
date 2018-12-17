<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <p>Custom row styles:</p>
            <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
            <p>Custom column styles:</p>
            <Table :columns="columns9" :data="data1"></Table>
            <p>Custom arbitrary cell styles:</p>
            <Table :columns="columns1" :data="data8"></Table>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                columns1: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns9: [{
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data8: [{
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ]
            }
        },
        methods: {
            rowClassName(row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width:32%; 
        .buttonShower {
            .ivu-table .demo-table-info-row td {
                background-color: #2db7f5;
                color: #fff;
            }
            .ivu-table .demo-table-error-row td {
                background-color: #ff6600;
                color: #fff;
            }
            .ivu-table td.demo-table-info-column {
                background-color: #2db7f5;
                color: #fff;
            }
            .ivu-table .demo-table-info-cell-name {
                background-color: #2db7f5;
                color: #fff;
            }
            .ivu-table .demo-table-info-cell-age {
                background-color: #ff6600;
                color: #fff;
            }
            .ivu-table .demo-table-info-cell-address {
                background-color: #187;
                color: #fff;
            }
        }
    }
</style>