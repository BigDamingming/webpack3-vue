export default [
    {
        path: '/login',
        component: () => import('comp/login'),
    },
    {
        path: '/framework',
        component: () => import('comp/framework'),
        children: [
            {
                path: '/taobao',
                component: () => import('comp/taobao'),
            }
        ]
    }
];