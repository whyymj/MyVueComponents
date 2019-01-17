 /**
  * 自定义事件对象
  * @param {} param0 
  */

 import {
   deepClone
 } from '@/middleware/GlobalUtils/deepClone.js'
 export function getEvent(eventdata = {
   target: '', //事件源id
   meta: {}, //冒泡携带参数
   targettype: "", //事件源类型
   eventtype: "", //事件类型
 }) {
   if (!(this instanceof getEvent)) {
     return new getEvent(eventdata)
   } else if (eventdata instanceof getEvent) {
     return deepClone(eventdata)
   }
   let {
     target,
     meta,
     targettype,
     eventtype,
     path,
     metaDict
   } = (eventdata instanceof getEvent) ? eventdata.cache: eventdata;
   this.cache = {
     target,
     metaDict: Object.assign({
       [target]: meta
     }, metaDict ? metaDict : {}),
     path: [{
       target,
       targettype
     }].concat(path || []),
     targettype,
     eventtype
   }; 
   this.add = function (myevent) {
     let {
       target,
       meta,
       targettype
     } = (myevent instanceof getEvent) ? myevent.cache: myevent;

     let newObj = deepClone(this);  
     newObj.cache.path = [{
       target,
       targettype
     }].concat(newObj.cache.path || []); 
     newObj.cache.metaDict = Object.assign({
       [target]: meta
     }, newObj.cache.metaDict || {});
     return newObj;

   }
 }
