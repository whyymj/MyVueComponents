<template>
  <div class='pageIndex'>
    <h1>Icon 图标</h1>
    <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
    <div>
      <div class="pageAnchor">
        <h2 class='title'><a target='_blank' href="https://www.iviewui.com/components/icon" class='linkOrigin'>IView Icon</a>
          <Icon type="ios-link" />
        </h2>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang='scss'>
  .iconIndex {
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
    .demons {
      background: #ccc;
      padding: 30px 20px;
      margin: 0 auto 20px;
    }
  }
</style>