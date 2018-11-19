<template>
    <div class="content">
        <mt-header :title="$route.meta.header.title" v-if="$route.meta.header">
            <mt-button v-if="$route.meta.header.back" icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-button type="primary" @click="jumpCenter">点击跳转服务</mt-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        activated() {
            console.log('activated');
        },
        methods:{
            jumpCenter(){
                this.$router.replace('/center')
            }
        }
    }
</script>


<style lang="scss" type="text/scss" scoped>
    @import "../styles/utils";
     .content{
         width: 100%;
         height: 100%;
     }
</style>

  