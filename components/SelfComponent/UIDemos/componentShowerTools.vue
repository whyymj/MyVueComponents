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
                moduleId: ''
            }
        },
        props: ['componentId'],
        beforeMount() {
            this.moduleId = this.$route.path + '/' + this.componentId.split('/').reverse()[1];
        },
        computed: {
            selected() {
                this.toolItems[0].choose = this.$store.state.UIDemos.selectedComponent[this.componentId];
                return this.$store.state.UIDemos.selectedComponent;
            },
            hideAll() {
                return this.$store.state.UIDemos.hideSelectedComponent[this.moduleId] !== undefined && !this.$store.state.UIDemos.hideSelectedComponent[this.moduleId];
            }
        },
        watch: {
            selected() {},
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