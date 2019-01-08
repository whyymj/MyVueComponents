<template>
    <div class='componentShowerTools' v-if='hideAll'>
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
                }],
                addAll: false,
            }
        },
        props: ['moduleId','componentId'],
        beforeMount() {

        },
        computed: {
            hideAll() {
                return this.$store.state.UIDemos.hideSelectedComponent[this.moduleId] !== undefined && !this.$store.state.UIDemos.hideSelectedComponent[this.moduleId];
            }
        },
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