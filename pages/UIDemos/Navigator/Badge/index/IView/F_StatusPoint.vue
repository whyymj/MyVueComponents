<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <br />
                <Badge status="success" text="Success" />
                <br />
                <Badge status="error" text="Error" />
                <br />
                <Badge status="default" text="Default" />
                <br />
                <Badge status="processing" text="Processing" />
                <br />
                <Badge status="warning" text="Warning" />
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
        width: 30%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            .demo-badge {
                width: 42px;
                height: 42px;
                background: #fff;
                border-radius: 6px;
                display: inline-block;
            }
        }
    }
</style>