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
            <div style={{fontFamily:'PingFangSC-Thin',color:'#787a7d',fontSize:0.13*rem,width:3.75*rem,height:2.95*rem,display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{height:1.36*rem}}>
                    <img src={require('./rating@2.jpg')} style={{width:3.41*rem,height:1.25*rem,marginTop:0.11*rem}} alt=""/>
                </div>
               <div style={{width:3.41*rem}}>
                   <div style={{width:3.41*rem,height:1*rem,position:'relative',lineHeight:0.019*rem}}>
                       <span>3/24-3/25,氧气波辣兔旗舰店全场8折起，但重要的是，你又多了一个方式买氧气的东西</span>
                       <div style={{position:'absolute',left:0,bottom:0.1*rem}}>
                           <span>品牌: </span><span style={{fontSize:0.14*rem,color:'#617f57'}}>氧气</span>
                       </div>
                   </div>
               </div>
                <Communication/>
            </div>
        );
    }

}
export default Rating;
