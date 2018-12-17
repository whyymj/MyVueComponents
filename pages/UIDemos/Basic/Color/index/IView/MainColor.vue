<template>
    <div class='componentBox'>
        <Divider slot='components'><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>Dominant Color</span></Divider>
        <!-- 下面为效果展示部分 -->
        <h6 class="demons" slot='components'>主色</h6>
        <h5 class="demonsContent" slot='components'> Light Primary 常用于 hover，Dark Primary 常用于 active。</h5>
        <div class="colorBoxContainer">
            <div class='colorBox' slot='components' v-for='(item,index) in colorArr1 ' :key='index' :style='{width:Math.floor(100/colorArr1.length)+"%",minWidth:"220px"}'>
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
                colorArr1: [{
                        color: "#2d8cf0",
                        info: "Primary"
                    },
                    {
                        color: "#5cadff",
                        info: "Light Primary"
                    },
                    {
                        color: "#2b85e4",
                        info: "Dark Primary"
                    }
                ],
            }
        },
    }
</script>

<style scoped lang='scss'>

    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 96%; 
        .colorBoxContainer{
              display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>