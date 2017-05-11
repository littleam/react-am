import React, { Component } from 'react';

class Time extends Component {
    constructor(props){
        super(props);
        let html =document.documentElement;
        let hWidth = html.getBoundingClientRect().width;

        let rem =  html.style.fontSize = hWidth/3.75;
        this.state = {
            rem:rem
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div>
                <div style={{fontFamily:'PingFangSC-Regular',height:2.9*rem,width:3.75*rem,borderTopWidth:1,borderBottomWidth:1,borderColor:'#e3e4e8'}}>
                    <div style={{marginTop:0.08*rem,height:0.45*rem,width:3.75*rem,display:'flex',flexDirection:'row'}}>
                        <div style={{height:0.565*rem,width:1.875*rem,textAlign:'center',fontSize:0}}>
                            <span style={{fontSize:0.15*rem,color:'#617f57'}}>今日折扣</span><br/>
                            <span><i style={{fontSize:0.13*rem,color:'#617f57',fontFamily:'Times New Roman'}}>SALES</i></span>
                        </div>
                        <div style={{height:0.565*rem,width:1.875*rem,textAlign:'center'}}>
                            <span style={{fontSize:0.15*rem,color:'#7a7b87'}}>新品入荷</span><br/>
                            <i style={{fontSize:0.13*rem,color:'#7a7b87',fontFamily:'Times New Roman'}}>NEW</i>
                        </div>
                    </div>
                    <div style={{width:3.75*rem,height:0.02*rem}}>
                        <div style={{width:3.35*rem,height:0.02*rem,backgroundColor:'#f5f5f9',fontSize:0}}>
                            <div style={{height:0.02*rem,backgroundColor:'#617f57',width:1.57*rem}}></div>
                        </div>
                    </div>

                    <div style={{borderBottomWidth:0.001*rem,borderBottomStyle:'solid',borderBottomColor:'#eaebec',height:1.855*rem,width:3.75*rem,display:'flex',flexDirection:'row'}}>
                        <div style={{width:1.72*rem,height:133*rem,marginLeft:0.21*rem,marginTop:0.28*rem,marginRight:0.21*rem}}>
                            <span style={{fontSize:0.15*rem,fontWeight:700}}>距离折扣结束还有</span><br/>
                            <span style={{fontSize:0.13*rem,color:'red'}}><strong>02：25：37</strong></span><br/>
                            <span style={{fontSize:0.12*rem}}>犀牛小姐 莓果色中高强度美背运动内衣</span><br/>
                            <span style={{fontSize:0.15*rem,color:'red'}}><strong>￥158</strong></span><br/>
                            <span style={{fontSize:0.12*rem}}>￥328</span>
                        </div>
                        <div style={{borderWidth:1,borderStyle:'solid',borderColor:'#eaebec',width:1.38*rem,height:1.36*rem,marginTop:0.24*rem,marginBottom:0.24*rem,textAlign:'center',paddingTop:0.02*rem}}><img src={require('./time@2.jpg')} style={{width:1.34*rem,height:1.34*rem}} alt=""/></div>

                    </div>
                    <div style={{width:3.75*rem,height:0.48*rem,fontSize:0.13*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#3f3f45'}}><div>查看折扣详情 &gt;</div></div>

                </div>
            </div>
        );
    }

}
export default Time;