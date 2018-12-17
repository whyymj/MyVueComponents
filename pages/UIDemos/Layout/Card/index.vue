<template>
  <div class='pageIndex'>
    <h1>Card 色彩</h1>
    <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
    <div class="componentsShower" v-for='(item,index) in frames' :key='index'>
      <div class="pageAnchor">
        <h2 class='title'><a target='_blank' href="https://www.iviewui.com/components/color" class='linkOrigin'>IView Color</a>
          <Icon type="ios-link" /><span class="closeModel button" @click='showIviewModel=!showIviewModel'>{{showIviewModel?'close model':'show model'}}</span>
        </h2>
      </div>
    </div>
    <div class="componentsBox">
      <component :is="item" v-for="(item) in compNames" :key="item" v-show="showIviewModel"></component>
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
    components: {
      ...allCompos
    },
    data() {
      return {
        showIviewModel: true,
        compNames: compoNames, //全部组件名
        frames: framesNames
      }
    },
  }
</script>
<style scoped lang='scss'>
 
  @import '@/assets/globalCss/basic.scss';
  @import '@/assets/style/UIDemos/pages/pagesGlobalStyle.scss'
</style>