<template>
    <div class='componentsTips' draggable="true" @dragend='dragTip' @dragstart="dragTip" :style='{top:Y,left:X}'>
        <Dropdown trigger="custom" placement='top-start'>
            <!-- 组件tips -->
            <Poptip trigger="hover" title="Title" content="content">
                <p class='componentsTip' :data-tipId='tipsItem.tipId' :style='{background:bgColor}'></p>
                <div class="tipBody" slot='content' v-html='tipsItem.tipBody'></div>
            </Poptip>
        </Dropdown>
    </div>
</template>

<script>
    export default {
        props: ['tipsItem'],
        computed: {
            bgColor() {
                let color = '';
                let bg = {
                    info: 'rgba(45,183,245,0.8)',
                    success: 'rgba(25,190,107,0.8)',
                    warn: "rgba(255,153,0,0.8)",
                    error: "rgba(237,64,20,0.8)"
                }
                if (this.tipsItem.type) {
                    color = bg[this.tipsItem.type]
                }
                return color||'rgba(45,183,245,0.8)';
            }
        },
        watch: {
            tipsItem() {
                this.X = (this.tipsItem && this.tipsItem.X) || 0;
                this.Y = (this.tipsItem && this.tipsItem.Y) || 0;
            }
        },
        data() {
            return {
                dragX: 0,
                dragY: 0,
                startX: 0,
                startY: 0,
                X: 0,
                Y: 0
            }
        },
        mounted() {
            this.X = (this.tipsItem && this.tipsItem.X) || 0;
            this.Y = (this.tipsItem && this.tipsItem.Y) || 0;
        },
        methods: {
            dragTip(e) { //拖拽tip
                if (e.type == 'dragstart') {
                    this.startX = e.pageX;
                    this.startY = e.pageY;
                } else if (e.type == 'dragend') {
                    this.dragX = e.pageX - this.startX;
                    this.dragY = e.pageY - this.startY;
                    this.X = parseInt(this.X) + this.dragX + 'px';
                    this.Y = parseInt(this.Y) + this.dragY + 'px';
                    this.$parent.dragTip(this.tipsItem, {
                        X: this.X,
                        Y: this.Y
                    }); //父组件中的方法，用来修改坐标数据
                }
            },
        }
    }
</script>

<style scoped lang='scss'>
    .componentsTips {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 10px;
        cursor: pointer;
        left: 10px;
        p {
            width: 15px;
            height: 15px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
            border-radius: 50%;
        }
    }
</style>