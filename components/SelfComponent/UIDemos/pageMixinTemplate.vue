

<script>
    import componentsShower from '@/components/SelfComponent/UIDemos/pageComponentsShower.vue';
    export default {
        components: {
            componentsShower
        },
        mounted() {
            setTimeout(() => {
                this.$store.commit('UIDemos/setComponentTips',
                    // 各个组件内部的tips,key为页面的id
                    [{
                        // 组件内的tips数据结构
                        X: '100px', // 坐标
                        Y: '100px', // 坐标
                        tipTitle: 'tipTitle', // title
                        tipBody: 'tipBody', // body
                        tipId: '/UIDemos/AssistantColor/IView/AssistantColor/tip1', // tip的id，等于页面id/tip的index
                        index: 'tip1', // 组件内部的标识
                        pageId: '/UIDemos/AssistantColor/IView/AssistantColor'
                    }]
                )
            }, 1000)
        }
    }
</script>

<style scoped>

</style>