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
    created() {
      //十六进制颜色值域RGB格式颜色值之间的相互转换
      //-------------------------------------
      //十六进制颜色值的正则表达式
      /*RGB颜色转换为16进制*/
      String.prototype.colorHex = function() {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var that = this;
        if (/^(rgb|RGB)/.test(that)) {
          var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
          var strHex = "#";
          for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
              hex += hex;
            }
            strHex += hex;
          }
          if (strHex.length !== 7) {
            strHex = that;
          }
          return strHex;
        } else if (reg.test(that)) {
          var aNum = that.replace(/#/, "").split("");
          if (aNum.length === 6) {
            return that;
          } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
              numHex += aNum[i] + aNum[i];
            }
            return numHex;
          }
        } else {
          return that;
        }
      };
      //-------------------------------------------------
      /*16进制颜色转为RGB格式*/
      String.prototype.colorRgb = function() {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var sColor = this.toLowerCase();
        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
          }
          //处理六位的颜色值
          var sColorChange = [];
          for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
          }
          return "RGB(" + sColorChange.join(",") + ")";
        } else {
          return sColor;
        }
      };
    }
  }
</script>
<style scoped lang='scss'>

  @import '@/assets/globalCss/basic.scss';
  @import '@/assets/style/UIDemos/pages/pagesGlobalStyle.scss';
</style>