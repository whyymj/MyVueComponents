<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <DatePicker :open="open" :value="value3" confirm type="date" @on-change="handleChange" @on-clear="handleClear" @on-ok="handleOk">
                    <a href="javascript:void(0)" @click="handleClick">
                        <Icon type="ios-calendar-outline"></Icon>
                        <template v-if="value3 === ''">Select date</template>
<template v-else>
    {{ value3 }}
</template>
        </a>
    </DatePicker>
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
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick() {
                this.open = !this.open;
            },
            handleChange(date) {
                this.value3 = date;
            },
            handleClear() {
                this.open = false;
            },
            handleOk() {
                this.open = false;
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 45%;
    }
</style>