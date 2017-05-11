import React, { Component } from 'react';
import SeparateLine from '../common/separateLine'
class VideoLittle extends Component {
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
            <div style={{width:1.7*rem,height:1*rem,position:'relative'}}>
                <video playsInline="true"
                       src={require('./video2.mp4')}
                       poster={require('./'+this.props.small+'.jpg')}
                       data-duration="03:24" data-id="3795" width={1.7*rem} height={1*rem}>
                </video>
                <div style={{width:0.13*rem,height:0.2*rem,borderRadius:0.5*rem,border:'1px solid #F3F1F0',opacity:0.9,position:'absolute',left:0.365*rem,top:0.365*rem,display:'flex',alignItems:'center',paddingLeft:0.07*rem}}>
                    <img src={require('./play@2.png')} style={{width:0.1*rem,height:0.1*rem}} alt=""/>
                </div>

            </div>

        );
    }

}
class VideoMore extends Component {
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
                <div style={{marginBottom:0.2*rem,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:3.75*rem}}>
                    <div style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:3.75*rem,marginTop:0.15*rem}}>
                        <video playsInline="true"
                               src={require('./video2.mp4')}
                               poster={require('./video1@2.jpg')}
                               data-duration="03:24" data-id="3795" width={3.41*rem}>
                        </video>
                        <div style={{width:3.41*rem,color:'#3f3f45'}}>
                        <span style={{fontSize:0.15*rem,fontWeight:600}}>缓慢冷榨HPP超高压灭菌 纯天然不含任何添加剂的优质果汁</span><br/>
                        <span style={{fontSize:0.12*rem,color:'#7a7b87'}}>HeyJuice秉承一贯坚持的品质，经过缓慢的冷榨和HPP超高压灭菌，不添加防腐剂、色素和调味剂等人工添加剂</span>
                        </div>
                        <div style={{width:0.49*rem,height:0.55*rem,borderRadius:0.5*rem,border:'1px solid #F3F1F0',position:'absolute',left:1.7*rem,top:0.8*rem,display:'flex',alignItems:'center',paddingLeft:0.07*rem}}>
                            <img src={require('./play@2.png')} style={{width:0.2*rem,height:0.2*rem}} alt=""/>
                        </div>



                    </div>
                    <div style={{width:3.41*rem,height:1.6*rem,position:'relative',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                        <VideoLittle small={'video5@2'}/>
                        <span style={{fontSize:0.12*rem}}>EXNIHILO PoetryAir</span>
                        </div>
                        <div>
                        <VideoLittle small={'video6@2'}/>
                            <span style={{fontSize:0.12*rem}}>玻璃瓶界的网红 GUIDE 100</span>
                        </div>

                    </div>
                </div>
                <SeparateLine/>

                {/*<div style={{marginBottom:0.2*rem,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:3.75*rem}}>
                    <div style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:3.75*rem,marginTop:0.15*rem}}>
                        <video playsInline="true"
                               src={require('./video2.mp4')}
                               poster={require('./video4@2.jpg')}
                               data-duration="03:24" data-id="3795" width={3.41*rem}>
                        </video>
                        <div style={{width:3.41*rem,color:'#3f3f45'}}>
                            <span style={{fontWeight:600,fontSize:0.15*rem,}}>缓慢冷榨HPP超高压灭菌 纯天然不含任何添加剂的优质果汁</span><br/>
                            <span style={{fontSize:0.12*rem,color:'#7a7b87'}}>HeyJuice秉承一贯坚持的品质，经过缓慢的冷榨和HPP超高压灭菌，不添加防腐剂、色素和调味剂等人工添加剂</span>
                        </div>
                        <div style={{width:0.49*rem,height:0.55*rem,borderRadius:0.5*rem,border:'1px solid #F3F1F0',position:'absolute',left:1.7*rem,top:0.8*rem,display:'flex',alignItems:'center',paddingLeft:0.07*rem}}>
                            <img src={require('./play@2.png')} style={{width:0.2*rem,height:0.2*rem}} alt=""/>
                        </div>



                    </div>
                    <div style={{width:3.41*rem,height:1.6*rem,position:'relative',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <div>
                            <VideoLittle small={'video2@2'}/>
                            <span style={{fontSize:0.12*rem}}>EXNIHILO PoetryAir</span>
                        </div>
                        <div>
                            <VideoLittle small={'video3@2'}/>
                            <span style={{fontSize:0.12*rem}}>玻璃瓶界的网红 GUIDE 100</span>
                        </div>

                    </div>
                </div>*/}




            </div>
        );
    }

}
export default VideoMore;
