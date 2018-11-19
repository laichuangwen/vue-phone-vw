import Vue from 'vue'
import './mint-ui';
import tabbar from '../components/tabbar.vue'
// 自定义全局组件
Vue.component('xl-tabbar', tabbar);
//全局加载
Vue.prototype.$initLoading=(isLoad=true) => {
    if(isLoad){
        "use strict";
        if (window.initLoading) {
            return;
        }
        window.initLoading = document.createElement('div');
        console.log( window.initLoading )
        window.initLoading.className='init-loading';
        window.initLoading.innerHTML = `
              <div class="init-loading-warp">
                <div class="init-loading-main">
                <div class="init-loading-com" id="init-loading-three"></div>
                <div class="init-loading-com" id="init-loading-two"></div>
                <div class="init-loading-com" id="init-loading-one"></div>
                 </div>
                 </div>`;
        document.body.appendChild(window.initLoading);

    }else {
        "use strict";
        if (!window.initLoading) {
            return;
        }
        try {
            console.log('移除去全局加载')
            document.body.removeChild(window.initLoading);
        } catch (e) {
            window.initLoading = void 0;
        } finally {
            window.initLoading = void 0;
        }
    }
};

