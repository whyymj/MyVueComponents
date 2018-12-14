/***、
 * 本ts文件用来导出要展示的各个示例的源码；
 * 与allComps.ts无直接联系；
 */
export default [
  { //用来存储iview button 组件代码
    title: '按钮类型',
    template: `
  <template>
    <div>
      // 只需要先安装IView，然后全局引入，复制这些代码就可以了
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="info">Info</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="error">Error</Button>
    </div>
  </template>
                                                          `,
    style: ``,
    script: ``
  }, {
    title: '加载中状态',
    template: `
  <template>
    <div>
      //加载中状态是通过loading属性的值的true/false来切换的
      <Button type="primary" loading>Loading...</Button>
      <Button type="primary" :loading="loading" @click="toLoading">
          <span v-if="!loading">Click me!</span>
          <span v-else>Loading...</span>
      </Button>
      <Button type="primary" :loading="loading2" icon="ios-power" @click="toLoading2">
          <span v-if="!loading2">Click me!</span>
          <span v-else>Loading...</span>
      </Button>
      <Button loading shape="circle"></Button>
      <Button loading shape="circle" type="primary"></Button>
    </div>
  </template>
                                                        `,
    style: ``,
    script: `
  export default {
      data () {
          return {
              loading: false,
              loading2: false
          }
      },
      methods: {
          toLoading () {
              this.loading = true;
          },
          toLoading2 () {
              this.loading2 = true;
          }
      }
  }
                          `
  }, {
    title: '按钮组合',
    template: `
  <template>
    <div class='iviewButtonGroup'>
      <h4>Icons</h4>
      <ButtonGroup>
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button icon="ios-color-wand-outline"></Button>
        <Button icon="ios-sunny-outline"></Button>
        <Button icon="ios-crop"></Button>
        <Button icon="ios-color-filter-outline"></Button>
      </ButtonGroup>
      <h4>Circle</h4>
      <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="ios-arrow-back"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="ios-arrow-forward"></Icon>
        </Button>
      </ButtonGroup>
      <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skip-backward"></Button>
        <Button type="primary" icon="ios-skip-forward"></Button>
      </ButtonGroup>
      <h4>Vertical</h4>
      <ButtonGroup vertical>
        <Button icon="logo-facebook"></Button>
        <Button icon="logo-twitter"></Button>
        <Button icon="logo-googleplus"></Button>
        <Button icon="logo-tumblr"></Button>
      </ButtonGroup>
    </div>
  </template>
                                                        `,
    style: ``,
    script: ``
  }, {
    title: '幽灵按钮',
    template: `
  <template>
    <div>
      // 只是在普通按钮基础上加上ghost属性，使得颜色反色
      <Button ghost>Default</Button>
      <Button type="primary" ghost>Primary</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="text" ghost>Text</Button>
      <Button type="info" ghost>Info</Button>
      <Button type="success" ghost>Success</Button>
      <Button type="warning" ghost>Warning</Button>
      <Button type="error" ghost>Error</Button>
    </div>
  </template>
                                                        `,
    style: ``,
    script: ``
  }, {
    title: '长按钮',
    template: `
  <template>
    <div>
      // 只是在普通按钮基础上加上long属性，style 属性可以改更多细节
      <Button type="success" long>SUBMIT</Button>
      <Button type="error" long>DELETE</Button>
    </div>
  </template>
                                    
                                                        `,
    style: ``,
    script: ``
  }, {
    title: '不可用状态',
    template: `
  <template>
    <div>
      // 只是在普通按钮基础上加上disabled属性
      <Button>Default</Button>
      <Button disabled>Default(Disabled)</Button>
    </div>
  </template>
                               
                                                        `,
    style: ``,
    script: ``
  }
]