 /**
  * 自定义事件对象
  * @param {} param0 
  */
 export function getEvent(eventdata =  {
  target:'',//事件源id
  meta:{},//冒泡携带参数
  targettype:"",//事件源类型
  eventtype:"",//事件类型
} ) {
   if (!(this instanceof getEvent)) {
     return new getEvent(eventdata)
   }
   let {
     target,
     meta,
     targettype,
     eventtype
   } = eventdata;

   this.cache = {
     target,
     meta:{
       [target]:meta
     },
     path: [{
       id: target,
       type: targettype
     }],
     targettype,
     eventtype
   };
   this.add = (myevent) => {
     let {
       target,
       meta,
       targettype,
       eventtype
     } = myevent;
     if (!this.cache.target) { //如果第一次实例化时没有传值
       this.cache = {
         target,
         meta,
         path: [{
           id: target,
           type: targettype
         }],
         targettype,
         eventtype
       }
     } else { //否则就在其基础之上新增
       this.cache.path = [{
         id: target,
         type: targettype
       }].concat(this.cache.path || []);

       this.cache.meta = Object.assign({
         [target]: meta
       }, this.cache.meta);
     }

     return this;
   }
 }
