const menus = [
    // 菜单相关路由
    { key: '/home', title: '首页', icon: 'mobile' },
    {
        key: '/home/ui',
        title: 'UI',
        icon: 'ApartmentOutlined',
        subs: [
            { key: '/home/ui/buttons', title: '按钮' },
            { key: '/home/ui/icons', title: '图标' },
            { key: '/home/ui/spins', title: '加载中' },
            { key: '/home/ui/modals', title: '对话框' },
            { key: '/home/ui/notifications', title: '通知提醒框' },
            { key: '/home/ui/tabs', title: '标签页' },
            { key: '/home/ui/drags', title: '拖拽' },
            { key: '/home/ui/list', title: '长列表' },
            { key: '/home/ui/grid', title: '栅格' },
            { key: '/home/ui/banners', title: '轮播图' },
            { key: '/home/ui/wysiwyg', title: '富文本' },
        ],
    },
    {
        key: '/home/animation',
        title: '动画',
        icon: 'ApartmentOutlined',
        subs: [
            {
                key: '/home/animation/basicAnimations',
                title: '基础动画',
                component: 'BasicAnimations',
            },
            {
                key: '/home/animation/exampleAnimations',
                title: '动画案例',
                component: 'ExampleAnimations',
            },
        ],
    },
    {
        key: '/home/table',
        title: '表格',
        icon: 'ApartmentOutlined',
        subs: [
            { key: '/home/table/basicTable', title: '基础表格' },
            { key: '/home/table/advancedTable', title: '高级表格' },
            {
                key: '/home/table/asynchronousTable',
                title: '异步表格',
                component: 'AsynchronousTable',
            },
        ],
    },
    {
        key: '/home/chart',
        title: '图表',
        icon: 'area-chart',
        subs: [
            { key: '/home/chart/echarts', title: 'echarts' },
            { key: '/home/chart/recharts', title: 'recharts' },
        ],
    },
    {
        key: '/subs4',
        title: '页面',
        icon: 'ApartmentOutlined',
        subs: [
            { key: '/login', title: '登录' },
            { key: '/404', title: '404' },
        ],
    },
    {
        key: '/home/auth',
        title: '权限管理',
        icon: 'ApartmentOutlined',
        subs: [
            { key: '/home/auth/basic', title: '基础演示' },
            {
                key: '/home/auth/routerEnter',
                title: '路由拦截',
                component: 'RouterEnter',
                requireAuth: 'auth/testPage',
            },
        ],
    },
    {
        key: '/home/cssModule',
        title: 'cssModule',
        icon: 'ApartmentOutlined',
        component: 'Cssmodule',
    },
    {
        key: '/home/extension',
        title: '功能扩展',
        icon: 'ApartmentOutlined',
        subs: [
            {
                key: '/home/extension/queryParams',
                title: '问号形式参数',
                component: 'QueryParams',
                query: '?param1=1&param2=2',
            },
            {
                key: '/home/extension/visitor',
                title: '访客模式',
                component: 'Visitor',
                login: true,
            },
            {
                key: '/home/extension/multiple',
                title: '多级菜单',
                subs: [
                    {
                        key: '/home/extension/multiple/child',
                        title: '多级菜单子菜单',
                        subs: [
                            {
                                key: '/home/extension/multiple/child/child',
                                title: '多级菜单子子菜单',
                                component: 'MultipleMenu',
                            },
                        ],
                    },
                ],
            },
            {
                key: '/home/extension/env',
                title: '环境配置',
                component: 'Env',
            },
        ],
    },
]

export default menus;
