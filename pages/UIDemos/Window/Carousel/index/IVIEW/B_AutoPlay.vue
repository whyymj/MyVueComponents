<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Carousel autoplay v-model="value2" loop>
                    <CarouselItem>
                        <div class="demo-carousel">1</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">2</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">3</div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="demo-carousel">4</div>
                    </CarouselItem>
                </Carousel>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                value2: 0
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
    }
</style>