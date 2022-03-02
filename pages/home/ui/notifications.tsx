import React from 'react';
import { Button, notification } from 'antd';

export default class Notifications extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.openNotification = this.openNotification.bind(this)
    }

    openNotification() {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    }

    render() {
        return (
            <Button type="primary" onClick={this.openNotification}>
                Open the notification box
            </Button>
        )
    }
}