<template>
    <div id="app">
        <!--模拟手机缓存方式-->


            <!--默认tabbar 没有动画-->
            <transition :enter-active-class="$route.meta.animation">
                <keep-alive :include="$store.state.keepAlive.keepList" :exclude="$store.state.keepAlive.excludeList">
                <router-view></router-view>
                </keep-alive>
            </transition >

        <!--兼容ios 不能margin-bottom-->
        <div class="tabbar-content" v-if="$route.meta.tabBar"></div>
        <xl-tabbar :tabBarList="tabbar" v-if="$route.meta.tabBar"></xl-tabbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                transition: '',//过渡动画
                tabbar: [
                    {
                        pagePath: "/center",
                        iconPath: require('./assets/index/welfare_gray@2x.png'),
                        selectedIconPath: require('./assets/index/welfare_press@2x.png'),
                        text: "首页",
                        selectedColor: '#10A4F5',
                    },
                    {
                        pagePath: "/shop",
                        iconPath: require('./assets/index/shop_gray@2x.png'),
                        selectedIconPath: require('./assets/index/shop_press@2x.png'),
                        text: "商城",
                        selectedColor: '#10A4F5',
                    },
                    {
                        pagePath: "/order",
                        iconPath: require('./assets/index/other_gray@2x.png'),
                        selectedIconPath: require('./assets/index/other_press@2x.png'),
                        text: "订单",
                        selectedColor: '#10A4F5',
                    },
                    {
                        pagePath: "/my",
                        iconPath: require('./assets/index/my_gray@2x.png'),
                        selectedIconPath: require('./assets/index/my_press@2x.png'),
                        text: "我的",
                        selectedColor: '#10A4F5',
                    },
                ]
            }
        },mounted(){
            this.$initLoading();
            setTimeout(()=>{
                this.$initLoading(false);
            },3000)

        }
    }
</script>

<style lang="scss" type="text/scss">
    @import "styles/utils";

    #app {
        background-color: $bg;
        height: 100%;
    }
    .tabbar-content {
        height: 100px;
    }


</style>
