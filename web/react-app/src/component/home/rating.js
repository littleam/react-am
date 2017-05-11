import React, { Component } from 'react';
import Communication from './communication.js'
class Rating extends Component {
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

            <div style={{fontFamily:'PingFangSC-Regular',color:'#3f3f45',fontSize:0.13*rem,width:3.75*rem,height:2.95*rem,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{height:1.36*rem}}>
                    <img src={require('./rating1@2.jpg')} style={{width:3.41*rem,height:1.25*rem,marginTop:0.11*rem}} alt=""/>
                </div>
               <div style={{width:3.41*rem}}>
                   <div style={{width:3.41*rem,height:1*rem,position:'relative',lineHeight:0.019*rem}}>
                       <span style={{fontSize:0.15*rem,fontWeight:600}}>英国 Not Just Pajama 真丝眼罩</span><br/>
                       <span>在这里，我们把全世界的新奇潮物带到你的生活，推选最优选的美物给你，希望你喜欢</span>

                   </div>
               </div>
                <Communication/>

            </div>
        );
    }

}
export default Rating;
