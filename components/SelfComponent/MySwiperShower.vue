<template>
    <div class='mySwiperShower'>
        <swiper :options="swiperOption" ref="mySwiper" class='myContentSwiper'>
            <!-- slides -->
            <swiper-slide>
                
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>
<script lang='ts'>
    import {
        Component,
        Prop,
        Vue,
        Watch,
        Emit,
        Inject,
        Model,
        Provide,
    } from 'vue-property-decorator';
    import {
        mixins,
        createDecorator
    } from 'vue-class-component'
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace
    } from 'vuex-class'
    @Component
    export default class mySwiperShower extends Vue {
        private swiperOption = {
            //如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            autoplay: 3000,
            speed: 150,
            mousewheel: true,
            direction: 'vertical',
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // direction : 'vertical',
            // effect: "coverflow",
            // loop : true,
            initialSlide: 0,
            grabCursor: true,
            setWrapperSize: true,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            // autoHeight: true,
            // paginationType:"bullets",
            paginationClickable: true,
            // scrollbar:'.swiper-scrollbar',
            mousewheelControl: true,
            observeParents: true
            // if you need use plugins in the swiper, you can config in here like this
            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            // debugger: true,
            // swiper callbacks
            // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
            // onTransitionStart(swiper){
            //   console.log(swiper)
            // },
            // more Swiper configs and callbacks...
            // ...\ \
        };
    }
</script>
<style scoped lang='scss'>
    .mySwiperShower {
        /deep/ .swiper-wrapper {
            // height: 100%;
            width: 100%;
        }
        /deep/ .swiper-slide {
            border: 1px solid red;
            overflow: auto;
            min-width: 500px;
        }
    }
</style>