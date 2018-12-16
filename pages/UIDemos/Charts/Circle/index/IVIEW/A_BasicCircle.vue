<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
           <Circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </Circle>
    <Circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark" size="60" style="color:#5cb85c"></Icon>
    </Circle>
    <Circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close" size="50" style="color:#ff5500"></Icon>
        </span>
    </Circle>
        </div>
    </div>
</template>
<script>
    export default {
       
    }
</script>
<style scoped lang='scss'>
    .componentBox {
      width:45%;
        box-sizing: border-box;
        padding: 10px;
      
        .buttonShower {
            p {
                text-align: left;
            }
            li {
                list-style: none;
                text-align: left;
                span {
                    float: right;
                    color: #ff9900;
                }
            }
        }
    }
</style>