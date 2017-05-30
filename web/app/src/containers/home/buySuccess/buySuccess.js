import React, { Component } from 'react';
import Detail from '../like/like'
import PageSeparate from '../album/album'
import SeparateLine from '../../../components/separateLine'
import './buySuccess.css'
class BuySuccess extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let hWidth = html.getBoundingClientRect().width;
        let screenHeight = html.getBoundingClientRect().height;
        let rem = html.style.fontSize = hWidth / 7.5;
        this.state = {
            rem: rem,
            screenHeight:screenHeight,
            show:'none'
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div className="bss-wrap" style={{height:this.state.screenHeight}}>
                <div>
                    <div className="bss-header">
                        <span className="bss-success">支付成功</span>
                        <a className="bss-server" href=""><img
                            src={require('../buyDetail/img/chart@2.png')} alt="" className="bss-icon"/></a>
                    </div>
                </div>
                <div>
                    <img src={require('./img/buy@2.jpg')} className="bss-pic" alt=""/>
                    <div className="bss-adr">
                        <span>收货人：</span>
                        <span>林夕 18989860588</span><br/>
                        <span>收货地址：浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>
                    <div className="bss-over">
                        <div className="bss-back">查看订单</div>
                        <div className="bss-back">返回首页</div>
                    </div>
                    <SeparateLine/>
                <PageSeparate title={'猜你喜欢'}/>
                <Detail/>
                </div>
            </div>
        )
    }
}

export default BuySuccess;
