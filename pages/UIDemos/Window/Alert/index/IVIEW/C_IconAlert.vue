<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Alert show-icon>An info prompt</Alert>
                <Alert type="success" show-icon>A success prompt</Alert>
                <Alert type="warning" show-icon>A warning prompt</Alert>
                <Alert type="error" show-icon>An error prompt</Alert>
                <Alert show-icon>
                    An info prompt
                    <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt.
</template>
    </Alert>
    <Alert type="success" show-icon>
        A success prompt
        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>
    </Alert>
    <Alert type="warning" show-icon>
        A warning prompt
<template slot="desc">
     Content of prompt. Content of prompt. Content of prompt.
</template>
    </Alert>
    <Alert type="error" show-icon>
        An error prompt
        <span slot="desc">
            Custom error description copywriting.
        </span>
    </Alert>
    <Alert show-icon>
        Custom icon
        <Icon type="ios-bulb-outline" slot="icon"></Icon>
<template slot="desc">
    Custom icon copywriting. Custom icon copywriting. Custom icon copywriting.
</template>
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