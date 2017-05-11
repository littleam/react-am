import React, { Component } from 'react';


class Separate extends Component {
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
                <div style={{width:7.5*rem,height:1.2*rem,backgroundColor:'#f3f4f5',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center'}}>
                        <span style={{fontSize:0.26*rem,fontFamily:'PingFangSC-Regular',color:'#2d2d34'}}>{this.props.title}</span><br/>
                    </div>
                </div>

            </div>
        );
    }

}
export default Separate;

