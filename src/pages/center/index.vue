<template>
    <div class="content">
        <mt-header :title="$route.meta.header.title" v-if="$route.meta.header">
            <mt-button v-if="$route.meta.header.back" icon="back" slot="left" @click="$router.go(-1)">返回</mt-button>
        </mt-header>
        <mt-field label="数字" placeholder="请输入数字" type="number" v-model="number"></mt-field>
        <mt-button type="primary" @click="jumpWelfare">点击跳转福利</mt-button>
        <mt-button type="primary" @click="jumpService">点击跳转服务</mt-button>
    </div>
</template>

<script>
    export default {
        name:'center',
        data() {
            return {
                number:0
            }
        },
        mounted(){

        },
        methods:{
            jumpWelfare(){
                this.$router.push('/center/welfare')

            },
            jumpService(){
                this.$router.push('/center/service')
            }

        }
    }
</script>


<style lang="scss" type="text/scss" scoped>

</style>

  