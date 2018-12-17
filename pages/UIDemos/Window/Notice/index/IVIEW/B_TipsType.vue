<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
             <p>With desc</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>Only title</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
        </div>
    </div>
</template>
<script>
    export default {
      methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
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