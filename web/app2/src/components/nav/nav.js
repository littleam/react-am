import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
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
            <div style={{width:7.5*rem,height:0.9*rem,backgroundColor:'#f3f4f5',position:'fixed',bottom:0,display:'flex',fontFamily:'PingFangSC-Regular',textDecoration:'none'}}>
                <Link to="/">
                    <div style={{width:1.5*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#65c4aa',fontSize:0.24*rem}}>
                        <img src={require('./img/nav6@2.png')} style={{width:0.56*rem,height:0.57*rem}} alt=""/>
                        <span style={{}}>主页</span>
                    </div>
                </Link>
                <Link to="/category">
                    <div style={{width:1.5*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#65c4aa',fontSize:0.24*rem}}>
                        <img src={require('./img/nav2@2.png')} style={{width:0.56*rem,height:0.57*rem}} alt=""/>
                        分类
                    </div>
                </Link>
                <Link to="/communication">
                    <div style={{width:1.5*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#65c4aa',fontSize:0.24*rem}}>
                        <img src={require('./img/nav4@2.png')} style={{width:0.56*rem,height:0.57*rem}} alt=""/>
                        分享
                    </div>
                </Link>
                <Link to="/cart">
                    <div style={{width:1.5*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#65c4aa',fontSize:0.24*rem}}>
                        <img src={require('./img/nav3@2.png')} style={{width:0.56*rem,height:0.57*rem}} alt=""/>
                        购物车
                    </div>
                </Link>
                <Link to="/mine">
                    <div style={{width:1.5*rem,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#65c4aa',fontSize:0.24*rem}}>
                        <img src={require('./img/nav5@2.png')} style={{width:0.56*rem,height:0.57*rem}} alt=""/>
                        我的
                    </div>
                </Link>
            </div>
        );
    }

}
export default Nav;