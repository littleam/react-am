import React, { Component } from 'react';


class BuyDetail extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,position:'relative',display:'flex',justifyContent:'center',alignItems:'center',fontFamily:'PingFangSC-Regular',fontSize:0.26*rem,color:'#3f3f45'}}>
                <div style={{width:6.45*rem,height:10.66*rem,border:'2px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:6.30*rem,height:10.47*rem,border:'1px solid black',position:'relative'}}>
                        <div style={{width:5.02*rem,height:3*rem,textAlign:'center',margin:'0 auto',marginTop:0.58*rem,borderBottom:'1px dotted #e7e6e5'}}>
                            <img src={require('./page1@2.jpg')} style={{width:1.58*rem,height:1.58*rem}} alt=""/><br/>
                            <span>MarLab 仲夏夜花园 柔嫩保湿护手霜 35g 蕴含天然澳洲坚果</span><br/>
                            <span style={{fontSize:0.3*rem,color:"#65c4aa"}}>￥68</span><br/>
                        </div>
                        <div style={{width:5.02*rem,height:1.5*rem,borderBottom:'1px dotted #e7e6e5',display:'flex',alignItems:'center',margin:'0 auto'}}>
                            <span style={{fontSize:0.26*rem}}>颜色: </span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>紫色</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>粉色</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>灰色</span><br/>
                        </div>
                        <div style={{width:5.02*rem,height:1.5*rem,borderBottom:'1px dotted #e7e6e5',textAlign:'center',margin:'0 auto',fontSize:0.24*rem,display:'flex',alignItems:'center'}}>
                            <span>尺码:</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>S</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>M</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>L</span>
                            <span style={{fontSize:0.24*rem,backgroundColor:'#f3f4f5',borderRadius:0.05*rem,padding:0.06*rem,paddingLeft:0.16*rem,paddingRight:0.16*rem,marginLeft:0.3*rem}}>XL</span>
                        </div>
                        <div style={{width:5.2*rem,height:1.9*rem,color:'white',margin:'0 auto'}}>
                            <div style={{width:5.2*rem,display:'flex',justifyContent:'space-between',marginBottom:0.61*rem,marginTop:1.6*rem}}>
                                <div style={{backgroundColor:'#65c4aa',width:0.47*rem,height:0.47*rem,borderRadius:0.5*rem,textAlign:'center'}}>-</div>
                                <div style={{color:'#3f3f45',paddingLeft:0.2*rem,paddingRight:0.2*rem}}>1</div>
                                <div style={{backgroundColor:'#65c4aa',width:0.47*rem,height:0.47*rem,borderRadius:0.5*rem,textAlign:'center'}}>+</div>
                            </div>
                            <div style={{backgroundColor:'#65c4aa',width:5.2*rem,height:0.82*rem,borderRadius:0.5*rem,fontSize:0.3*rem,display:'flex',justifyContent:'center',alignItems:'center'}}>加入购物车</div>
                        </div>
                        <span style={{fontFamily:'PingFangSC-Thin',position:'absolute',top:-0.2*rem,right:0,fontSize:0.45*rem,padding:0.2*rem}}>×</span>

                    </div>
                </div>
            </div>
        )
    }
}
export default BuyDetail;
