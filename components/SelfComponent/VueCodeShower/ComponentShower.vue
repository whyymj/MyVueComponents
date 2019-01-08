<template>
    <!-- 用来在主页展示组件的展示组件 -->
    <div class='UIComponentsShower'>
        <article>
            <slot name='demons'></slot>
            <CodeEffect :code='code'>
                <slot slot='components' name='components'></slot>
            </CodeEffect>
        </article>
    </div>
</template>
<script>
    export default {
        components: {
            CodeEffect: () =>
                import ('./EffectShower.vue'),
        },
        props: {
            code: {
                type: Array,
                default () {
                    return [];
                },
            }
        }
    }
</script>
<style scoped lang='scss'>
    .UIComponentsShower {
        width: 100%;
        position: relative;
        h1 {
            text-align: left;
            padding: 10px 20px;
        }
    }
</style>