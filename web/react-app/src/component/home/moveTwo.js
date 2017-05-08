import React, { Component } from 'react';
class MoveTwo extends Component {
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
            <div style={{fontFamily:'PingFangSC-Thin',color:'#787a7d',width:3.75*rem,height:3.18*rem}}>
                <div style={{display:'flex',paddingTop:0.13*rem,paddingBottom:0.13*rem}}>
                    <img src={require('./six@2.jpg')} style={{width:0.39*rem,height:0.39*rem}} alt=""/>
                    <div >
                    <span style={{fontSize:0.11*rem,color:'#617f57',}}>KISSA</span><br/>
                    <span style={{fontSize:0.11*rem}}>妹子鉴定师，上海，70C</span>
                    </div>
                </div>
                <div style={{width:3.75*rem,height:1.49*rem,overflow:'hidden',position:'relative'}}>
                <div style={{display:'flex',width:7.77*rem,height:1.49*rem,left:0.04*rem,position:'absolute'}}>
                    <img src={require('./one@2.jpg')} style={{width:1.49*rem,height:1.49*rem,marginRight:0.03*rem}} alt=""/>
                    <img src={require('./two@2.jpg')} style={{width:1.49*rem,height:1.49*rem,marginRight:0.03*rem}} alt=""/>
                    <img src={require('./three@2.jpg')} style={{width:1.49*rem,height:1.49*rem,marginRight:0.03*rem}} alt=""/>
                    <img src={require('./four@2.jpg')} style={{width:1.49*rem,height:1.49*rem,marginRight:0.03*rem}} alt=""/>
                    <img src={require('./five@2.jpg')} style={{width:1.49*rem,height:1.49*rem,marginRight:0.03*rem}} alt=""/>
                </div>
                </div>
                <div style={{paddingTop:0.1*rem,paddingBottom:0.1*rem}}>
                    <span style={{fontSize:0.12*rem,marginLeft:0.13*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                    <span style={{fontSize:0.12*rem,marginLeft:0.13*rem}}>相关品牌：Only Heats</span>
                </div>
                <div style={{width:3.75*rem,height:0.41*rem,borderTop:'1px solid #eaebec',fontSize:0.1*rem}}>
                    <span style={{paddingRight:0.1*rem,paddingLeft:0.1*rem}}><span></span>4601</span>
                    <span><span></span>18340</span>
                </div>
            </div>
        );
    }

}
export default MoveTwo;

