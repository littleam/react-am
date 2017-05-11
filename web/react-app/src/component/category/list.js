import React, { Component } from 'react';




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
                <img src={require('./'+this.props.picture+'.jpg')} style={{width:1.4*rem,height:1.4*rem,margin:0.25*rem,marginLeft:0,borderRadius:0.1*rem}} alt=""/>
                <div style={{width:3.5*rem,marginTop:0.3*rem}}>
                    <span style={{fontFamily:'PingFangSC-Regular',fontSize:0.27*rem}}>Only Hearts 如诗如画如梦</span><br/><span style={{fontSize:0.22*rem,color:'#a9a9a9'}}>夕染彩色手机壳</span><br/>
                    <span style={{fontSize:0.20*rem,color:'#a9a9a9'}}>365人已付款</span><br/>
                    <span style={{fontSize:0.27*rem,color:'#65c4aa',fontFamily:'PingFangSC-Regular'}}>￥398.8</span><span style={{fontSize:0.20*rem,textDecoration:'line-Through',color:'#a9a9a9'}}>￥598</span>
                </div>
                <div style={{position:'absolute',right:0.1*rem,bottom:0.1*rem}}>
                    <div style={{width:0.5*rem,height:0.25*rem,border:'1px solid #f3f4f5',borderRadius:0.5*rem,textAlign:'center',color:'#65c4aa',paddingBottom:0.25*rem,display:'inline-block',fontWeight:600,fontSize:0.3*rem}}>-</div>
                    <span style={{paddingLeft:0.2*rem,paddingRight:0.2*rem}}>1</span>
                    <div style={{width:0.5*rem,height:0.25*rem,border:'1px solid #f3f4f5',borderRadius:0.5*rem,textAlign:'center',color:'#65c4aa',paddingBottom:0.25*rem,display:'inline-block',fontWeight:600,fontSize:0.3*rem}}>+</div>
                </div>
            </div>
        )
    }
}
class List extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,overflow:'auto',position:'relative'}}>
                <div style={{fontFamily:'PingFangSC-Regular',fontSize:0.25*rem}}>
                    <div style={{fontSize:0.28*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <div style={{width:7.5*rem,height:0.96*rem,display:'flex',flexDirection:'row',backgroundColor:'#f3f4f5'}}>
                            <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',position:'relative'}}>
                                <span style={{fontSize:0.28*rem,color:'#65c4aa'}}>分类</span><br/>
                                <div style={{width:0.55*rem,height:0.04*rem,backgroundColor:'#65c4aa',position:'absolute',bottom:0.25*rem,left:1.6*rem}}></div>
                            </div>
                            <div style={{width:3.75*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                                <span style={{fontSize:0.28*rem}}>评分(4.8)</span><br/>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',}}>
                        <div style={{width:1.6*rem,position:'relative',backgroundColor:'#f3f4f5'}}>
                            <div style={{position:'absolute',width:0.05*rem,height:1.08*rem,backgroundColor:'#65c4aa'}}></div>
                            <div style={{backgroundColor:'white',height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <img src={require('./hot@2.jpg')} style={{width:0.25*rem,height:0.25*rem}} alt=""/><span style={{}}>热销榜</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>解忧杂货铺</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>美体小铺</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>星美妆报告</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>创意生活</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <img src={require('./hello@2.jpg')} style={{width:0.25*rem,height:0.25*rem}} alt=""/><span style={{}}>萌萌哒</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>文艺范</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <img src={require('./sale@2.jpg')} style={{width:0.25*rem,height:0.25*rem}} alt=""/><span style={{}}>折扣中</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>送闺蜜</span><br/>
                            </div>
                        </div>
                        <div style={{width:5.9*rem}}>
                            <div>
                            <div style={{height:0.52*rem,width:5.9*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                                <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>热销榜</span><span style={{color:'#a9a9a9',fontSize:0.24*rem,paddingLeft:0.15*rem}}>大家好，才是真的好</span>
                            </div>
                                <ListDetail picture={'list1@2'}/>
                                <ListDetail picture={'list2@2'}/>
                            </div>
                            <div>
                                <div style={{height:0.52*rem,width:5.9*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                                    <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>解忧杂货铺</span><span style={{color:'#a9a9a9',fontSize:0.24*rem,paddingLeft:0.15*rem}}>小小解忧铺</span>
                                </div>
                                <ListDetail picture={'list3@2'}/>
                                <ListDetail picture={'list4@2'}/>
                                <ListDetail picture={'list5@2'}/>
                                <ListDetail picture={'list6@2'}/>
                            </div>
                            <div style={{height:0.52*rem,width:5.9*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                                <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>热销榜</span><span style={{color:'#a9a9a9',fontSize:0.24*rem,paddingLeft:0.15*rem}}>大家好，才是真的好</span>
                            </div>
                                <ListDetail picture={'list7@2'}/>
                                <ListDetail picture={'list8@2'}/>
                                <ListDetail picture={'list9@2'}/>
                                <ListDetail picture={'list10@2'}/>
                                <ListDetail picture={'list11@2'}/>
                                <ListDetail picture={'list12@2'}/>
                            </div>
                        <div>

                        </div>

                    </div>
                    <div style={{width:7.5*rem,height:0.96*rem,backgroundColor:'#f3f4f5',position:'fixed',bottom:0}}>
                        <img src="" alt=""/>
                        <div style={{position:'absolute'}}>
                        <span>￥398.8</span><br/>
                        <span style={{fontSize:0.1*rem}}>满500,就可以领100优惠券了哦</span>
                        </div>
                        <div style={{width:2.5*rem,height:1.5*rem,backgroundColor:'#7DC2AB',position:'absolute',right:0,color:'white',textAlign:'center'}}>两件起包邮</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default List;
