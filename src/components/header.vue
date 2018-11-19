<template>
    <mt-header :title="title">
        <mt-button v-if="isBack" icon="back" slot="left" @click="goBack">返回</mt-button>
    </mt-header>
</template>

<script>
    export default {
        props: {
          title:{
              type:String,
              default:'',
          },
          isBack:{
              type:Boolean,
              default:true,
          }
        },
        data() {
            return {}
        },
        methods:{
            goBack(){
                this.$router.go(-1);
                this.$store.commit('ADD_EXCLUDELIST',)
            }
        }
    }
</script>


<style lang="scss" type="text/scss" scoped>

</style>

  