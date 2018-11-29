<template>
    <!-- 专门为vue SPA代码做展示使用 -->
    <div class="VueComponentShower">
        <Tabs value="name0">
            <TabPane v-for="(item,index) in code" :label="item.title" :key='index' :name="'name'+index">
                <div class="panel templatePanel">
                    <h6>template:</h6>
                    <pre><code v-text='item.template' class='HTML'></code></pre>
                </div>
                <div class="panel scriptPanel">
                    <h6>script:</h6>
                    <pre><code v-text='item.script' class='JavaScript'></code></pre>
                </div>
                <div class="panel stylePanel">
                    <h6>style:</h6>
                    <pre><code v-text='item.style' class='CSS'></code></pre>
                </div>
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
  
  
    export default {
        props:['code'],
        
         mounted() { // 格式化代码
            Array.prototype.map.call(document.getElementsByTagName('code'), (ele) => {
                const hljs = 'hljs';
                window[hljs].highlightBlock(ele);
            });
        }
    }
</script>
<style scoped lang='scss'>
    .VueComponentShower {
        width: 100%;
        /deep/ .hljs {
            text-align: left;
        }
        code {
            max-height: 300px;
        }
        h6 {
            font-size: 16px;
            font-family: 'microsoft yahei';
            font-weight: 600;
            line-height: 30px;
            text-align: left;
            color: #800;
            margin: 10px 0;
        }
    }
</style>