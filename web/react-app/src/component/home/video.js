import React, { Component } from 'react';
import Communication from './communication.js'
class Video extends Component {
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
                <div style={{marginTop:0.08*rem,backgroundColor:'white',position:'relative',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                    <video playsInline="true"
                           src={require('./video2.mp4')}
                           poster={require('./video2@2.jpg')}
                           data-duration="03:24" data-id="3795" width={3.75*rem}>
                    </video>
                    <div style={{width:0.4*rem,height:0.4*rem,borderRadius:0.5*rem,border:'1px solid white',backgroundColor:'white',opacity:0.6,position:'absolute',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>&gt;</div>
                    <Communication/>
                </div>
            </div>
        );
    }

}
export default Video;
/*$('video').play()*/


