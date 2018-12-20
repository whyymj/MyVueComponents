<template>
    <div class='componentBox'>
        <componentShower>
            <div class="colorBoxContainer">
                <div class='colorBox' v-for='(item,index) in colorArr2 ' :key='index' :style='{width:Math.floor(100/colorArr2.length)+"%",minWidth:"220px"}'>
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