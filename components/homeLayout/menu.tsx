import React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Menu } from 'antd';

import menus from "@/config/menus"

const { SubMenu } = Menu;

function createMenu(menu: any) {
    if (!menu.subs || menu.subs.length === 0) {
        return (
            <Menu.Item key={menu.key}>
                <Link href={menu.key} passHref>
                    {menu.title}
                </Link>
            </Menu.Item>
        )
    } else {
        return (
            <SubMenu key={menu.key} title={menu.title}>
                {menu.subs.map((sub: any) => {
                    return (
                        <Menu.Item key={sub.key}>
                            <Link href={sub.key} passHref>
                                {sub.title}
                            </Link>
                        </Menu.Item>
                    )
                })}
            </SubMenu>
        )
    }
}

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
        const getOpenAndSelectKeys = () => {
            return {
                openKeys: recombineOpenKeys(this.props.router.pathname.match(/[/](\w+)/gi) || []),
                selectedKey: location.pathname,
            };
        };
        this.setState({
            defaultOpenKeys: recombineOpenKeys(this.props.router.pathname.match(/[/](\w+)/gi) || []),
            defaultSelectedKeys: [this.props.router.pathname],
        })
    }
    render() {
        return (
            <Menu theme="dark" mode="inline"  defaultOpenKeys={this.state.defaultOpenKeys} defaultSelectedKeys={this.state.defaultSelectedKeys}>
                {
                    menus.map(menu => createMenu(menu))
                }
            </Menu>
        )
    }
})