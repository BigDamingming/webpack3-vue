export default [
    {
        path: '/login',
        component: () => import('comp/login'),
    },
    {
        path: '/framework',
        component: () => import('comp/framework'),
    }
];