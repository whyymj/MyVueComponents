<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Poptip v-model="visible">
                    <a>Click</a>
                    <div slot="title"><i>Custom title</i></div>
                    <div slot="content">
                        <a @click="close">close</a>
                    </div>
                </Poptip>
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
                visible: false
            }
        },
        methods: {
            close() {
                this.visible = false;
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