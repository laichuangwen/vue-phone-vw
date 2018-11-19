<template>
    <div class="tabs-bar">
        <router-link :to="item.pagePath" class="tab-item" v-for="item in tabBarList" :key="item.pagePath" replace>
            <img :src="item.pagePath===$route.path?item.selectedIconPath:item.iconPath">
            <p :style="{'color':item.pagePath===$route.path?item.selectedColor:''}">{{item.text}}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            tabBarList: {
                type: Array,
                default: () => {
                    return [
                        {
                            pagePath: "/center",
                            iconPath: require('../assets/index/welfare_gray@2x.png'),
                            selectedIconPath: require('../assets/index/welfare_press@2x.png'),
                            text: "首页",
                            selectedColor: '#10A4F5',
                        },
                        {
                            pagePath: "/shop",
                            iconPath: require('../assets/index/shop_gray@2x.png'),
                            selectedIconPath: require('../assets/index/shop_press@2x.png'),
                            text: "商城",
                            selectedColor: '#10A4F5',
                        },
                        {
                            pagePath: "/order",
                            iconPath: require('../assets/index/other_gray@2x.png'),
                            selectedIconPath: require('../assets/index/other_press@2x.png'),
                            text: "订单",
                            selectedColor: '#10A4F5',
                        },
                        {
                            pagePath: "/my",
                            iconPath: require('../assets/index/my_gray@2x.png'),
                            selectedIconPath: require('../assets/index/my_press@2x.png'),
                            text: "我的",
                            selectedColor: '#10A4F5',
                        },
                    ];
                }
            },

        },
        data() {
            return {}
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>

    .tabs-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;
        background: #fff;
        border-top: solid thin #E0E0E0;
        color: #999;
    }

    .tab-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        font-size: 20px;
        padding: 10px 0;
        cursor: pointer;
        > img {
            height: 40px;
        }
        > p {
            font-size: 20px;
            margin-top: 5px;
        }
    }

</style>

  