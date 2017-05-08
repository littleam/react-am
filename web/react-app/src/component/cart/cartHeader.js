import React, { Component } from 'react';
class CartHeader extends Component {
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
                <div style={{fontFamily:'PingFangSC-Regular',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:0.9*rem,width:7.5*rem,backgroundColor:'#f3f4f5',position:'relative'}}>
                    <span style={{color:'#2d2d34',fontSize:0.36*rem}}>{this.props.title}</span>
                    <a style={{height:1.8*rem,width:1*rem,position:'absolute',top:0.25*rem,right:0.5*rem,textDecoration:'none',color:'#65c4aa',fontSize:0.32*rem}} href=""><span>编辑</span></a>
                    <a style={{position:'absolute',top:0.25*rem,right:0.25*rem,textDecoration:'none'}} href=""><img
                        src={require('./chart@2.jpg')} alt="" style={{width:0.4*rem,height:0.4*rem}}/></a>
                    <div style={{width:0.15*rem,height:0.15*rem,borderRadius:0.5*rem,backgroundColor:'#65c4aa',position:'absolute',right:0.2*rem,top:0.2*rem}}></div>
                </div>
            </div>
        );
    }

}
export default CartHeader;
