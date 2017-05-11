import React, { Component } from 'react';
import PageSeparate from './pageSeparate';
import SeparateLine from '../common/separateLine';
import Detail from './detail'
class DetailPage extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let hWidth = html.getBoundingClientRect().width;
        let screenHeight = html.getBoundingClientRect().height;
        let rem = html.style.fontSize = hWidth / 7.5;
        this.state = {
            rem: rem,
            screenHeight:screenHeight
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div style={{color:'#3f3f45',fontFamily:'PingFangSC-Regular',width:7.5*rem,height:this.state.screenHeight}}>

                <div style={{paddingBottom:0.94*rem}}>

                    <div style={{display:'none'}}>
                        <span>商品介绍</span>
                        <span>商品评价</span>
                        <span>图文详情</span>
                        <span>更多推荐</span>
                    </div>
                    {/*商品介绍*/}
                    <img src={require('./page1@2.jpg')} style={{width:7.5*rem,height:7.5*rem}} alt=""/>
                    <div style={{paddingLeft:0.1*rem}}>
                    <div style={{height:2.65*rem,paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.32*rem}}>MarLab 仲夏夜花园 柔嫩保湿护手霜 35g 蕴含天然澳洲坚果</span><br/>
                        <div style={{paddingTop:0.1*rem}}>
                            <span style={{color:'#65c4aa',fontSize:0.2*rem}}>￥</span><span style={{fontSize:0.36*rem,color:'#65c4aa'}}>68</span>
                            <span style={{fontSize:0.24*rem,color:'#65c4aa',border:'1px solid #9de4d1',borderRadius:0.05*rem,marginLeft:0.1*rem}}>节假日促销价</span><br/>
                            <span style={{fontSize:0.24*rem,color:'##a9a9a9'}}>价格：￥99</span><br/>
                        </div>
                        <div style={{display:'flex',width:7.3*rem,justifyContent:'space-between'}}>
                            <span style={{fontSize:0.24*rem,color:'##a9a9a9'}}>月销108笔</span>
                            <span style={{fontSize:0.24*rem,color:'##a9a9a9'}}><img src={require('./share@2.png')} style={{width:0.35*rem,height:0.35*rem,borderRadius:0.1*rem}} alt=""/>分享</span>
                        </div>
                    </div>


                    </div>
                    <div style={{width:7.5*rem,height:0.96*rem,position:'fixed',bottom:0,display:'flex',alignItems:'center',backgroundColor:'#f7f7f7'}}>
                        <div style={{width:1.09*rem,height:0.94*rem,borderRight:'1px solid #e7e6e5',position:'absolute',left:0,textAlign:'center',fontSize:0.24*rem}}>
                            <img src={require('./chart@2.png')} style={{width:0.36*rem,height:0.36*rem}} alt=""/><br/><span>客服</span></div>
                        <div style={{width:1.09*rem,height:0.94*rem,borderRight:'1px solid #e7e6e5',position:'absolute',left:1.1*rem,textAlign:'center',fontSize:0.24*rem}}>
                            <img src={require('./shop1@2.png')} style={{width:0.36*rem,height:0.36*rem}} alt=""/><br/><span>商店</span></div>
                        <div style={{width:1.1*rem,height:0.94*rem,backgroundColor:'##f3f4f5',position:'absolute',left:2.2*rem,textAlign:'center',fontSize:0.24*rem}}>
                            <img src={require('./hart@2.png')} style={{width:0.36*rem,height:0.36*rem}} alt=""/><br/><span>收藏</span></div>
                        <div style={{width:2.1*rem,height:0.94*rem,backgroundColor:'#9de4d1',position:'absolute',right:2.1*rem,color:'white',textAlign:'center'}}>加入购物车</div>
                        <div style={{width:2.1*rem,height:0.94*rem,backgroundColor:'#65c4aa',position:'absolute',right:0,color:'white',textAlign:'center'}}>立即购买</div>
                    </div>
                    <SeparateLine/>
                    <div style={{fontSize:0.24*rem,height:0.76*rem,borderBottom:'1px dotted #e7e6e5',paddingLeft:0.1*rem}}><span><img src="" alt=""/>正品保证</span><span span style={{padding:0.2*rem}}><img src="" alt=""/>七天退换</span><span>&gt;</span></div>
                    <div style={{fontSize:0.24*rem,height:0.76*rem,borderBottom:'1px dotted #e7e6e5',paddingLeft:0.1*rem}}><span><img src="" alt=""/>领取优惠券</span><span>&gt;</span></div>

                    {/*商品评价*/}
                    <SeparateLine/>
                    <PageSeparate title={'商品评价'}/>
                    <div style={{paddingLeft:0.1*rem,borderTop:'1px dotted #eaebec'}}>

                        <span style={{fontSize:0.27*rem}}>商品评价(88)</span><br/>
                        <img src={require('./user@2.jpg')} style={{width:0.49*rem,height:0.49*rem}} alt=""/><span style={{fontSize:0.24*rem}}>x**6</span><br/>
                        <span style={{fontSize:0.24*rem}}>护手霜很润，很好吸收.....</span><br/>
                        <div style={{width:7.3*rem,textAlign:'center',marginBottom:0.49*rem,marginTop:0.49*rem}}><span style={{fontSize:0.27*rem,color:'#65c4aa',border:'1px solid #9de4d1',borderRadius:0.3*rem,padding:0.06*rem,paddingLeft:0.18*rem,paddingRight:0.18*rem}}>查看全部评价</span></div>

                    </div>
                    {/*店铺信息*/}
                    <SeparateLine/>
                    <div style={{width:7.5*rem,height:4.04*rem}}>
                        <div style={{marginTop:0.26*rem}}>
                            <img src={require('./shop1@2.jpg')} style={{width:0.95*rem,height:0.95*rem}} alt=""/>
                            <span style={{fontSize:0.3*rem}}>小猪麦都旗舰店</span>
                            <div style={{display:'flex',textAlign:'center',marginTop:0.21*rem}}>
                                <div style={{flex:1,borderLeft:'1px dotted #e7e6e5'}}>
                                    <span style={{fontSize:0.28*rem}}>312</span><br/>
                                    <span style={{fontSize:0.23*rem}}>全部宝贝</span>
                                </div>
                                <div style={{flex:1,height:1.16*rem,borderLeft:'1px dotted #e7e6e5'}}>
                                    <span style={{fontSize:0.28*rem}}>16.9万</span><br/>
                                    <span style={{fontSize:0.25*rem}}>关注人数</span>
                                </div>
                                <div style={{fontSize:0.25*rem,flex:1,borderLeft:'1px dotted #e7e6e5'}}>
                                    <span>宝贝描述 4.9</span><span style={{paddingRight:0.05*rem,paddingLeft:0.05*rem,borderRadius:0.03*rem,backgroundColor:'#65c4aa',fontSize:0.2*rem,color:'white'}}>高</span><br/>
                                    <span>卖家服务 4.9</span><span style={{paddingRight:0.05*rem,paddingLeft:0.05*rem,borderRadius:0.03*rem,backgroundColor:'#65c4aa',fontSize:0.2*rem,color:'white'}}>高</span><br/>
                                    <span>物流服务 4.8</span><span style={{paddingRight:0.05*rem,paddingLeft:0.05*rem,borderRadius:0.03*rem,backgroundColor:'#65c4aa',fontSize:0.2*rem,color:'white'}}>高</span>
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div style={{width:3.75*rem,textAlign:'center',marginBottom:0.45*rem,marginTop:0.49*rem}}><span style={{fontSize:0.27*rem,color:'#65c4aa',border:'1px solid #9de4d1',borderRadius:0.3*rem,padding:0.06*rem,paddingLeft:0.18*rem,paddingRight:0.18*rem}}>查看分类</span></div>
                                <div style={{width:3.75*rem,textAlign:'center',marginBottom:0.48*rem,marginTop:0.49*rem}}><span style={{fontSize:0.27*rem,color:'#65c4aa',border:'1px solid #9de4d1',borderRadius:0.3*rem,padding:0.06*rem,paddingLeft:0.18*rem,paddingRight:0.18*rem}}>进店逛逛</span></div>
                            </div>
                        </div>
                    </div>
                    {/*图文详情*/}
                    <SeparateLine/>
                    <PageSeparate title={'图文详情'}/>
                    <div style={{width:7.5*rem,display:'flex',flexDirection:'column',alignItems:'center',fontSize:0.26*rem}}>
                        <span style={{paddingLeft:0.25*rem,paddingRight:0.2*rem}}>
                            水润轻盈质地不黏腻，蕴含天然澳洲坚果油及花果精华，涂抹双手后，馥郁迷人的神秘花园之香，温柔而持久。精心调配的多重保湿因子及天然果乳脂活性配方，可以柔嫩双手并淡化细纹。
                        </span>
                        <img src={require('./page2@2.jpg')} style={{width:6.99*rem,height:6.96*rem,paddingTop:0.43*rem}} alt=""/>
                        <div style={{width:6.82*rem,height:6.92*rem,border:'1px dotted #e7e6e5',textAlign:'center',marginBottom:0.39*rem}}>
                        <img src={require('./page3@2.jpg')} style={{width:5.72*rem,height:3.59*rem,paddingTop:1.69*rem}} alt=""/>
                        </div>
                        <span style={{paddingLeft:0.25*rem,paddingRight:0.2*rem}}>
                            2017年5月7日起，购买任意MarLab商品，即可获赠MarLab洗衣液试用装一套。套装内含贴身衣物专用洗衣液10ml、全能洗衣液15ml。每笔订单仅限一份，数量有限，赠完即止。
                        </span>
                        <div style={{width:6.82*rem,height:6.92*rem,border:'1px dotted #e7e6e5',textAlign:'center',marginBottom:0.39*rem,marginTop:0.39*rem}}>
                        <img src={require('./page5@2.jpg')} style={{width:5.38*rem,height:4.32*rem,marginTop:1.2*rem}} alt=""/>
                        </div>
                        <img src={require('./page1@2.jpg')} style={{width:6.90*rem,height:6.90*rem}} alt=""/>
                        <img src={require('./page4@2.jpg')} style={{width:6.90*rem,height:6.90*rem,paddingTop:0.4*rem,paddingBottom:0.4*rem}} alt=""/>

                    </div>
                    {/*更多推荐*/}
                    <SeparateLine/>
                    <PageSeparate title={'更多推荐'}/>
                    <Detail/>


                </div>


            </div>
        );
    }

}
export default DetailPage;
