import Vue from 'vue'
import App from './App.vue'
import router from './router'//router
import './core/ajax';//axios
import store from './store'//vuex 状态管理
import api from './core/api';
import './plugins'//插件
import './styles/index.scss' //样式

Vue.config.productionTip = false;
Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
