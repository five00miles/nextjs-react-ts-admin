import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


export default class UiTabs extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.callback = this.callback.bind(this);
    }

    callback(key: any) {
        console.log(key);
    }

    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                </TabPane>
            </Tabs>
        )

    }

}