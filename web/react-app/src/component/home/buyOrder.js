import React, { Component } from 'react';
import SeparateLine from '../common/separateLine'

class BuyOrder extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,position:'relative',fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',overflow:'auto'}}>
                <div>
                    <div style={{height:1.84*rem}}>
                        <span>收货人</span><br/>
                        <span>林夕 18989860588</span>
                        <span>收货地址:浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>

                    <SeparateLine/>
                    <div style={{height:0.8*rem,width:7.5*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                        <img src={require('./shop1@2.jpg')} style={{width:0.6*rem,height:0.6*rem,borderRadius:0.5*rem}} alt=""/>
                        <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>唯美驿站 &gt;</span>
                    </div>

                    <div style={{height:2.5*rem,display:'flex',marginLeft:0.2*rem,marginBottom:-1,borderBottom:'1px solid #e3e4e8',position:'relative'}}>

                        <img src={require('./page1@2.jpg')} style={{width:1.86*rem,height:1.86*rem,margin:0.155*rem,marginLeft:0}} alt=""/>
                        <div style={{width:5*rem,marginTop:0.2*rem,marginLeft:0.1*rem}}>
                            <span style={{color:'#333'}}>Only Hearts 如诗如画如梦</span><br/>
                            <span style={{fontSize:0.24*rem,color:'#999898'}}>颜色:紫色 尺码:M</span><br/>
                            <span style={{fontSize:0.24*rem,color:'#999898'}}>卖家承诺3天内发货</span><br/>
                            <span style={{fontSize:0.25*rem,color:'#65c4aa',fontFamily:'PingFangSC-Regular'}}>￥398.8</span>
                        </div>
                        <div style={{position:'absolute',right:0.1*rem,bottom:0.1*rem}}>

                            <span style={{paddingLeft:0.1*rem,paddingRight:0.1*rem}}>×1</span>

                        </div>

                    </div>

                    <div style={{height:0.93*rem}}>商品小计:￥68元</div>
                    <SeparateLine/>
                    <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                        <img src={require('./row1@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                        <span>选择代金券</span>
                        <img src={require('./row5@2.jpg')} alt=""/>
                        <span>&gt;</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                        <img src={require('./row3@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                        <span>新人优惠</span>
                        <span>&gt;</span>
                    </div>
                    <div style={{height:1.04*rem,backgroundColor:'#f3f4f5'}}>新人优惠10:00元,本单最多可使用10:00元</div>
                    <SeparateLine/>
                    <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                        <img src={require('./row3@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                        <span>运送费用</span>
                        <img src={require('./row6@2.jpg')} alt=""/>
                        <span>&gt;</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                        <img src={require('./row4@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                        <span>优惠金额</span>
                        <span>&gt;</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>

                        <span>订单实付金额</span>
                        <span>￥68:00</span>
                    </div>
                </div>
                <div style={{height:0.93*rem,width:7.5*rem,backgroundColor:'white',position:'fixed',bottom:0}}>
                    <div style={{width:4*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,backgroundColor:'#65c4aa',color:'white',borderRadius:0.5*rem}}onClick={this.show.bind(this)} >提交订单</div>
                </div>
                <div style={{display:this.state.show}}>
                    <div style={{width:7.5*rem,height:this.state.screenHeight,position:'absolute',top:0,backgroundColor:'black',opacity:0.5}}></div>
                    <div style={{width:7.5*rem,height:8.8*rem,backgroundColor:'white',position:'absolute',bottom:0}}>
                        <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                            <span>支付方式</span>
                        </div>
                        <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                            <img src={require('./row3@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                            <span>支付宝支付</span>
                        </div>
                        <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                            <img src={require('./row4@2.jpg')} style={{width:0.25*rem,height:0.25*rem,marginLeft:0.2*rem}} alt=""/>
                            <span>微信支付</span>

                        </div>
                        <div style={{width:7.5*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45',borderBottom:'1px dotted #e7e6e5'}}>
                            <span>需要支付：￥68元</span>
                        </div>
                        <div style={{height:0.93*rem,width:7.5*rem,backgroundColor:'white',position:'fixed',bottom:0.4*rem}}>
                            <div style={{width:7*rem,height:0.93*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,backgroundColor:'#65c4aa',color:'white',borderRadius:0.15*rem}}>确认支付</div>
                        </div>
                        <span style={{fontFamily:'PingFangSC-Thin',position:'absolute',top:-0.2*rem,right:0,fontSize:0.45*rem,padding:0.2*rem}}>×</span>
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

export default BuyOrder;
