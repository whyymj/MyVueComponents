<template>
  <div class='pageIndex'>
    <h1>Font 字体</h1>
    <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
    <div slot='demons'>
      <div class="pageAnchor">
        <h2 class='title'><a target='_blank' href="https://www.iviewui.com/components/font" class='linkOrigin'>IView Font</a>
          <Icon type="ios-link" />
        </h2>
      </div>
    </div>
    <h6 class="addition">Iview推荐默认字体</h6>
    <h6 class="demons"> font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;</h6>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang='scss'>
  
  @import '@/assets/globalCss/basic.scss';
  @import '@/assets/style/UIDemos/pages/pagesGlobalStyle.scss';
  .demons{
    width:95%;
    height:60px;
    margin:auto;
    background: #eee;
    line-height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>