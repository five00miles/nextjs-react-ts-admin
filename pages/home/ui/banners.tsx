import React from 'react'
import { Carousel } from 'antd';

const contentStyle: any = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


export default class Banners extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }


    onChange(a: any) {
        console.log(a);
    }

    render() {
        return (
            <Carousel afterChange={this.onChange}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        )
    }
}
