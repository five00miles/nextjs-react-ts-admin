import React from 'react';
import { Modal, Button } from 'antd';

export default class Modals extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { isModalVisible: false }

        this.showModal = this.showModal.bind(this)
        this.handleOk = this.handleOk.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    showModal() {
        this.setState({
            isModalVisible: true
        })
    }

    handleOk() {
        this.setState({
            isModalVisible: false
        })
    }
    handleCancel() {
        this.setState({
            isModalVisible: false
        })
    }

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showModal}>
                    Open Modal
                </Button>
                <Modal title="Basic Modal" visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        )
    }
}