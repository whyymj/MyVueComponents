<template>
    <!-- 这是全部示例组件的展示区 -->
    <div class="componentsShower">
        <!-- slot注入分为两部分。一部分是说明部分，另一部分是效果展示部分 -->
        <div class="pageAnchor">
            <h2 class="title">
                <a target="_blank" href="https://www.iviewui.com/components/font" class="linkOrigin">{{componentsFrameName}}</a>
                <Icon type="ios-link" />
                <span class="closeModel button" @click="showIviewModel=!showIviewModel">{{showIviewModel?'close model':'show model'}}</span>
            </h2>
        </div>
        <slot name='components'></slot>
    </div>
</template>

<script>
    export default {
        props: ['componentsFrameName'],
        data() {
            return {
                showIviewModel: true, //是否展示全部组件: 
            }
        },
    }
</script>

<style scoped lang='scss'>
    h2 {
        text-align: left;
        padding: 0 20px 0 20px;
        margin: 0 0 10px 0;
        box-sizing: border-box;
        a {
            font-size: 18px;
        }
    }
    .button {
        display: inline;
        color: hotpink;
        float: right;
        margin: 5px 10px 0 0;
        font-size: 11px;
        font-weight: 100;
        cursor: pointer;
        padding: 0 5px;
        &:hover {
            color: gold;
            border: 1px solid gold;
            box-shadow: 1px 1px 0 gold;
        }
    }
</style>