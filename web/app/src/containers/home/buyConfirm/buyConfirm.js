import React, { Component } from 'react';
import './buyConfirm.css'

class BuyConfirm extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight,
            showBuyConfirm:true
        };
        this.hiddenBuyConfirm = this.hiddenBuyConfirm.bind(this)
    }
    render() {
        return (
            <div>
                {this.state.showBuyConfirm ?
                <div className="bcm-wrap" style={{height:this.state.screenHeight}}>
                    <div className="bcm-out">
                        <div className="bcm-in">
                            <div className="bcm-top">
                                <img src={require('./img/page1@2.jpg')} className="bcm-img" alt=""/><br/>
                                <span>MarLab 仲夏夜花园 柔嫩保湿护手霜 35g 蕴含天然澳洲坚果</span><br/>
                                <span className="bcm-price">￥68</span><br/>
                            </div>
                            <div className="bcm-detail">
                                <span>颜色: </span>
                                <span className="bcm-color-d" >紫色</span>
                                <span className="bcm-color-d">粉色</span>
                                <span className="bcm-color-d">灰色</span><br/>
                            </div>
                            <div className="bcm-size">
                                <span>尺码:</span>
                                <span className="bcm-size-d">S</span>
                                <span className="bcm-size-d">M</span>
                                <span className="bcm-size-d">L</span>
                                <span className="bcm-size-d">XL</span>
                            </div>
                            <div className="bcm-bottom">
                                <div className="bcm-select">
                                    <div className="bcm-down">-</div>
                                    <div className="bcm-num">1</div>
                                    <div className="bcm-up">+</div>
                                </div>
                                <div className="bcm-add">加入购物车</div>
                            </div>
                            <span className="bcm-cancel" onTouchStart={this.hiddenBuyConfirm}>×</span>

                        </div>
                    </div>
                </div> : ''
                }
            </div>
        )
    }
    hiddenBuyConfirm(){
        this.setState({
            showBuyConfirm:false
        })
    }
}
export default BuyConfirm;
