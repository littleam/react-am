import React, { Component } from 'react';
import Banner from '../common/banner'
class ListDetail extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let hWidth = html.getBoundingClientRect().width;

        let rem = html.style.fontSize = hWidth / 7.5;
        this.state = {
            rem: rem
        };
    }

    render() {
        let rem = this.state.rem;
        return (
            <div style={{height:2.3*rem,display:'flex',marginLeft:0.2*rem,marginBottom:-1,borderBottom:'1px solid #e3e4e8',position:'relative'}}>
                <img src={require('./'+this.props.picture+'.jpg')} style={{width:1.63*rem,height:1.63*rem,margin:0.3*rem,marginLeft:0}} alt=""/>
                <div style={{width:5*rem,marginTop:0.3*rem}}>
                    <span style={{fontFamily:'PingFangSC-Regular',fontSize:0.27*rem,fontWeight:600}}>夏天，调了杯蓝莓酒在家等你</span><br/><span style={{fontSize:0.24*rem,color:'#a9a9a9'}}>有时蓝莓酒专属酒鬼们的夏日冰凉特饮69元起！</span><br/>

                </div>
            </div>
        )
    }
}
class Find extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let hWidth = html.getBoundingClientRect().width;
        let screenHeight = html.getBoundingClientRect().height;
        let rem = html.style.fontSize = hWidth / 7.5;
        this.state = {
            rem: rem,
            screenHeight:screenHeight
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div style={{color:'#3f3f45'}}>
                <div style={{display:'flex',width:7.5*rem,flexDirection:'column',position:'relative',fontFamily:'PingFangSC-Regular'}}>
                    <ListDetail picture={'find1@2'}/>
                    <ListDetail picture={'find2@2'}/>
                    <ListDetail picture={'find3@2'}/>
                </div>
                <Banner title={'明星产品'}/>
                <div style={{display:'flex',width:7.5*rem,flexDirection:'column',position:'relative',fontFamily:'PingFangSC-Regular'}}>
                    <ListDetail picture={'find5@2'}/>
                    <ListDetail picture={'find4@2'}/>
                    <ListDetail picture={'find6@2'}/>
                </div>
            </div>
        )
    }
}
export default Find;

