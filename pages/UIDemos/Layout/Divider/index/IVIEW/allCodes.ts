/***、
 * 本ts文件用来导出要展示的各个示例的源码；
 * 与allComps.ts无直接联系；
 */
export default[
  { //用来存储iview button 组件代码
    title : '水平分割线',
    template : `
  <template>
      <div class='buttonShower'>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. </p>
        <Divider />
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. </p>
        <Divider>With Text</Divider>
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. </p>
        <Divider dashed />
        <p>Steven Paul Jobs was an American entrepreneur and business magnate. </p>
      </div>
  </template>
                                                          `,
    style : ``,
    script : ``
  }, { //用来存储iview button 组件代码
    title : '垂直分割线',
    template : `
  <template>
      <div class='buttonShower'>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
      </div>
  </template>
                                                          `,
    style : ``,
    script : ``
  }, { //用来存储iview button 组件代码
    title : '标题位置',
    template : `
  <template>
      <div class='buttonShower'>
          <Divider orientation="left">Left Text</Divider>
          <p>Steven Paul Jobs was an American entrepreneur and business magnate</p>
          <Divider orientation="right">Right Text</Divider>
          <p>Steven Paul Jobs was an American entrepreneur and business magnate</p>
      </div>
  </template>
                                                          `,
    style : ``,
    script : ``
  }
]