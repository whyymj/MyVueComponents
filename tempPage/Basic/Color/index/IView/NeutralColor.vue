<template>
    <div class='componentBox'>
        <componentShower>
            <div class="colorBoxContainer">
                <div class='colorBox' slot='components' v-for='(item,index) in colorArr3 ' :key='index' :style='{width:Math.floor(100/colorArr3.length)+"%",minWidth:"220px"}'>
                    <colorShower :info='item'></colorShower>
                </div>
            </div>
        </componentShower>
    </div>
</template>

<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
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