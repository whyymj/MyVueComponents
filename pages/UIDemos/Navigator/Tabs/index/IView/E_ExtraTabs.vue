<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Extra Tabs</span></Divider>
        <h6 class="demons">附加内容 </h6>
        <h5 class="demonsContent">设置 slot extra 可以在页签右边添加附件。</h5>
        <div class='buttonShower'>
            <Tabs value="name1">
                <TabPane :label="label" name="name1">标签一的内容</TabPane>
                <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                <TabPane label="标签三" name="name3">标签三的内容</TabPane>
                <Button size="small" slot="extra">增加</Button>
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
  @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
         width: 47%;
        margin: 10px 2%; 
    }
</style>