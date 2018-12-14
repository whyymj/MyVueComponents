/***、
 * 本ts文件用来导出要展示的各个示例的源码；
 * 与allComps.ts无直接联系；
 */
export default [
  { //用来存储iview button 组件代码
    title: '左右分割',
    template: `
  <template>
      <div class='buttonShower'>
          <Split v-model="split1">
              <div slot="left" class="demo-split-pane">
                  Left Pane
              </div>
              <div slot="right" class="demo-split-pane">
                  Right Pane
              </div>
          </Split>
      </div>
  </template>
                                                          `,
    style: `
    .buttonShower {
      height: 200px;
      border: 1px solid #dcdee2;
      .demo-split-pane {
          padding: 10px;
      }
    }
    `,
    script: `
    export default {
      data () {
          return {
              split1: 0.5
          }
      },
    }
    `
  }, {
    title: '上下分割',
    template: `
  <template>
      <div class='buttonShower'>
          <Split v-model="split2" mode="vertical">
              <div slot="top" class="demo-split-pane">
                  Top Pane
              </div>
              <div slot="bottom" class="demo-split-pane">
                  Bottom Pane
              </div>
          </Split>
      </div>
  </template>
                                                        `,
    style: `
    .buttonShower {
      height: 200px;
      border: 1px solid #dcdee2;
      .demo-split-pane {
          padding: 10px;
      }
    }
    `,
    script: `
    export default {
      data () {
          return {
              split2: 0.5
          }
      },
    }
                          `
  }, {
    title: '面板嵌套',
    template: `
  <template>
      <div class='buttonShower'>
          <Split v-model="split3">
              <div slot="left" class="demo-split-pane no-padding">
                  <Split v-model="split4" mode="vertical">
                      <div slot="top" class="demo-split-pane">
                          Top Pane
                      </div>
                      <div slot="bottom" class="demo-split-pane">
                          Bottom Pane
                      </div>
                  </Split>
              </div>
              <div slot="right" class="demo-split-pane">
                  Right Pane
              </div>
          </Split>
      </div>
  </template>
                                                        `,
    style: `
    .buttonShower {
      height: 200px;
      border: 1px solid #dcdee2;
      .demo-split-pane {
          padding: 10px;
      }
      .demo-split-pane.no-padding {
          height: 200px;
          padding: 0;
      }
    }
    `,
    script: `
    export default {
      data () {
          return {
              split3: 0.5,
              split4: 0.5
          }
      },
    }
                          `
  }
]