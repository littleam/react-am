import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import './buySubmit.css'
class BuySubmit extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight,
            show:'none'
        };
    }
    render() {
        return (
            <div className="bst-wrap">
                <div className="bst-adr" style={{height:this.state.screenHeight}}>
                    <div className="bst-adr">
                        <span>收货人</span><br/>
                        <span>林夕 18989860588</span>
                        <span>收货地址:浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>

                    <SeparateLine/>
                    <div className="bts-shop">
                        <img src={require('./img/shop1@2.jpg')} className="bst-pic-s" alt=""/>
                        <span className="bst-title-s">唯美驿站 &gt;</span>
                    </div>

                    <div className="bst-good">

                        <img src={require('./img/page1@2.jpg')} className="bst-pic-g" alt=""/>
                        <div className="bst-g-right">
                            <span className="bst-text1">Only Hearts 如诗如画如梦</span><br/>
                            <span className="bst-text2">颜色:紫色 尺码:M</span><br/>
                            <span className="bst-text2">卖家承诺3天内发货</span><br/>
                            <span className="bst-text3">￥398.8</span>
                        </div>
                        <div className="bst-num-w">
                            <span className="bst-num">×1</span>
                        </div>
                    </div>

                    <div className="bst-total">商品小计:￥68元</div>
                    <SeparateLine/>
                    <div className="bst-discount">
                        <img src={require('./img/row1@2.jpg')} className="bst-icon1" alt=""/>
                        <span>选择代金券</span>
                        <img src={require('./img/row5@2.jpg')} className="bst-icon2" alt=""/>
                        <span>&gt;</span>
                    </div>
                    <div className="bst-discount">
                        <img src={require('./img/row3@2.jpg')} className="bst-icon1" alt=""/>
                        <span>新人优惠</span>
                        <span>&gt;</span>
                    </div>
                    <div className="bst-new">新人优惠10:00元,本单最多可使用10:00元</div>
                    <SeparateLine/>
                    <div className="bst-discount">
                        <img src={require('./img/row3@2.jpg')} className="bst-icon1" alt=""/>
                        <span>运送费用</span>
                        <img src={require('./img/row6@2.jpg')} className="bst-icon2" alt=""/>
                        <span>&gt;</span>
                    </div>
                    <div className="bst-discount">
                        <img src={require('./img/row4@2.jpg')} className="bst-icon1" alt=""/>
                        <span>优惠金额</span>
                        <span>&gt;</span>
                    </div>
                    <div className="bst-discount">
                        <span>订单实付金额</span>
                        <span>￥68:00</span>
                    </div>
                </div>
                <div className="bst-btn-w">
                    <div className="bst-btn" onClick={this.show.bind(this)} >提交订单</div>
                </div>
                <div style={{display:this.state.show}}>
                    <div className="bst-back" style={{height:this.state.screenHeight}}> </div>
                    <div className="bst-pay-w">
                        <div className="bst-pay">
                            <span>支付方式</span>
                        </div>
                        <div className="bst-pay">
                            <img src={require('./img/row3@2.jpg')} className="bst-icon3" alt=""/>
                            <span>支付宝支付</span>
                        </div>
                        <div className="bst-pay">
                            <img src={require('./img/row4@2.jpg')} className="bst-icon3" alt=""/>
                            <span>微信支付</span>

                        </div>
                        <div className="bst-pay">
                            <span>需要支付：￥68元</span>
                        </div>
                        <div className="bst-confirm-w">
                            <div className="bst-confirm">确认支付</div>
                        </div>
                        <span className="bst-cancel">×</span>
                    </div>
                </div>
            </div>
        )
    }
    show(){
        this.setState({
            show:'block'
        })
    }
}

export default BuySubmit;
