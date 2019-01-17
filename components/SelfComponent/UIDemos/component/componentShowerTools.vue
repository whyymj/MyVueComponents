<template>
    <div class='componentShowerTools'>
        <Checkbox v-model="choose" v-if='item'>{{item.label}}</Checkbox>
    </div>
</template>

<script>
    import {
        getEvent
    } from '@/middleware/UIDemos/eventFactory.js'
    export default {
        props: ['moduleId', 'componentId', 'item'],
        beforeMount() {
            if (this.item) {
                this.choose = this.item.choose;
            }
        },
        data() {
            return {
                choose: false
            }
        },
        watch: {
            item() {
                if (this.item) {
                    this.choose = this.item.choose;
                }
            },
            choose() {
                this.$emit('onChoose', getEvent({
                    target: this.item.id,
                    meta: {
                        item: Object.assign({},this.item, {
                            choose: this.choose
                        })
                    },
                    eventtype: 'checkbox',
                    targettype: "componentShowerTools",
                }))
            },
        }
    }
</script>

<style scoped lang='scss'>
    .componentShowerTools {
        display: flex;
    }
</style>