<template>
    <div class="content">
        <mt-header :title="$route.meta.header.title" v-if="$route.meta.header">
            <mt-button v-if="$route.meta.header.back" icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul>
            <li v-for="(index,item) in list" :key="index" @click="jumpDetail(item)">{{ item }}</li>
        </ul>
        </mt-loadmore>
    </div>
</template>

<script>
    export default {
        name: 'centerWelfare',
        data() {
            return {
                allLoaded:false,
                list: []
            }
        },
        mounted() {
            for (let i = 0; i < 30; i++) {
                this.list.push(i);
            }
        },
        methods: {
            jumpDetail(id) {

                this.$router.push({
                    path: '/center/welfare/detail',
                    query: {
                        id: id
                    }
                });
            },
            loadTop() {
            // 加载更多数据
                console.log('下拉');
                //this.$refs.loadmore.onTopLoaded();
                setTimeout(()=>{
                    this.allLoaded = false;
                    this.$refs.loadmore.onTopLoaded();
                },3000)
            },
            loadBottom(){
               // this.allLoaded = true;// 若数据已全部获取完毕
               // this.$refs.loadmore.onBottomLoaded();
                setTimeout(()=>{
                    this.allLoaded = true;// 若数据已全部获取完毕
                    this.$refs.loadmore.onBottomLoaded();
                },3000)
            },

        },
    }
</script>


<style lang="scss" type="text/scss" scoped>
    ul {
        > li {
            text-align: center;
            padding: 20px;
            border-bottom: 1px solid #e0e0e0;
            &:first-child {
                border-top: 1px solid #e0e0e0;
            }
        }
    }
</style>

  