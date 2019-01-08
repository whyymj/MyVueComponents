<template>
    <div>
        <Tabs type="card" closable @on-tab-remove="handleTabRemove">
            <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
            <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
            <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        props: ['moduleId'],
        data() {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove(name) {
                this['tab' + name] = false;
            }
        },
        mounted() {
            console.log('this.>>>>', this.moduleId)
        }
    }
</script>

<style scoped>

</style>