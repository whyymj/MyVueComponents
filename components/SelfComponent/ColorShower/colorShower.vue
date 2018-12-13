<template>
    <div class='colorShower' :class='info.color.colorRgb()|judgeColor' :style='{background:info.color}'>
        <span class="info">{{info.info}}</span>
        <span class="val">{{info.color}}</span>
        <span class="val">{{info.color.colorRgb().toLowerCase()}}</span>
    </div>
</template>
<script>
 
    export default {
        filters: {
            judgeColor(color) { //自动根据背景颜色调整文字的颜色
                let [r, g, b] = color.split(/[\(\)]/)[1].split(/[,，]/);
                var val = (r * 1 + g * 1 + b * 1);
                return val > 510 ? "whiteFont" : (val < 255 ? "blackFont" : "grayFont");
            }
        },
        props:['info']
    }
</script>
<style scoped lang='scss'>
    .colorShower {
        border-radius: 5px;
        margin: 10px;
        height: 77px;
        line-height: 20px;
        box-sizing: border-box;
        padding: 4px 0 0 0;
        .info {
            font-size: 16px;
            font-weight: 100;
            line-height: 28px;
        }
        span {
            font-weight: 700;
            display: block;
            text-align: left;
            padding: 0 15px;
        }
        &.blackFont {
            color: #fff;
            .val {
                color: #ddd;
            }
        }
        &.grayFont {
            color: #fff;
            .val {
                color: #eee;
            }
        }
        &.whiteFont {
            color: #000;
            .val {
                color: #333;
            }
        }
    }
</style>