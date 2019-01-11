<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Checkbox v-model="checked" :disabled="disabled">
                    <span v-if="checked">Checked</span>
                    <span v-else>Unchecked</span> -
                    <span v-if="!disabled">Usable</span>
                    <span v-else>Disabled</span>
                </Checkbox>
                <br>
                <Button type="primary" @click="checked = !checked">
            <span v-if="!checked">Checked</span>
            <span v-else>Unchecked</span>
        </Button>
                <Button type="primary" @click="disabled = !disabled">
            <span v-if="disabled">Usable</span>
            <span v-else>Disabled</span>
        </Button>
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
                checked: true,
                disabled: false
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