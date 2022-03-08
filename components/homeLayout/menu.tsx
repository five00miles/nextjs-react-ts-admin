import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu } from 'antd';

import menus from "@/config/menus"

const { SubMenu, Item } = Menu;

function renderMenuItem(item: any) {
    return (
        <Item key={item.key} icon={item.icon}>
            <Link href={item.key} passHref>
                {item.title}
            </Link>
        </Item>
    )
}

function renderSubMenu(item: any) {
    return (
        <SubMenu
            key={item.key}
            title={item.title}
            icon={item.icon}
        >
            {item.subs.map((sub: any) => (sub.subs ? renderSubMenu(sub) : renderMenuItem(sub)))}
        </SubMenu>
    );
};

export default withRouter(class HomeLayoutMenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            defaultOpenKeys: ['/home'],
            defaultSelectedKeys: ['/home'],
        }
    }

    UNSAFE_componentWillMount() {
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
        this.setState({
            defaultOpenKeys: recombineOpenKeys(this.props.router.pathname.match(/\/(\w+)/gi) || []),
            defaultSelectedKeys: [this.props.router.pathname],
        })
    }
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultOpenKeys={this.state.defaultOpenKeys} defaultSelectedKeys={this.state.defaultSelectedKeys}>
                {
                    menus.map(menu => menu.subs ? renderSubMenu(menu) : renderMenuItem(menu))
                }
            </Menu>
        )
    }
})