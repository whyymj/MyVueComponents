<template>
    <div class='componentBox'>
        <componentShower>
            <div class="colorBoxContainer">
                <div class='colorBox' slot='components' v-for='(item,index) in colorArr1 ' :key='index' :style='{width:Math.floor(100/colorArr1.length)+"%",minWidth:"220px"}'>
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
        .colorBoxContainer {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
        }
    }
</style>