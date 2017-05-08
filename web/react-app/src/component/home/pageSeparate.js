import React, { Component } from 'react';


class PageSeparate extends Component {
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
            <div>
                <div style={{width:7.5*rem,height:1.2*rem,display:'flex',justifyContent:'center',alignItems:'center',borderTop:'1px solid #eaebec'}}>

                        <img src={require('./pageLeft@2.jpg')} style={{width:0.41*rem,height:0.28*rem,marginRight:0.22*rem}} alt=""/>
                        <span style={{fontSize:0.34*rem,fontFamily:'PingFangSC-Thin',color:'#2d2d34'}}>{this.props.title}</span><br/>
                        <img src={require('./pageRight@2.jpg')} style={{width:0.41*rem,height:0.28*rem,marginLeft:0.22*rem}} alt=""/>

                </div>

            </div>
        );
    }

}
export default PageSeparate;

