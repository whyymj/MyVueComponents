<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <div class="demo-avatar">
                    <Avatar icon="ios-person" />
                    <Avatar>U</Avatar>
                    <Avatar>USER</Avatar>
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
                    <Avatar style="background-color: #87d068" icon="ios-person" />
                </div>
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
        width: 24%;
    }
</style>