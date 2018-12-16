<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基本用法</h6>
        <h5 class="demonsContent">按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。 通过设置 type 为 primary、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。
        </h5>
        <div class='buttonShower'>
           <Row>
        <Col span="12">
            <TimePicker :value="value1" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
        <Col span="12">
            <TimePicker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>
        </Col>
    </Row>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '09:41:00',
                value2: ['09:41:00', '12:00:00']
            }
        }
    }
</script>
<style scoped lang='scss'>
    .componentBox {
      width:45%;
        box-sizing: border-box;
        padding: 10px;
      
        .buttonShower {
            p {
                text-align: left;
            }
            li {
                list-style: none;
                text-align: left;
                span {
                    float: right;
                    color: #ff9900;
                }
            }
        }
    }
</style>