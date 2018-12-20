<template>
    <div class='componentsTips' :style='{top:tipsItem.Y,left:tipsItem.X}'>
        <!-- 组件tips -->
        <Poptip trigger="hover" title="Title" content="content">
            <p :style='{background:tipsItem.bgcolor||"rgba(45,183,245,0.8)"}'></p>
            <div class="tipBody" slot='content' v-html='tipsItem.tipBody'></div>
        </Poptip>
    </div>
</template>

<script>
    export default {
        props: ['tipsItem']
    }
</script>

<style scoped lang='scss'>
    .componentsTips {
        position: absolute;
        width: 10px;
        height: 10px;
        top: 10px;
        left: 10px;
        p {
            width:15px;
            height:15px;  
            box-shadow: 0 0  5px 0 rgba(0,0,0,0.7);
            border-radius: 50%;
        }
    }
</style>