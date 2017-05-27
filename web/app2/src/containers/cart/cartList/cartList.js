import React, { Component } from 'react';
import './cartList.css'

class ListDetail extends Component {
    render() {
        return (
            <div className="ldl-wrap">
                <div className="ldl-circle"> </div>
                <img src={require('./img/'+this.props.picture+'.jpg')} className="ldl-pic" alt=""/>
                <div className="ldl-txt-w">
                    <span>Only Hearts 如诗如画如梦</span><br/>
                    <span className="ldl-txt1">此商品限购一件</span><br/>
                    <span className="ldl-txt2">￥398.8</span>
                </div>
                <div className="ldl-num-w">
                    <span className="ldl-num">×1</span>
                </div>
            </div>
        )
    }
}
class CartList extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight
        };
    }
    render() {
        return (
            <div className="clt-wrap" style={{height:this.state.screenHeight}}>
                <div>
                    <div>
                        <div className="clt-s-w">
                            <div className="clt-circle"> </div>
                            <span className="clt-title-s">唯美驿站</span>
                            <span className="clt-editor">编辑</span>
                        </div>

                        <ListDetail picture={'list4@2'}/>
                    </div>
                    <div>
                        <div className="clt-s-w">
                            <div className="clt-circle"> </div>
                            <span className="clt-title-s">Ava小小铺</span>
                            <span className="clt-editor">编辑</span>
                        </div>
                        <ListDetail picture={'list10@2'}/>
                        <ListDetail picture={'list11@2'}/>
                    </div>
                </div>

                <div className="clt-pay-w">
                    <div className="clt-circle"> </div>
                    <div className="clt-txt-w">
                        <span className="clt-txt1">全选</span>
                        <span className="clt-txt2">合计:</span>
                        <span className="clt-txt3">￥398.8</span>
                    </div>
                    <div className="clt-submit">结算(0)</div>
                </div>
            </div>
        )
    }
}
export default CartList;

