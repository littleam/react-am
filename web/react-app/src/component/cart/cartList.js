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
            <div style={{height:1.7*rem,display:'flex',marginLeft:0.2*rem,marginBottom:-1,borderBottom:'1px solid #e3e4e8',position:'relative'}}>
                <div style={{width:0.35*rem,height:0.35*rem,border:'1px dotted #2d2d34',borderRadius:0.5*rem,marginLeft:0.04*rem,marginTop:0.5*rem,marginRight:0.3*rem}}></div>
                <img src={require('./'+this.props.picture+'.jpg')} style={{width:1.2*rem,height:1.2*rem,margin:0.155*rem,marginLeft:0}} alt=""/>
                <div style={{width:5*rem,marginTop:0.2*rem,marginLeft:0.1*rem}}>
                    <span style={{color:'#333'}}>Only Hearts 如诗如画如梦</span><br/>
                    <span style={{fontSize:0.24*rem,color:'#999898'}}>此商品限购一件</span><br/>
                    <span style={{fontSize:0.25*rem,color:'#65c4aa',fontFamily:'PingFangSC-Regular'}}>￥398.8</span>
                </div>
                <div style={{position:'absolute',right:0.1*rem,bottom:0.1*rem}}>

                    <span style={{paddingLeft:0.1*rem,paddingRight:0.1*rem}}>×1</span>

                </div>
            </div>
        )
    }
}
class CartList extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,marginTop:0.08*rem,overflow:'auto',position:'relative',fontFamily:'PingFangSC-Regular',fontSize:0.28*rem}}>
                    <div style={{display:'flex',}}>
                        <div style={{width:7.5*rem}}>
                            <div>
                                <div style={{height:0.8*rem,width:7.5*rem,backgroundColor:'#f3f4f5',borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center'}}>
                                    <div style={{width:0.35*rem,height:0.35*rem,border:'1px dotted #2d2d34',borderRadius:0.5*rem,marginLeft:0.2*rem}}></div>
                                    <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>唯美驿站 &gt;</span><span style={{fontSize:0.26*rem,position:'absolute',right:0.2*rem,top:0.2*rem}}>编辑</span>
                                </div>

                                <ListDetail picture={'list4@2'}/>
                            </div>
                            <div style={{height:0.8*rem,width:7.5*rem,backgroundColor:'#f3f4f5',marginTop:-0.01*rem,borderLeft:'2px solid #d6d3d3',display:'flex',alignItems:'center',textAlign:'center',verticalAlign:'center',position:'relative'}}>
                                <div style={{width:0.35*rem,height:0.35*rem,border:'1px dotted #2d2d34',borderRadius:0.5*rem,marginLeft:0.2*rem}}></div>
                                <span style={{fontFamily:'PingFangSC-Regular',color:'#333',paddingLeft:0.15*rem}}>Ava小小铺 &gt;</span><span style={{fontSize:0.26*rem,position:'absolute',right:0.2*rem,top:0.2*rem}}>编辑</span>
                            </div>
                            <ListDetail picture={'list10@2'}/>
                            <ListDetail picture={'list11@2'}/>
                        </div>
                    </div>
                    <div style={{width:7.5*rem,height:0.94*rem,position:'fixed',bottom:0,display:'flex',alignItems:'center'}}>

                        <div style={{width:0.35*rem,height:0.35*rem,border:'1px dotted #2d2d34',borderRadius:0.5*rem,marginLeft:0.25*rem}}></div>
                        <div style={{position:'absolute',backgroundColor:'pink'}}>
                            <span style={{paddingLeft:0.08*rem}}>全选</span>
                            <span style={{paddingLeft:0.8*rem}}>合计:</span>
                            <span style={{color:'#65c4aa',fontWeight:700,paddingLeft:0.15*rem}}>￥398.8</span>
                            <span style={{fontSize:0.20*rem,color:'#999898',paddingLeft:0.15*rem}}>不含运费</span>
                        </div>
                        <div style={{width:2.5*rem,height:0.94*rem,backgroundColor:'#7DC2AB',position:'absolute',right:0,color:'white',textAlign:'center'}}>两件起包邮</div>

                    </div>
            </div>
        )
    }
}
export default CartList;

