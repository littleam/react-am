import React, { Component } from 'react';
import './shop.css'

class Shop extends Component {
    render() {
        return (
            <div className="bdl-shop-w">
                <div className="bdl-top">
                    <img src={require('./img/shop1@2.jpg')} className="bdl-pic-shop"  alt=""/>
                    <span className="bdl-size">小猪麦都旗舰店</span>
                    <div className="bdl-shop-d">
                        <div className="bdl-shop-w">
                            <span className="bdl-font-size">312</span><br/>
                            <span className="bdl-good">全部宝贝</span>
                        </div>
                        <div className="bdl-focus">
                            <span className="bdl-size-f">16.9万</span><br/>
                            <span className="bdl-good">关注人数</span>
                        </div>
                        <div className="bdl-score">
                            <span>宝贝描述 4.9</span><span className="bdl-score-d">高</span><br/>
                            <span>卖家服务 4.9</span><span className="bdl-score-d">高</span><br/>
                            <span>物流服务 4.8</span><span className="bdl-score-d">高</span>
                        </div>
                    </div>
                    <div className="bdl-more-w">
                        <div className="bdl-category"><span className="bdl-shopping-d">查看分类</span></div>
                        <div className="bdl-category bdl-shopping"><span className="bdl-shopping-d">进店逛逛</span></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Shop;
