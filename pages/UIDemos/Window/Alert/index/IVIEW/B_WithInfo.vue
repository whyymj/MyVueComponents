<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Alert>
                    An info prompt
                    <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
</template>
    </Alert>
    <Alert type="success">
        A success prompt
<template slot="desc">
    Content of prompt. Content of prompt. Content of prompt. Content of prompt.
</template>
    </Alert>
    <Alert type="warning">
        A warning prompt
<template slot="desc">
     Content of prompt. Content of prompt. Content of prompt.
</template>
    </Alert>
    <Alert type="error">
        An error prompt
        <span slot="desc">
            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>
        </span>
    </Alert>
        </div>
        </componentShower>
    
    </div>
</template>
<script>
    import componentShower from '@/components/SelfComponent/UIDemos/componentMixinTemplate.vue'
    export default {
        mixins: [componentShower],
    }
</script>
<style scoped lang='scss'>
    @import '@/assets/style/UIDemos/components/componentsGlobalStyle.scss';
    .componentBox {
        width: 32%;
    }
</style>