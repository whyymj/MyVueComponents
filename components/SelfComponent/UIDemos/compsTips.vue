<template>
    <div class='componentsTips' draggable="true" @dragend='dragTip' @dragstart="dragTip" :style='{top:Y,left:X}'>
        <Dropdown trigger="custom" placement='top-start'>
            <!-- 组件tips -->
            <Poptip trigger="hover" :title="tipsItem.tipTitle" word-wrap width='350'  placement="top" content="content">
                <p class='componentsTip' :data-tipId='tipsItem.tipId' :style='{background:bgColor}'></p>
                <div class="tipBody" slot='content' style='max-height:300px;width:100%;overflow:auto;  word-wrap: break-word; word-break: normal;' v-html='tipsItem.tipSummary'>
                   
                </div>
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
                    info: 'rgba(45,183,245,0.9)',
                    success: 'rgba(25,190,107,0.9)',
                    warn: "rgba(255,153,0,0.9)",
                    error: "rgba(237,64,20,0.9)"
                }
                if (this.tipsItem.type) {
                    color = bg[this.tipsItem.type]
                }
                return color || 'rgba(45,183,245,0.9)';
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
            this.X = (this.tipsItem && this.tipsItem.X) || '5%';
            this.Y = (this.tipsItem && this.tipsItem.Y) || '5%';
        },
        methods: {
            dragTip(e) { //拖拽tip
                let position = this.$parent.$refs.dropmenu.getBoundingClientRect(); //获取组件容器的坐标，尺寸等
                if (e.type == 'dragstart') {
                    this.startX = e.pageX;
                    this.startY = e.pageY;
                } else if (e.type == 'dragend') {
                    this.dragX = e.pageX - this.startX;
                    this.dragY = e.pageY - this.startY;
                    this.X = (parseFloat(this.X) + this.dragX / position.width * 100);
                    this.Y = (parseFloat(this.Y) + this.dragY / position.height * 100);
                    this.X = this.X < 95 ? this.X : 95;
                    this.Y = this.Y < 95 ? this.Y : 95;
                    this.X = (this.X > 5 ? this.X : 5) + '%';
                    this.Y = (this.Y > 5 ? this.Y : 5) + '%';
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
        width: 15px;
        height: 15px;
        cursor: pointer;
        z-index:100000;
        p {
            border: 1px solid #ccc;
            box-sizing: border-box;
            width: 15px;
            height: 15px;
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.7);
            border-radius: 50%;
        }
    }
</style>