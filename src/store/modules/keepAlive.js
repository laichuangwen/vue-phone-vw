/*
* 缓存，实现想手机app操作一样，就算用了，keepAlive也保证顶层是走完生命周期的
* */
const alwayKeep=['order', 'my', 'shop', 'center'];//一直要缓存的缓存的  //默认tabbar 要一直缓存
const excludeKeep=[];//一直不要缓存的
const state = {
    keepList:[...alwayKeep],//添加缓存的列表，默认tabbar的页面要缓存
    excludeList:[...excludeKeep],//排除缓存的列表
};
const mutations = {
    ADD_keepList(state, name){
        if(state.keepList.includes(name))//存在了就不加
            return;
        state.keepList.push(name);
    },
    REMOVE_keepList(state, name){
        if(!alwayKeep.includes(name)){//是否是默认缓存的是就不移除
            let index = state.keepList.indexOf(name);
            if (index> -1) {
                state.keepList.splice(index, 1);
            }
        }
    }
}
const actions = {

};
export default {
    state,
    mutations,
    actions,
}
