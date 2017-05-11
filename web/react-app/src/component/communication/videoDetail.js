import React, { Component } from 'react';
import Search from '../category/search'
import SeparateLine from '../common/separateLine'
class VideoDetail extends Component {
    constructor(props){
        super(props);
        let html =document.documentElement;
        let hWidth = html.getBoundingClientRect().width;

        let rem =  html.style.fontSize = hWidth/7.5;
        this.state = {
            rem:rem
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div style={{fontFamily:'PingFangSC-Regular',color:'#787a7d',width:7.5*rem,overflow:'auto'}}>
                <Search/>
                <div style={{fontSize:0.28*rem,borderBottom:'1px solid #e3e4e8'}}>
                    <div style={{width:7.5*rem,height:0.96*rem,display:'flex',flexDirection:'row',backgroundColor:'#f3f4f5'}}>
                        <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',position:'relative'}}>
                            <span style={{fontSize:0.28*rem,color:'#65c4aa'}}>精选专辑</span><br/>
                            <div style={{width:3.75*rem,height:0.04*rem,backgroundColor:'#65c4aa',position:'absolute',bottom:0,left:0}}></div>
                        </div>
                        <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                            <span style={{fontSize:0.28*rem}}>视频分享</span><br/>
                        </div>
                    </div>
                </div>


                <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:7.4*rem}}>
                    <div style={{width:6.9*rem,display:'flex',paddingTop:0.26*rem,paddingBottom:0.24*rem}}>
                        <img src={require('./user@2.jpg')} style={{width:0.78*rem,height:0.79*rem,paddingRight:0.15*rem}} alt=""/>
                        <div style={{fontSize:0}}>
                            <span style={{fontSize:0.22*rem,color:'#617f57'}}>KISSA</span><br/>
                            <span style={{fontSize:0.22*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <img src={require('./chart1@2.png')} style={{width:6.9*rem,height:3.8*rem}} alt=""/>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem,width:6.9*rem}}>
                        <span style={{fontSize:0.24*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>
                <SeparateLine/>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:7.4*rem}}>
                    <div style={{width:6.9*rem,display:'flex',paddingTop:0.26*rem,paddingBottom:0.24*rem}}>
                        <img src={require('./user@2.jpg')} style={{width:0.78*rem,height:0.79*rem,paddingRight:0.15*rem}} alt=""/>
                        <div style={{fontSize:0}}>
                            <span style={{fontSize:0.22*rem,color:'#617f57'}}>KISSA</span><br/>
                            <span style={{fontSize:0.22*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <img src={require('./chart2@2.png')} style={{width:6.9*rem,height:3.8*rem}} alt=""/>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem,width:6.9*rem}}>
                        <span style={{fontSize:0.24*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>
                <SeparateLine/>

                <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:7.4*rem}}>
                    <div style={{width:6.9*rem,display:'flex',paddingTop:0.26*rem,paddingBottom:0.24*rem}}>
                        <img src={require('./user@2.jpg')} style={{width:0.78*rem,height:0.79*rem,paddingRight:0.15*rem}} alt=""/>
                        <div style={{fontSize:0}}>
                            <span style={{fontSize:0.22*rem,color:'#617f57'}}>KISSA</span><br/>
                            <span style={{fontSize:0.22*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <img src={require('./chart3@2.png')} style={{width:6.9*rem,height:3.8*rem}} alt=""/>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem,width:6.9*rem}}>
                        <span style={{fontSize:0.24*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>
                <SeparateLine/>
            </div>
        );
    }

}
export default VideoDetail;