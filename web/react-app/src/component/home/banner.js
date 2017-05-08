import React, { Component } from 'react';


class Banner extends Component {
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
                <div style={{width:7.5*rem,height:1.24*rem,borderBottom:'1px solid #eaebec',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                    <span style={{fontSize:0.29*rem,fontFamily:'PingFangSC-Thin'}}>{this.props.title}</span><br/>
                    <span ><em style={{fontSize:0.1*rem,fontFamily:'Times New Roman'}}>CHANNEL</em></span>
                    </div>
                </div>

            </div>
        );
    }

}
export default Banner;

