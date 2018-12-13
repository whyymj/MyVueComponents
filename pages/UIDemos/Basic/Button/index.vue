<template>
  <div class="BasicIndex">
    <!-- 框架组件展示 -->
    <h1>Button 按钮</h1>
    <!-- 这是全部示例组件的展示区 -->
    <div class="componentsShower" v-for='(item,index) in frames' :key='index'>
      <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
      <div slot="demons">
        <div class="pageAnchor">
          <h2 class="title">
            <a target="_blank" href="https://www.iviewui.com/components/font" class="linkOrigin">{{item}} Button</a>
            <Icon type="ios-link" />
            <span class="closeModel button" @click="showIviewModel=!showIviewModel">{{showIviewModel?'close model':'show model'}}</span>
          </h2>
        </div>
      </div>
      <div class="componentsBox">
        <component :is="item" v-for="(item) in compNames" :key="item"  v-show="showIviewModel"></component>
      </div>
    </div>
  </div>
</template>
<script>
  const allComps = require.context('./index', true, /\.vue$/); //解析全部组件路径
  const composPaths = allComps.keys().map(item => item.replace('./', '/')); //组件路径
  const compoNames = composPaths.map(item => item.split('/').pop().split('.')[0]); //组件名称
  const framesNames = Array.from(new Set(composPaths.map(item => item.split('/')[1])))
  let allCompos = {}; //组件实例
  composPaths.forEach((item, index) => {
    allCompos[compoNames[index]] = require('./index' + item).default;
  })
  export default {
    components: allCompos,
    data() {
      return {
        showIviewModel: true, //是否展示全部组件
        compNames: compoNames, //全部组件名
        frames: framesNames
      }
    },
    mounted() {}
  }
</script>
<style scoped lang='scss'>
  .BasicIndex {
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
    .button {
      display: inline;
      color: hotpink;
      float: right;
      margin: 5px 10px 0 0;
      font-size: 11px;
      font-weight: 100;
      cursor: pointer;
      padding: 0 5px;
      &:hover {
        color: gold;
        border: 1px solid gold;
        box-shadow: 1px 1px 0 gold;
      }
    }
    .componentsBox {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      >>>.componentBox {
        box-shadow: 1px 1px 5px 0 #ccc;
        margin: 10px 0;
      }
      >>>.componentBox:hover {
        box-shadow: 1px 1px 10px 1px #ccc;
        margin: 10px 0;
      }
    }
  }
</style>