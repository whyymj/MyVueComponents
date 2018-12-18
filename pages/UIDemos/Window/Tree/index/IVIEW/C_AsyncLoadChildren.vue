<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
            </div>
        </componentShower>
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
        data() {
            return {
                data3: [{
                    title: 'parent',
                    loading: false,
                    children: []
                }]
            }
        },
        methods: {
            loadData(item, callback) {
                setTimeout(() => {
                    const data = [{
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 24%;
    }
</style>