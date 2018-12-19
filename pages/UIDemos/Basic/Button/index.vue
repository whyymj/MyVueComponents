<template>
  <div class="pageIndex">
    <!-- 框架组件展示 -->
    <h1>Button 按钮</h1>
    <!-- 这是全部示例组件的展示区 -->
    <componentsShower v-for='(item,index) in frames' :key='index' componentsFrameName='IView Button'>
      <div class="componentsBox" slot='components'>
        <component :is="item" v-for="(item,index) in compNames" :componentId='"UIDemos/"+item+composPaths[index].replace(".vue","")' :key="item"></component>
      </div>
    </componentsShower>
  </div>
</template>
<script>
  const allComps = require.context('./index', true, /\.vue$/); //解析全部组件路径
  const composPaths = allComps.keys().map(item => item.replace('./', '/')); //组件路径
  const compoNames = composPaths.map(item => item.split('/').pop().split('.')[0]); //组件名称
  const framesNames = Array.from(new Set(composPaths.map(item => item.split('/')[1])))
  let allCompos = {}; //组件实例
  composPaths.forEach((item, index) => {
    allCompos[compoNames[index]] = resolve => require(['./index' + item], resolve);
  })
  import mixinTemplate from '@/components/SelfComponent/UIDemos/pageMixinTemplate.vue';
  export default {
    mixins: [mixinTemplate],
    components: {
      ...allCompos
    },
    data() {
      return {
        compNames: compoNames, //全部组件名
        frames: framesNames, //组件所属框架名称
        composPaths, //组件的引用路径
      }
    },
  }
</script>
<style scoped lang='scss'>
  @import '@/assets/globalCss/basic.scss';
  @import '@/assets/style/UIDemos/pages/pagesGlobalStyle.scss';
</style>