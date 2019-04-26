import Vue from 'vue';

Vue.mixin({
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('keepAlive/add', vm.$vnode.tag);
      // 设置记录高度
      if (to.meta.scrollTop && to.meta.scrollTop.length === 3) {
        [
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop,
        ] = to.meta.scrollTop;
      }
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  },
  beforeRouteLeave(to, from, next) {
    if (this.$vnode.tag && !from.meta.keepAlive && from.path.split('/').length > to.path.split('/').length) {
      delete from.meta.scrollTop; // 删除记录高度
      this.$store.commit('keepAlive/remove', this.$vnode.tag);
      if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
        const {
          cache,
        } = this.$vnode.parent.componentInstance; // 缓存列表cache
        const {
          keys,
        } = this.$vnode.parent.componentInstance; // 缓存列表keys
        Object.keys(cache).forEach((item) => {
          if (!this.$store.state.keepAlive.keepList.includes(cache[item].tag)) {
            if (keys.length) {
              const index = keys.indexOf(item);
              if (index > -1) {
                keys.splice(index, 1);
              }
            }
            delete cache[item];
          }
        });
        this.$destroy(); // 销毁
        // console.log('销毁');
      }
    }
    from.meta.scrollTop = [window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop]; // 记录高度,兼容
    // console.log(from.path+'记录高度',window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop);
    next();
  },
});
