<template>
    <!-- 用来在主页展示组件的展示组件 -->
    <div class='UIComponentsShower' >
        <article>
            <slot name='demons'></slot>
            <CodeEffect :code='code'>
                <slot slot='components' name='components'></slot>
            </CodeEffect>
        </article>
    </div>
</template>
<script lang='ts'>
    import {
        Component,
        Prop,
        Vue,
        Watch,
        Emit,
        Inject,
        Model,
        Provide,
    } from 'vue-property-decorator';
    import {
        mixins,
        createDecorator,
    } from 'vue-class-component';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from 'vuex-class';
    @Component({
        components: {
            CodeEffect: () =>
                import ('./EffectShower.vue'),
        },
    })
    export default class UIComponentsShower extends Vue {
        @Prop({
            type: Array,
            default() {
                return [];
            },
        })
        public code: object[];
    }
</script>
<style scoped lang='scss'>
    .UIComponentsShower {
        width: 100%;
        position: relative;
        h1{
            text-align: left;
            padding: 10px 20px;
        }
    }
</style>