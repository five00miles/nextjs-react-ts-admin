import React from 'react';
import { Layout } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import Menu from './menu'
import HomeLayoutHeader from './header'

import style from '@/styles/components/homeLayout.module.css'

const { Header, Sider, Content } = Layout;

class HomeLayout extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className={style['home-layout-wrapper']}>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}>
                    <div className={style['logo']} />
                    <Menu />
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: this.state.collapsed ? 80 : 200 }}>
                    <Header className={style['site-header']}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: `${style['trigger']} point`,
                            onClick: this.toggle,
                        })}
                        <HomeLayoutHeader />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default HomeLayout