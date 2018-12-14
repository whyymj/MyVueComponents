<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Show Size Page</span></Divider>
        <h6 class="demons">每页数量 </h6>
        <h5 class="demonsContent">可以切换每页显示的数量。
        </h5>
        <div class='buttonShower'>
           <Page :total="100" show-sizer />
        </div>
        
    </div>
</template>
<script lang='ts'>
    import {
        Component,
        Prop,
        Vue,
        Watch,
        Emit,
        Inject,
        Model,
        Provide,
    } from 'vue-property-decorator';
    import {
        mixins,
        createDecorator,
    } from 'vue-class-component';
    import {
        State,
        Getter,
        Action,
        Mutation,
        namespace,
    } from 'vuex-class';
    @Component({
        name: 'BasicButton',
    })
    export default class BasicButton extends Vue {}
</script>
<style scoped lang='scss'>
    .componentBox {
        width:50%;
        .buttonShower{
              background: #eee;
              padding:10px;
        }
      
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 10px;
        justify-content: flex-start;
    }
</style>