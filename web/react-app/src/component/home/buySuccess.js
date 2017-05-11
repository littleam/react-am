import React, { Component } from 'react';
import Detail from './detail'
import PageSeparate from './pageSeparate'
import SeparateLine from '../common/separateLine'
class BuySuccess extends Component {
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
                    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:0.9*rem,width:7.5*rem,backgroundColor:'#f6f7f7',position:'relative',borderBottom:'1px dotted #dcdde3'}}>
                        <span style={{fontColor:'#2d2d34',fontSize:0.34*rem}}>支付成功</span>
                        <a style={{height:0.9*rem,width:0.5*rem,position:'absolute',top:0.2*rem,right:0.3*rem,textDecoration:'none'}} href=""><img
                            src={require('./chart@2.png')} alt="" style={{width:0.47*rem,height:0.47*rem}}/></a>
                    </div>
                </div>
                <div>
                    <img src={require('./buy@2.jpg')} style={{width:7.5*rem,height:1.87*rem}} alt=""/>
                    <div style={{height:1.5*rem,borderBottom:'1px dotted #dcdde3'}}>
                        <span>收货人：</span>
                        <span>林夕 18989860588</span><br/>
                        <span>收货地址：浙江省杭州市江干区彭埠镇德信东望8幢2单元1302</span>
                    </div>

                    <div style={{height:2.18*rem,width:7.5*rem,display:'flex',justifyContent:'space-around',alignItems:'center',fontFamily:'PingFangSC-Regular',fontSize:0.3*rem,color:'#65c4aa'}}>
                        <div style={{width:2.5*rem,height:0.6*rem,border:'1px dotted #65c4aa',borderRadius:0.5*rem}}>查看订单</div>
                        <div style={{width:2.5*rem,height:0.6*rem,border:'1px dotted #65c4aa',borderRadius:0.5*rem}}>返回首页</div>
                    </div>
                    <SeparateLine/>





                <PageSeparate title={'猜你喜欢'}/>
                <Detail/>

                </div>
            </div>
        )
    }

}

export default BuySuccess;
