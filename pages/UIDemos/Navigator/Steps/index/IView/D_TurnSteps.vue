<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
    </Steps>
    <Button type="primary" @click="next">Next step</Button>
        </div>
        
    </div>
</template>
<script>
   
    export default{
          data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
<style scoped lang='scss'>
   .componentBox {
        width:45%;
        .buttonShower { 
            padding: 10px;
            a{
                width:95px;
                height:32px;
                background: #fff;
                display: inline-block;
                line-height: 32px;
                margin:10px;
                 text-align: center;
            }
        }
        
        box-sizing: border-box;
        padding: 10px;
           .demons{
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
             font-size: 13px;
             text-indent: 2em;
           font-weight: 100;
        }
    }
</style>