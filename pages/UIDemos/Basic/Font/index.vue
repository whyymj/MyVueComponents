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
  .fontIndex {
    h1 {
      text-align: center;
      color: #3F51B5;
      margin: 20px 0 20px 0;
    }
    h2 {
      text-align: left;
      padding: 0 20px 0 20px;
      margin: 0 0 10px 0;
      box-sizing: border-box;
      a {
        font-size: 18px;
      }
    }
    .addition {
      font-size: 16px;
      font-weight: 100;
      padding: 5px 30px;
      box-sizing: border-box;
    }
    .demons {
      font-size: 14px;
      font-weight: 100;
      padding: 0 20px;
      box-sizing: border-box;
      background: #eee;
      width:95%;
      margin:auto;
      line-height: 60px;
      border-radius:5px;
    }
  }
</style>