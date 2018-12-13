<template>
    <div class='componentBox'>
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>Iview Color</span></Divider>
        <!-- 下面为效果展示部分 -->
        <h6 class="demons">辅助色</h6>
        <h5 class="demonsContent"> 常用于信息提示，比如成功、警告和失败。</h5>
        <div class="colorBoxContainer">
            <div class='colorBox' v-for='(item) in colorArr2 ' :key='item' :style='{width:Math.floor(100/colorArr2.length)+"%",minWidth:"220px"}'>
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
                colorArr2: [{
                        color: "#2db7f5",
                        info: "Info"
                    },
                    {
                        color: "#19be6b",
                        info: "Success"
                    },
                    {
                        color: "#ff9900",
                        info: "Warning"
                    },
                    {
                        color: "#ed4014",
                        info: "Error"
                    }
                ],
            }
        },
    }
</script>

<style lang='scss' scoped>
    .componentBox {
        width: 96%;
        box-sizing: border-box;
        padding: 10px;
        .demons {
            font-size: 18px;
            font-weight: 100;
            margin: 10px 0;
        }
        .demonsContent {
            font-size: 14px;
            font-weight: 100;
            line-height: 20px;
            margin: 10px 0;
            text-indent: 2em;
        }
        .colorBoxContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>