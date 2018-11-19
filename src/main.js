import Vue from 'vue'
import App from './App.vue'
import router from './router'//router
import './core/ajax';//axios
import store from './store'//vuex 状态管理
import api from './core/api';//api接口
import './plugins'//插件
import './styles/index.scss' //样式
import {set_SStorage,get_SStorage} from './core/storageEncryption';//对sessionStorage统一加密处理

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$setSST=set_SStorage;//设置sessionStorage  加密
Vue.prototype.$getSST =get_SStorage;//设置sessionStorage 解密
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
