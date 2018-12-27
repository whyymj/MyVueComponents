<template>
    <div>
        <FormItem label="标题">
            <Input v-model="formLeft.tipTitle"></Input>
        </FormItem>
        <FormItem label="简介">
            <Input v-model="formLeft.tipSummary"></Input>
        </FormItem>
        <FormItem label="详情">
            <Input v-model="formLeft.tipBody"></Input>
        </FormItem>
        <FormItem label="">
            <Button type="warning" @click='setCompDrawer(false)'>取消</Button>
            <Button type="error" @click='confirm'>确定</Button>
        </FormItem>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>