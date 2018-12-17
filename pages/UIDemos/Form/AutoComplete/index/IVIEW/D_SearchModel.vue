<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
            <AutoComplete v-model="value4" icon="ios-search" placeholder="input here" style="width:300px">
                <div class="demo-auto-complete-item" v-for="item in data4" :key='item'>
                    <div class="demo-auto-complete-group">
                        <span>{{ item.title }}</span>
                        <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
                    </div>
                    <Option v-for="option in item.children" :value="option.title" :key="option.title">
                        <span class="demo-auto-complete-title">{{ option.title }}</span>
                        <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
                    </Option>
                </div>
                <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
            </AutoComplete>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value4: '',
                data4: [{
                        title: '话题',
                        children: [{
                                title: 'iView',
                                count: 10000,
                            },
                            {
                                title: 'iView UI',
                                count: 10600,
                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [{
                                title: 'iView UI 有多好',
                                count: 60100,
                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,
                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [{
                            title: 'iView 是一个设计语言',
                            count: 100000,
                        }]
                    }
                ]
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%; 
        .buttonShower {
            .demo-auto-complete-item {
                padding: 4px 0;
                border-bottom: 1px solid #F6F6F6;
            }
            .demo-auto-complete-group {
                font-size: 12px;
                padding: 4px 6px;
            }
            .demo-auto-complete-group span {
                color: #666;
                font-weight: bold;
            }
            .demo-auto-complete-group a {
                float: right;
            }
            .demo-auto-complete-count {
                float: right;
                color: #999;
            }
            .demo-auto-complete-more {
                display: block;
                margin: 0 auto;
                padding: 4px;
                text-align: center;
                font-size: 12px;
            }
        }
    }
</style>