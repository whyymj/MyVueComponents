<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Custom Tabs</span></Divider>
        <h6 class="demons">自定义标签页 </h6>
        <h5 class="demonsContent">设置 label 为 Render 函数后，可以自定义标签页的内容。</h5>
        <div class='buttonShower'>
            <Tabs value="name1">
                <TabPane :label="label" name="name1">标签一的内容</TabPane>
                <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                <TabPane label="标签三" name="name3">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            label(h) {
                return h('div', [
                    h('span', '标签一'),
                    h('Badge', {
                        props: {
                            count: 3
                        }
                    })
                ])
            }
        }
    }
</script>
<style scoped lang='scss'>
    .componentBox {
         width: 45%;
        margin: 10px 2%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            /deep/ .ivu-tabs {
                background: #fff;
            }
        }
       
        box-sizing: border-box;
        padding: 10px;
          .demons{
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