import React from 'react';
import { withRouter } from 'next/router'
import { Breadcrumb } from 'antd';
import menus from '@/config/menus'

let allRoutes = []
function getAllRoutes(sub:any) {
    sub.forEach(item => {
        allRoutes.push(item)
        if (item.subs) getAllRoutes(item.subs)
    })
}
getAllRoutes(menus)

console.log('allRoutes',allRoutes)

const recombineOpenKeys = (openKeys: string[]) => {
    let i = 0;
    let strPlus = '';
    let tempKeys: string[] = [];
    // 多级菜单循环处理
    while (i < openKeys.length) {
        strPlus += openKeys[i];
        tempKeys.push(strPlus);
        i++;
    }
    return tempKeys;
};

export default withRouter(class Breadcrumbs extends React.Component<any, any> {
    render() {
        const pathArr = recombineOpenKeys(this.props.router.pathname.match(/\/(\w+)/gi))

        return (
            <Breadcrumb>
                {
                    pathArr.map(path => {
                        let route: any = allRoutes.filter(route => {
                            return route.key === path
                        })
                        return <Breadcrumb.Item key={path}>{route[0].title}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        )
    }
})