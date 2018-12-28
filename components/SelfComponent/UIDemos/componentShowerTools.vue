<template>
    <div class='componentShowerTools'>
        <Checkbox v-for='(item,index) in toolItems' :key='index' v-model="item.choose">{{item.label}}</Checkbox>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toolItems: [{
                    choose: false,
                    value: 'selectHideCheckbox',
                    label: "隐藏",
                }]
            }
        },
        props: ['componentId'],
        watch: {
            toolItems: {
                deep: true,
                handler() {
                    this.$store.commit('UIDemos/selectedComponent', {
                        [this.componentId]: this.toolItems[0].choose
                    });
                }
            },
        }
    }
</script>

<style scoped lang='scss'>
    .componentShowerTools {
        display: flex;
    }
</style>