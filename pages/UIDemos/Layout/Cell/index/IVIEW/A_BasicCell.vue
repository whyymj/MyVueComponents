<template>
    <div class='componentBox'>
        <!-- 下面为效果展示部分 -->
        <Divider><span style='color:#2d8cf0;font-size:11px;font-weight:100;'>IView Button - Basic Button</span></Divider>
        <h6 class="demons">基础用法 </h6>
        <h5 class="demonsContent">包含各类用法的综合示例。
        </h5>
        <div class='buttonShower'>
            <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 300px;">
                <CellGroup>
                    <Cell title="Only show titles" />
                    <Cell title="Display label content" label="label content" />
                    <Cell title="Display right content" extra="details" />
                    <Cell title="Link" extra="details" to="/components/button" />
                    <Cell title="Open link in new window" to="/components/button" target="_blank" />
                    <Cell title="Disabled" disabled />
                    <Cell title="Selected" selected />
                    <Cell title="With Badge" to="/components/badge">
                        <Badge :count="10" slot="extra" />
                    </Cell>
                    <Cell title="With Switch">
                        <Switch v-model="switchValue" slot="extra" />
                    </Cell>
                </CellGroup>
            </Card>
        </div>
    </div>
</template>
<script>
    export default {}
</script>
<style scoped lang='scss'>
    .componentBox {
        .buttonShower {
            background: #eee;
            padding: 10px;
        }
        box-sizing: border-box;
        padding: 10px;
        width:45%;
        .demons {
            font-size: 14px;
            font-weight: 100;
        }
        .demonsContent {
            font-size: 13px;
            text-indent: 2em;
            font-weight: 100;
        }
    }
</style>