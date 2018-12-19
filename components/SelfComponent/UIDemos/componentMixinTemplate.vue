

<script>
    import componentShower from './componentShower.vue';
    export default {
        components: {
            componentShower
        },
        props: ['componentId'],//componentShower组件中会通过$parent.$props将此作为组件的id缓存进vuex store
    }
</script>

<style scoped>

</style>