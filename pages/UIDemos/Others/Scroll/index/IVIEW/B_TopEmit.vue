<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
             <Scroll :on-reach-top="handleReachTop">
        <Card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachTop () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const first = this.list2[0];
                        for (let i = 1; i < 11; i++) {
                            this.list2.unshift(first - i);
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
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