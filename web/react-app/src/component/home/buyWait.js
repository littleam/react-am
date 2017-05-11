import React, { Component } from 'react';
import SeparateLine from '../common/separateLine'
import Detail from './detail'
import PageSeparate from './pageSeparate'
class BuyWait extends Component {
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
                    <div style={{height:2.5*rem}}>
                        <span>收货人</span><br/>
                        <span>林夕 18989860588</span>
                        <span>收货地址:浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>

                    <div style={{height:0.8*rem,width:7.5*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                        <img src={require('./shop1@2.jpg')} style={{width:0.6*rem,height:0.6*rem,borderRadius:0.5*rem}} alt=""/>
                        <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>唯美驿站 &gt;</span>
                    </div>

                    <div style={{height:2.5*rem,display:'flex',marginLeft:0.2*rem,marginBottom:-1,borderBottom:'1px solid #e3e4e8',position:'relative'}}>

                        <img src={require('./page1@2.jpg')} style={{width:1.86*rem,height:1.86*rem,margin:0.2*rem,marginLeft:0}} alt=""/>
                        <div style={{width:5*rem,marginTop:0.25*rem,marginLeft:0.1*rem}}>
                            <span style={{color:'#333'}}>Only Hearts 如诗如画如梦</span><br/>
                            <span style={{fontSize:0.24*rem,color:'#999898'}}>颜色:紫色 尺码:M</span><br/>
                            <span style={{fontSize:0.24*rem,color:'#999898'}}>卖家承诺3天内发货</span><br/>
                            <span style={{fontSize:0.25*rem,color:'#65c4aa',fontFamily:'PingFangSC-Regular'}}>￥398.8</span>
                        </div>
                        <div style={{position:'absolute',right:0.1*rem,bottom:0.1*rem}}>

                            <span style={{paddingLeft:0.1*rem,paddingRight:0.1*rem}}>×1</span>

                        </div>

                    </div>

                    <div style={{height:0.93*rem}}>
                        <span>运费</span>
                        <span>商品小计:￥68元</span>
                    </div>

                    <SeparateLine/>
                    <div style={{height:0.93*rem}}>
                        <span>订单编号:17170509100224</span><br/>
                        <span>创建时间:2017年 5月 13日</span>
                    </div>
                    <div style={{borderTop:'1px solid #e7e6e5',height:1.5*rem}}>
                        <span>请在2天23小时内完成付款</span><br/>
                        <span>逾期订单将自动取消</span>
                        <span>2天23小时59分35秒</span>
                    </div>
                    <SeparateLine/>




                </div>
                <div style={{height:0.93*rem,width:7.5*rem,backgroundColor:'#f3f4f5',position:'fixed',bottom:0,display:'flex'}}>

                    <div style={{width:2*rem,height:0.6*rem,fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,backgroundColor:'#65c4aa',color:'white',borderRadius:0.5*rem}}>付款</div>
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
