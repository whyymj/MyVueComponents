<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Closable Tabs</span></Divider>
        <h6 class="demons">可关闭 </h6>
        <h5 class="demonsContent">通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。 需结合 @on-tab-remove 事件手动关闭标签页。</h5>
        <div class='buttonShower'>
            <Tabs value="name1" type="card" closable @on-tab-remove="handleTabRemove">
                <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
                <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
                <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
            }
        },
        methods: {
            handleTabRemove(name) {
                this['tab' + name] = false;
            }
        }
    }
</script>
<style scoped lang='scss'>
      @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
      .componentBox {
           width: 32%;
          margin: 10px 2%;
      }
</style>