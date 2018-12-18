<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <componentShower>
            <div class='buttonShower'>
                <Badge dot>
                    <a href="#" class="demo-badge"></a>
                </Badge>
                <Badge dot>
                    <Icon type="ios-notifications-outline" size="26"></Icon>
                </Badge>
                <Badge dot>
                    <a href="#">可以是一个链接</a>
                </Badge>
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
        width: 25%;
        .buttonShower {
            background: #eee;
            padding: 10px;
            display: flex;
            justify-content: space-around;
            .demo-badge {
                width: 42px;
                height: 42px;
                background: #fff;
                border-radius: 6px;
                display: inline-block;
            }
            .ivu-badge {}
        }
    }
</style>