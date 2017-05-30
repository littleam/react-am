import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './moveDetail.css';
class MoveDetail extends Component {
    constructor(props){
        super(props);
        let html =document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight,
            showShare:false
        };
        this.showShare = this.showShare.bind(this);
        this.hiddenShare = this.hiddenShare.bind(this);
    }
    render() {
        return (
            <div className="mdl-wrap">
                {
                    this.state.showShare ?
                        <div>
                            <div className="share-show" style={{height:this.state.screenHeight}}> </div>
                            <div className="share-w">
                                <div className="share-pos">
                                <img src={require('./img/share1@2.jpg')} className="share-pic" alt=""/><br/>
                                <span>微信</span>
                                </div>
                                <div className="share-pos">
                                <img src={require('./img/share2@2.jpg')} className="share-pic" alt=""/><br/>
                                <span>朋友圈</span>
                                </div>
                                <div className="share-pos">
                                <img src={require('./img/share3@2.jpg')} className="share-pic" alt=""/><br/>
                                <span>微博</span>
                                </div>
                                <div className="share-pos">
                                    <img src={require('./img/share4@2.jpg')} className="share-pic" alt=""/><br/>
                                    <span>短信</span>
                                </div>
                            </div>
                            <div className="share-cancel" onClick={this.hiddenShare}>取消</div>
                        </div>
                        : ""
                }

                <div className="hdt-t-w">
                    <span className="hdt-title">{this.props.title}</span>
                    <Link to="/" className="hdt-back">
                        <img src={require('./img/back@2.jpg')} alt="" className="hdt-back-pic"/>
                    </Link>
                    <span>今日推荐精品</span>
                    <div className="hdt-hart">
                        <img src={require('./img/hart@2.jpg')} alt="" className="hdt-hart-pic"/>
                    </div>
                    <div className="hdt-share" onClick={this.showShare}>
                        <img src={require('./img/share@2.jpg')} alt="" className="hdt-share-pic"/>
                    </div>
                </div>

               <div className="mdl-wrap">
                   <img src={require('./img/move4@2.jpg')} className="mdl-pic" alt=""/>
                   <div className="mdl-txt">
                       5月23日至5月25日，海内外知名品牌限时折扣，低至5折！还有199减30、299减60优惠抢不停！<br/><br/>
                       每天10：00、15：00、19：00，更有400减100优惠券限量秒杀！还等什么？这么多大牌，赶紧扫起来吧~<br/><br/>
                   </div>
                   <div className="mdl-more">
                           - 更多优惠 -
                   <img src={require('./img/100@2.jpg')} alt="" className="mdl-more-pic"/>
                   </div>
               </div>
            </div>
        );
    }
    showShare(){
        this.setState({
            showShare:true
        })
    }
    hiddenShare(){
        this.setState({
            showShare:false
        })
    }

}
export default MoveDetail;

