export default [
    {
        path: '/login',
        component: () => import('comp/login'),
    },
    {
        path: '/taobao',
        component: () => import('comp/a'),
    },
    {
        path: '/tmall',
        component: () => import('comp/b'),
    },
    {
        path: '/kaola',
        component: () => import('comp/c'),
    },
    {
        path: '/news',
        component: () => import('comp/d'),
    }
];