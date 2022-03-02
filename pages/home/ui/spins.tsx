import React from 'react';
import { Spin, Space } from 'antd';

export default class Spins extends React.Component {
    render() {
        return (
            <Space size="middle">
                <Spin size="small" />
                <Spin />
                <Spin size="large" />
            </Space>
        )
    }
}