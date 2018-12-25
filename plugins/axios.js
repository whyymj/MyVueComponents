import Vue from 'vue'
import Axios from 'axios'

// 请求拦截（配置发送请求的信息）
axios.interceptors.request.use(
  
  function (config) { 
       console.log('axios config>>',config)
    // 处理请求之前的配置
    return config
  },
  function (error) {
    // 请求失败的处理
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = Axios
