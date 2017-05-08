import React, { Component } from 'react';

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
            <div style={{width:0.93*rem,height:0.93*rem,position:'relative'}}>
                <video playsInline="true"
                       src={require('./video2.mp4')}
                       poster={require('./'+this.props.small+'.jpg')}
                       data-duration="03:24" data-id="3795" width={0.93*rem} height={0.93*rem}>
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
                <div style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <video playsInline="true"
                           src={require('./video2.mp4')}
                           poster={require('./video2@2.jpg')}
                           data-duration="03:24" data-id="3795" width={3.75*rem}>
                    </video>
                    <div style={{width:0.25*rem,height:0.4*rem,borderRadius:0.5*rem,border:'1px solid #F3F1F0',opacity:0.9,position:'absolute',display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:0.15*rem}}>
                        <img src={require('./play@2.png')} style={{width:0.2*rem,height:0.2*rem}} alt=""/>
                    </div>

                </div>
                <div style={{width:3.75*rem,height:0.95*rem,backgroundColor:'white',position:'relative',display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:-0.12*rem}}>
                    <VideoLittle small={'small1@2'}/>
                    <VideoLittle small={'small2@2'}/>
                    <VideoLittle small={'small3@2'}/>
                    <VideoLittle small={'small4@2'}/>
                </div>



            </div>
        );
    }

}
export default VideoMore;
