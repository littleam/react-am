import React, { Component } from 'react';

class Nine extends Component {
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


                <div style={{width:7.5*rem,display:'flex'}}>

                    <div style={{width:2.2*rem,borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>甜品站</span><br/>
                        <span style={{color:'#7a7b87'}}>纯手工制作</span><br/>
                        <img src={require('./map3@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>

                    <div style={{width:2.2*rem,borderRight:'1px solid #f3f4f5',paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>趣味果酿</span><br/>
                        <span style={{color:'#7a7b87'}}>趣味特别系列</span><br/>
                        <img src={require('./map5@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>
                    <div style={{width:3*rem,paddingTop:0.1*rem}}>
                        <span style={{fontSize:0.26*rem,fontWeight:600}}>香氛</span><br/>
                        <span style={{color:'#7a7b87'}}>手工香薰</span><br/>
                        <img src={require('./map6@2.jpg')} style={{width:1.855*rem,height:1.48*rem}} alt=""/>
                    </div>




                </div>


            </div>
        );
    }

}
export default Nine;