import React from 'react'

import { Avatar, Badge, Space, Dropdown, Menu } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';

import style from '@/styles/components/homeLayoutHeader.module.css'


const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                我的账户
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="#">
                退出
            </a>
        </Menu.Item>
    </Menu>
)

export default class HomeLayoutHeader extends React.Component {
    render() {
        return (
            <Space className={style['header-wrapper']} align="center" size={20}>
                <Badge count={5}>
                    <MessageOutlined className="pointer" style={{ fontSize: '20px' }} />
                </Badge>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <Avatar className="pointer" size={46} icon={<UserOutlined />}
                        src="/imgs/avatar.jpg" />
                </Dropdown>

            </Space>
        )
    }
}