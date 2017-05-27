import React, { Component } from 'react';
import PageSeparate from '../album/album';
import SeparateLine from '../../../components/separateLine';
import Like from '../like/like'
import './buyDetail.css'
class BuyDetail extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight
        };
    }
    render() {
        let screenHeight = this.state.screenHeight;
        return (
            <div className="bdl-warp" style={{height:screenHeight}}>

                <div className="bdl-whole">

                    <div className="bdl-none">
                        <span>商品介绍</span>
                        <span>商品评价</span>
                        <span>图文详情</span>
                        <span>更多推荐</span>
                    </div>
                    {/*商品介绍*/}
                    <img src={require('./img/page1@2.jpg')} className="bdl-pic-big" alt=""/>
                    <div className="bdl-body">
                    <div className="bdl-info">
                        <span className="bdl-title">MarLab 仲夏夜花园 柔嫩保湿护手霜 35g 蕴含天然澳洲坚果</span><br/>
                        <div className="bdl-price">
                            <span className="bdl-money">￥</span><span className="bdl-num">68</span>
                            <span className="bdl-sale">节假日促销价</span><br/>
                            <span className="bdl-font">价格：￥99</span><br/>
                        </div>
                        <div className="bdl-font-wrap">
                            <span className="bdl-font">月销108笔</span>
                            <span className="bdl-font"><img src={require('./img/share@2.png')} className="bdl-share" alt=""/>分享</span>
                        </div>
                    </div>


                    </div>
                    <div className="bdl-bottom">
                        <div className="bdl-both bdl-server">
                            <img src={require('./img/chart@2.png')} className="bdl-icon" alt=""/><br/><span>客服</span></div>
                        <div className="bdl-both bdl-shop">
                            <img src={require('../../../common/shop/img/shop1@2.png')} className="bdl-icon" alt=""/><br/><span>商店</span></div>
                        <div className="bdl-three bdl-collect" style={{}}>
                            <img src={require('./img/hart@2.png')} className="bdl-icon" alt=""/><br/><span>收藏</span></div>
                        <div className="bdl-three bdl-cart">加入购物车</div>
                        <div className="bdl-three bdl-buy">立即购买</div>
                    </div>
                    <SeparateLine/>
                    <div className="bdl-ensure"><span><img src="" alt=""/>正品保证</span><span className="bdl-seven">
                        <img src="" alt=""/>七天退换</span><span>&gt;</span></div>
                    <div className="bdl-discount"><span><img src="" alt=""/>领取优惠券</span><span>&gt;</span></div>

                    {/*商品评价*/}
                    <SeparateLine/>
                    <PageSeparate title={'商品评价'}/>
                    <div className="bdl-ratting-w">
                        <span className="bdl-ratting">商品评价(88)</span><br/>
                        <img src={require('./img/user@2.jpg')} className="bdl-pic-user" alt=""/><span >x**6</span><br/>
                        <span>护手霜很润，很好吸收.....</span><br/>
                        <div className="bdl-more-w" style={{}}><span className="bdl-more">查看全部评价</span></div>
                    </div>
                    {/*店铺信息*/}



                    {/*图文详情*/}
                    <SeparateLine/>
                    <PageSeparate title={'图文详情'}/>
                    <div className="bdl-detail">
                        <span className="dbl-dis1">
                            水润轻盈质地不黏腻，蕴含天然澳洲坚果油及花果精华，涂抹双手后，馥郁迷人的神秘花园之香，温柔而持久。精心调配的多重保湿因子及天然果乳脂活性配方，可以柔嫩双手并淡化细纹。
                        </span>
                        <img src={require('./img/page2@2.jpg')} className="bdl-one" alt=""/>
                        <div className="bdl-border">
                            <img src={require('./img/page3@2.jpg')} className="bdl-two" alt=""/>
                        </div>
                        <span className="bdl-dis2">
                            2017年5月7日起，购买任意MarLab商品，即可获赠MarLab洗衣液试用装一套。套装内含贴身衣物专用洗衣液10ml、全能洗衣液15ml。每笔订单仅限一份，数量有限，赠完即止。
                        </span>

                        <img src={require('./img/page4@2.jpg')} className="bdl-four bdl-five" alt=""/>

                    </div>
                    {/*更多推荐*/}
                    <SeparateLine/>
                    <PageSeparate title={'更多推荐'}/>
                    <Like/>


                </div>


            </div>
        );
    }

}
export default BuyDetail;
