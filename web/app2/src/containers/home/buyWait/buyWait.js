import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import Detail from '../like/like'
import PageSeparate from '../album/album'
import './buyWait.css'
class BuyWait extends Component {
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
        let rem = this.state.rem;

        return (
            <div style={{height:this.state.screenHeight}} className="bwt-wrap">
                <div>
                    <div className="bwt-adr">
                        <span>收货人</span><br/>
                        <span>林夕 18989860588</span>
                        <span>收货地址:浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>

                    <div className="bwt-shop-w">
                        <img src={require('./img/shop1@2.jpg')} className="bwt-pic-s" alt=""/>
                        <span className="bwt-text-s">唯美驿站 &gt;</span>
                    </div>

                    <div className="bwt-good-w">
                        <img src={require('./img/page1@2.jpg')} className="bwt-pic-g" alt=""/>
                        <div className="bwt-text-w">
                            <span className="bwt-text1">Only Hearts 如诗如画如梦</span><br/>
                            <span className="bwt-text2">颜色:紫色 尺码:M</span><br/>
                            <span className="bwt-text2">卖家承诺3天内发货</span><br/>
                            <span className="bwt-text3">￥398.8</span>
                        </div>
                        <div className="bwt-num-w">
                            <span className="bwt-num">×1</span>
                        </div>

                    </div>

                    <div style={{height:0.93*rem}}>
                        <span>运费</span>
                        <span>商品小计:￥68元</span>
                    </div>

                    <SeparateLine/>
                    <div className="bwt-order-w" >
                        <span>订单编号:17170509100224</span><br/>
                        <span>创建时间:2017年 5月 13日</span>
                    </div>
                    <div className="border-top">
                        <span>请在2天23小时内完成付款</span><br/>
                        <span>逾期订单将自动取消</span>
                        <span>2天23小时59分35秒</span>
                    </div>
                    <SeparateLine/>




                </div>
                <div className="bwt-pay-w">

                    <div className="bwt-pay">付款</div>
                </div>

                <PageSeparate title={'猜你喜欢'}/>
                <Detail/>


            </div>
        )
    }
    show(){
        this.setState({
            show:'block'
        })
    }
}

export default BuyWait;
