import React, { Component } from 'react';

class Map extends Component {
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
            <div style={{fontFamily:'PingFangSC-Regular',fontSize:0.24*rem,color:'#3f3f45'}}>
                <div style={{width:7.5*rem,height:2.58*rem,display:'flex',borderBottom:'1px solid #f3f4f5'}}>
                    <div style={{width:3.74*rem,height:2.38*rem,position:'relative',borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.3*rem,fontWeight:600}}>有机蔬果</span><br/>
                        <span style={{color:'#7a7b87'}}>天然鲜榨果蔬</span><br/>
                        <span style={{border:'1px solid red',borderRadius:0.1*rem,color:'red'}}>hot</span>
                        <div style={{position:'absolute',width:2.28*rem,height:2.19*rem,right:0,bottom:0}}>
                            <img src={require('./map1@2.jpg')} style={{width:2.28*rem,height:2.19*rem}} alt=""/>
                        </div>
                    </div>

                    <div style={{width:3.75*rem,height:2.38*rem,position:'relative',paddingTop:0.1*rem}}>
                        <div style={{position:'absolute',width:2.28*rem,height:2.19*rem,right:0,bottom:0}}>
                            <img src={require('./map2@2.jpg')} style={{width:2.28*rem,height:2.19*rem}} alt=""/>
                        </div>
                        <span style={{fontSize:0.3*rem,fontWeight:600}}>精品酒</span><br/>
                        <span style={{color:'#7a7b87'}}>礼盒系列酒</span><br/>
                        <span style={{border:'1px solid red',borderRadius:0.1*rem,color:'red'}}>new</span>

                    </div>
                </div>
                <div style={{width:7.5*rem,display:'flex'}}>

                    <div style={{width:1.855*rem,borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>甜品站</span><br/>
                        <span style={{color:'#7a7b87'}}>纯手工制作</span><br/>
                        <img src={require('./map3@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>
                    <div style={{width:1.855*rem,borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>贴心护理</span><br/>
                        <span style={{color:'#7a7b87'}}>夏日清凉系列</span><br/>
                        <img src={require('./map4@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>
                    <div style={{width:1.855*rem,borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>趣味果酿</span><br/>
                        <span style={{color:'#7a7b87'}}>趣味特别系列</span><br/>
                        <img src={require('./map5@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>
                    <div style={{width:1.875*rem,paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>香氛</span><br/>
                        <span style={{color:'#7a7b87'}}>手工香薰</span><br/>
                        <img src={require('./map6@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>




                </div>
            </div>
        );
    }

}
export default Map;