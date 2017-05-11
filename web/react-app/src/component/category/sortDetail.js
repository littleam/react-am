import React, { Component } from 'react';
import Search from './search'
import SeparateLine from '../common/separateLine'


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
            <div style={{height:2.5*rem,display:'flex',marginLeft:0.2*rem,marginBottom:-1,borderBottom:'1px solid #e3e4e8',position:'relative'}}>

                <div style={{width:4.4*rem,marginTop:0.3*rem}}>
                    <span style={{fontFamily:'PingFangSC-Regular',fontSize:0.27*rem,paddingRight:0.3*rem}}>{this.props.title}</span><br/>
                    <span style={{fontSize:0.27*rem,color:'#65c4aa',fontFamily:'PingFangSC-Regular',fontWeight:700,display:'inline-block',paddingTop:0.2*rem}}>￥398.8</span><br/>
                    <span style={{borderRadius:0.05*rem,border:'1px dotted #3f3f45',fontSize:0.2*rem,paddingLeft:0.05*rem,paddingRight:0.05*rem}}>七天内可退换</span>
                </div>
                <div style={{width:2.8*rem,height:2.5*rem,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <img src={require('./'+this.props.picture+'.jpg')} style={{width:(this.props.width)*rem,height:this.props.height*rem}} alt=""/>
                </div>

            </div>
        )
    }
}
class SortDetail extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,overflow:'auto',position:'relative',fontFamily:'PingFangSC-Regular',color:'#3f3f45'}}>
                <Search/>
                <div style={{fontSize:0.25*rem}}>
                    <div style={{fontSize:0.28*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <div style={{width:7.5*rem,height:0.96*rem,display:'flex',flexDirection:'row',backgroundColor:'#f3f4f5'}}>
                            <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',position:'relative'}}>
                                <span style={{fontSize:0.28*rem}}>曲奇饼干</span>
                                <img src={require('./select1@2.png')} style={{width:0.19*rem,height:0.18*rem}} alt=""/><br/>
                            </div>
                            <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                                <span style={{fontSize:0.28*rem}}>智能排序</span>
                                <img src={require('./select1@2.png')} style={{width:0.19*rem,height:0.18*rem}} alt=""/><br/>
                            </div>
                        </div>
                    </div>
                    <div style={{fontSize:0.28*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <div style={{width:7.5*rem,height:0.96*rem,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                            <div style={{width:1.5*rem,height:0.52*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',border:'1px dotted #3f3f45',borderRadius:0.08*rem}}>
                                <span style={{fontSize:0.28*rem}}>可包邮</span>
                            </div>
                            <div style={{width:1.5*rem,height:0.52*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',border:'1px dotted #3f3f45',borderRadius:0.08*rem}}>
                                <span style={{fontSize:0.28*rem}}>口感</span>
                                <img src={require('./select1@2.png')} style={{width:0.19*rem,height:0.18*rem}} alt=""/><br/>
                            </div>
                            <div style={{width:1.5*rem,height:0.52*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',border:'1px dotted #3f3f45',borderRadius:0.08*rem}}>
                                <span style={{fontSize:0.28*rem}}>品类</span>
                                <img src={require('./select1@2.png')} style={{width:0.19*rem,height:0.18*rem}} alt=""/><br/>
                            </div>

                        </div>
                    </div>
                    <div style={{width:7.5*rem}}>
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie6@2'} width={'2.2'} height={'1.64'}/>
                        <SeparateLine/>
                        <ListDetail title={'AKOKO 多口味曲奇饼干礼盒装 三拼口味' } picture={'cookie7@2'} width={'1.44'} height={'1.37'}/>
                        <SeparateLine/>
                        <ListDetail title={'[限量特价] Mio.s Lab 喵叔的实验室黄标盒曲奇' } picture={'cookie8@2'} width={'1.94'} height={'0.99'}/>
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' } picture={'cookie9@2'} width={'2.21'} height={'1.65'}/>
                        <SeparateLine/>
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie37@2'} width={'2.2'} height={'1.64'}/>
                        <SeparateLine/>
                        <ListDetail title={'AKOKO 多口味曲奇饼干礼盒装 三拼口味' } picture={'cookie2@2'} width={'1.67'} height={'1.27'}/>
                        <SeparateLine/>
                        <ListDetail title={'[限量特价] Mio.s Lab 喵叔的实验室黄标盒曲奇' } picture={'cookie3@2'} width={'1.48'} height={'1.36'}/>
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' }  picture={'cookie33@2'} width={'2.2'} height={'1.65'}/>
                        <SeparateLine/>
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie5@2'} width={'1.66'} height={'0.93'}/>
                        <SeparateLine/>
                        <ListDetail title={'AKOKO 多口味曲奇饼干礼盒装 三拼口味' } picture={'cookie10@2'} width={'1.29'} height={'1.04'}/>
                        <SeparateLine/>
                        <ListDetail title={'[限量特价] Mio.s Lab 喵叔的实验室黄标盒曲奇' } picture={'cookie11@2'} width={'1.69'} height={'0.72'}/>
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' } picture={'cookie12@2'} width={'2.20'} height={'1.64'}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default SortDetail;
