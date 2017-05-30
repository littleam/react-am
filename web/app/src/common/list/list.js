import React, { Component } from 'react';
import './list.css'

class ListDetail extends Component {
    render() {
        return (
            <div className="lil-wrap">
                <img src={require('./img/'+this.props.picture+'.jpg')} className="lil-pic" alt=""/>
                <div className="lil-txt-w">
                    <span>Only Hearts 如诗如画如梦</span><br/><span className="lil-txt1">夕染彩色手机壳</span><br/>
                    <span className="lil-txt2">365人已付款</span><br/>
                    <span className="lil-txt3">￥398.8</span><span className="lil-txt4">￥598</span>
                </div>
                <div className="lil-num-w">
                    <div className="lil-num">-</div>
                    <span className="lil-sub">1</span>
                    <div className="lil-num">+</div>
                </div>
            </div>
        )
    }
}
class List extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let hWidth = html.getBoundingClientRect().width;
        let screenHeight = html.getBoundingClientRect().height;
        let rem = html.style.fontSize = hWidth / 7.5;
        this.state = {
            rem: rem,
            screenHeight:screenHeight,
            selected:1
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div className="lst-wrap" style={{height:this.state.screenHeight}}>


                        <div className="lst-cat-w">
                            <div className="lst-cat-l">
                                <span className={this.state.selected === 1 ? 'lst-active' : ''}>分类</span><br/>
                                <div className="lst-cat-line"> </div>
                            </div>
                            <div className="lst-cat-l">
                                <span className={this.state.selected === 2 ? 'lst-active' : ''}>评分(4.8)</span><br/>
                            </div>
                        </div>

                    <div className="lst-d-w">
                        <div className="lst-l-w">
                            <div className="lst-l-line"> </div>
                            <div className="list-l-pic-w lst-l-active">
                                <img src={require('./img/hot@2.jpg')} className="lst-l-pic" alt=""/><span>热销榜</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>解忧杂货铺</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>美体小铺</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>星美妆报告</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>创意生活</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <img src={require('./img/hello@2.jpg')} className="lst-l-pic" alt=""/><span>萌萌哒</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>文艺范</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <img src={require('./img/sale@2.jpg')} className="lst-l-pic" alt=""/><span style={{}}>折扣中</span><br/>
                            </div>
                            <div className="list-l-pic-w">
                                <span>送闺蜜</span><br/>
                            </div>
                        </div>
                        <div className="lst-r-w">
                            <div>
                                <div className="lst-tab">
                                    <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>热销榜</span><span style={{color:'#a9a9a9',fontSize:0.24*rem,paddingLeft:0.15*rem}}>大家好，才是真的好</span>
                                </div>
                                    <ListDetail picture={'list1@2'}/>
                                    <ListDetail picture={'list2@2'}/>
                                </div>
                            <div>
                                <div className="lst-tab">
                                    <span className="lst-txt1">解忧杂货铺</span><span className="lst-txt2">小小解忧铺</span>
                                </div>
                                <ListDetail picture={'list3@2'}/>
                                <ListDetail picture={'list4@2'}/>
                                <ListDetail picture={'list5@2'}/>
                                <ListDetail picture={'list6@2'}/>
                            </div>
                            <div className="lst-tab">
                                <span className="lst-txt1">热销榜</span><span className="lst-txt2">大家好，才是真的好</span>
                            </div>
                                <ListDetail picture={'list7@2'}/>
                                <ListDetail picture={'list8@2'}/>
                                <ListDetail picture={'list9@2'}/>
                                <ListDetail picture={'list10@2'}/>
                                <ListDetail picture={'list11@2'}/>
                                <ListDetail picture={'list12@2'}/>
                            </div>
                        <div>

                        </div>

                    </div>
                    <div className="lst-pay-w">
                        <img src="" alt=""/>
                        <div>
                        <span>￥398.8</span><br/>
                        <span>满500,就可以领100优惠券了哦</span>
                        </div>
                        <div className="lst-submit ">两件起包邮</div>
                    </div>

            </div>
        )
    }
}
export default List;
