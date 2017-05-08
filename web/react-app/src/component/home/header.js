import React, { Component } from 'react';
class Header extends Component {
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
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',height:0.45*rem,width:3.75*rem,backgroundColor:'#f6f7f7',position:'relative'}}>
                    <span style={{fontColor:'#2d2d34',fontSize:0.17*rem}}>商店</span>
                    <a style={{position:'absolute',top:0.1*rem,right:0.4*rem,textDecoration:'none'}} href=""><img
                        src={require('./search@2.jpg')} alt="" style={{width:0.3*rem,height:0.26*rem}}/></a>
                    <a style={{height:0.45*rem,width:0.25*rem,position:'absolute',top:0.1*rem,right:0.18*rem,textDecoration:'none'}} href=""><img
                        src={require('./cart@2.jpg')} alt="" style={{width:0.3*rem,height:0.26*rem}}/></a>
                </div>
            </div>
        );
    }

}
export default Header;

