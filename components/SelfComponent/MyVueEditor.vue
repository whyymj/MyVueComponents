<template>
  <div class='myVueEditor'>
    <myEditor @coding='coding' type='html'></myEditor>
    <myEditor @coding='coding' type='js'></myEditor>
    <myEditor @coding='coding' type='css'></myEditor>
    <button @click="add">Run</button>
    <div class="comBox">
      <span style="position:absolute;width:100%;top:0;color:red;font-size:20px;line-height:40px;text-align:center;" v-show='tips!==""'>{{tips}}</span>
      <div class="com" v-for="(item,index) in coms" :key='index'>
        <div :id='item.id' :ref='item.id'> </div>
      </div>
    </div>
  </div>
</template>
<script> 
  export default {
    components: {
      myEditor: () =>
        import ('./MyEditor.vue')
    },
    data() {
      return {
        html: '',
        js: '',
        css: '',
        coms: [],
        tips: '',
        id: 'getComponentId'
      }
    },
    methods: {
      coding(code, type, id) { //将三个输入框内的代码存起来
        this[type] = code;
      },
      getComponentId() { // 更新id
        let id = 'getComponentId';
        window[id] = window[id] ? window[id] : 'getComponentId_0';
        let tmp= window[id].split('_');
        window[id] = tmp[0] + '_' + (Number(tmp[1]) + 1);
        return window[id];
      },
      createStyle() {
        const that = this;
        let nod = document.createElement('style');
        let str = '.' + that.id + ' ' + this.css.replace(/}[\s]*;/g, '}').replace(/(?<=(}[\s]*))[a-z]/g, function(o, n) {
          return '.' + that.id + ' ' + o;
        });
        nod.type = 'text/css';
        nod.classList.add('nod');
        if (nod.styleSheet) { // ie下  
          nod.styleSheet.cssText = str;
        } else {
          nod.innerHTML = str; //或者写成 nod.appendChild(document.createTextNode(str))  
        }
        document.getElementsByTagName('head')[0].appendChild(nod);
      },
      add() {
        let that = this;
        let obj = {
          template: ''
        };
        const template = 'template';
        try {
          if (/^{[\s\S]*}$/.test(that.js.trim())) { //必须是对象    
            obj = eval('(()=>{ return ' + that.js + '})()'); //转为对象
            if (typeof obj == 'object') {
              this.id = this.getComponentId(); //创建元素id
              this.coms.push({
                id: that.id,
                html: that.html,
                js: that.js,
                css: that.css
              });
              obj[template] = '<div class=' + that.id + '>' + that.html + '</div>';
              const Profile = Vue.extend(obj);
              // 创建 Profile 实例，并挂载到一个元素上。
              this.$nextTick(() => {
                new Profile().$mount('#' + that.id);
                this.createStyle()
              });
            }
          } else {
            this.tips = '请输入正确的vue对象'
            setTimeout(() => {
              this.tips = ''
            }, 2000)
          }
        } catch (e) {
          console.error(e)
        }
      }
    }
  }
</script>
<style scoped lang='scss'>
  .myVueEditor {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    button {
      width: 200px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      font-weight: 600;
      border-radius: 5px;
      margin: 10px;
      box-shadow: 2px 2px 0 0 #ccc;
      border: 1px solid #999;
    }
    .comBox {
      width: 100%;
      min-height: 300px;
      border: 1px solid red;
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .com {
        width: 200px;
        margin: 10px;
        height: 200px;
        border: 1px solid grey;
      }
    }
  }
</style>