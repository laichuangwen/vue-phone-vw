import Vue from 'vue';
import Router from 'vue-router';
import {routeList} from './routes'

Vue.use(Router)
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routeList
})
router.beforeEach((to, from, next) => {
    // 过渡动画
    if (to.meta.tabBar) {
        to.meta.animation = 'animated slideInLeft faster';//向右滑入动画
    } else {
        if (!to.meta.parentPath) {//不存在说明是第一次，才要存 ，记录第一次进去的父级路径，用于判断返回
            to.meta.animation = 'animated slideInRight faster';//向右滑入动画
        } else {
            to.meta.animation = 'animated slideInLeft faster';//向左滑入动画
        }
    }
    next();

});
/*全局混入*/
Vue.mixin({
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if (vm.$options.name) {//如果router.replace vm.$options.name会undefined
                vm.$store.commit('ADD_keepList', vm.$options.name);
            }
            if (!to.meta.parentPath) {//不存在说明是第一次，才要存 ，记录第一次进去的父级路径，用于判断返回
                to.meta.parentPath = from.path;//存好父级路径
            }

            //设置记录高度
            if(to.meta.scrollTop){
                if(to.meta.scrollTop.length!=3)
                    return;
                window.pageYOffset=to.meta.scrollTop[0];
                document.documentElement.scrollTop=to.meta.scrollTop[1];
                document.body.scrollTop=to.meta.scrollTop[2];
                //console.log(vm.$options.name+'设置高度',to.meta.scrollTop[0],to.meta.scrollTop[1],to.meta.scrollTop[2]);
            }else {
                window.pageYOffset=0;
                document.documentElement.scrollTop=0;
                document.body.scrollTop=0;
            }


        });
    },
    beforeRouteLeave(to, from, next) {
        //如果router.replace $options.name会undefined
        //判断是从回到父级路径就移除缓存，有'/'是因为在当前页刷新页面导致的，不加的话在当前页刷新后返回在进入还是有缓存的
        if (this.$options.name && (to.path == from.meta.parentPath || from.meta.parentPath == '/')) {
            delete from.meta.parentPath; //删除父级路径初始化
            delete from.meta.scrollTop;//删除记录高度
            this.$store.commit('REMOVE_keepList', this.$options.name);
        }
        from.meta.scrollTop=[window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop];//记录高度,兼容
        //console.log(from.path+'记录高度',window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);
        next();
    }
})

export default router;