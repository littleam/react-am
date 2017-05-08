import React, { Component } from 'react';
class Communication extends Component {
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
                <div style={{width:3.75*rem,height:0.41*rem,color:'#787a7d',borderTop:'1px solid #eaebec',fontSize:0.1*rem}}>
                    <span style={{paddingRight:0.1*rem,paddingLeft:0.1*rem}}><span></span>4601</span>
                    <span><span></span>18340</span>
                </div>
            </div>
        );
    }

}
export default Communication;

