/*
*
* header ：是否有头  {title：标题 back有返回}
* tabBar:是否是tabBar 界面
*
*
* */
const pipe = file => () => import(`../pages/${file}.vue`);
export const routeList =[
    {
        path: '/',
        redirect:'/login'
    },
    {
        path: '/login',
        component: pipe('login'),
        meta: {
            header:{
                title:'登录',
            },

        }
    },
    {
        path: '/center',
        component: pipe('center/index'),
        meta: {
            header:{
                title:'首页',
            },
            tabBar:true,
            index:0,
        }
    },  {
        path: '/shop',
        component: pipe('shop/index'),
        meta: {
            header:{
                title:'商城',
            },
            tabBar:true,
            index:1,
        }
    },
    {
        path: '/order',
        component: pipe('order/index'),
        meta: {
            header:{
                title:'订单',
            },
            tabBar:true,
            index:2,
        }
    },
    {
        path: '/my',
        component: pipe('my/index'),
        meta: {
            header:{
                title:'我的',
            },
            tabBar:true,
            index:3,
        }
    },

    {
        path: '/center/welfare',
        component: pipe('center/welfare/index'),
        meta: {
            header:{
                title:'福利',
                back:true
            },
        }
    },
    {
        path: '/center/welfare/detail',
        component: pipe('center/welfare/detail/index'),
        meta: {
            header:{
                title:'详情',
                back:true
            },
        }
    },
    {
        path: '/center/service',
        component: pipe('center/service/index'),
        meta: {
            header:{
                title:'服务',

            },
        }
    },

]