<template>
    <div class='componentBox'>
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>Neutral Color</span></Divider>
        <!-- 下面为效果展示部分 -->
        <h6 class="demons" slot='components'>中性色</h6>
        <h5 class="demonsContent" slot='components'>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</h5>
        <div class="colorBoxContainer">
            <div class='colorBox' slot='components' v-for='(item,index) in colorArr3 ' :key='index' :style='{width:Math.floor(100/colorArr3.length)+"%",minWidth:"220px"}'>
                <colorShower :info='item'></colorShower>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            colorShower: () =>
                import ("@/components/SelfComponent/ColorShower/colorShower.vue")
        },
        data() {
            return {
                colorArr3: [{
                        color: "#17233d",
                        info: "标题 Title"
                    },
                    {
                        color: "#515a6e",
                        info: "正文 Content"
                    },
                    {
                        color: "#808695",
                        info: "辅助/图标 Sub Color"
                    },
                    {
                        color: "#c5c8ce",
                        info: "失效 Disabled"
                    },
                    {
                        color: "#dcdee2",
                        info: "边框 Border"
                    },
                    {
                        color: "#e8eaec",
                        info: "分割线 Divider"
                    },
                    {
                        color: "#f8f8f9",
                        info: "背景 Background"
                    }
                ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 96%;
        .colorBoxContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>