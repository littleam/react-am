import React, { Component } from 'react';
import SeparateLine from '../common/separateLine'
class MoveTwo extends Component {
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
                <div style={{fontFamily:'PingFangSC-Regular',color:'#787a7d',width:7.5*rem,height:6*rem}}>
                    <div style={{display:'flex',paddingTop:0.26*rem,paddingBottom:0.26*rem}}>
                        <img src={require('./six@2.jpg')} style={{width:0.78*rem,height:0.78*rem}} alt=""/>
                        <div >
                        <span style={{fontSize:0.24*rem,color:'#617f57',}}>KISSA</span><br/>
                        <span style={{fontSize:0.24*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <div style={{width:7.5*rem,height:2.2*rem,overflow:'hidden',position:'relative'}}>
                        <div style={{display:'flex',width:20.07*rem,left:0.08*rem,position:'absolute'}}>
                            <img src={require('./recommend1@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend2@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend3@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend4@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend5@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend6@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                        </div>
                    </div>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem}}>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>
                <SeparateLine/>
                {/*
                <div style={{fontFamily:'PingFangSC-Regular',color:'#787a7d',width:7.5*rem,height:6*rem}}>
                    <div style={{display:'flex',paddingTop:0.26*rem,paddingBottom:0.26*rem}}>
                        <img src={require('./six@2.jpg')} style={{width:0.78*rem,height:0.78*rem}} alt=""/>
                        <div >
                            <span style={{fontSize:0.24*rem,color:'#617f57',}}>KISSA</span><br/>
                            <span style={{fontSize:0.24*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <div style={{width:7.5*rem,height:2.2*rem,overflow:'hidden',position:'relative'}}>
                        <div style={{display:'flex',width:20.07*rem,left:0.08*rem,position:'absolute'}}>
                            <img src={require('./recommend7@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend8@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend9@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend10@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend11@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend12@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                        </div>
                    </div>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem}}>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>
                <SeparateLine/>
                <div style={{fontFamily:'PingFangSC-Regular',color:'#787a7d',width:7.5*rem,height:6*rem}}>
                    <div style={{display:'flex',paddingTop:0.26*rem,paddingBottom:0.26*rem}}>
                        <img src={require('./six@2.jpg')} style={{width:0.78*rem,height:0.78*rem}} alt=""/>
                        <div >
                            <span style={{fontSize:0.24*rem,color:'#617f57',}}>KISSA</span><br/>
                            <span style={{fontSize:0.24*rem}}>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <div style={{width:7.5*rem,height:2.2*rem,overflow:'hidden',position:'relative'}}>
                        <div style={{display:'flex',width:20.07*rem,left:0.08*rem,position:'absolute'}}>
                            <img src={require('./recommend13@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend14@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend15@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend16@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend17@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                            <img src={require('./recommend18@2.jpg')} style={{width:2.847*rem,height:2.119*rem,marginRight:0.06*rem,borderRadius:0.07*rem}} alt=""/>
                        </div>
                    </div>
                    <div style={{paddingTop:0.2*rem,paddingBottom:0.2*rem}}>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem,color:'#617f57',}}>#居家 #萌萌哒 #小清新</span><br/>
                        <span style={{fontSize:0.24*rem,marginLeft:0.26*rem}}>相关品牌：Only Heats</span>
                    </div>
                    <div style={{width:7.5*rem,height:0.82*rem,borderTop:'1px solid #eaebec',fontSize:0.2*rem}}>
                        <span style={{paddingRight:0.2*rem,paddingLeft:0.2*rem}}><span></span>4601</span>
                        <span><span></span>18340</span>
                    </div>
                </div>*/}


            </div>
        );
    }

}
export default MoveTwo;

