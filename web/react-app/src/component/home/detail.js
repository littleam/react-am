import React, { Component } from 'react';
class Detail extends Component {
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
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <div style={{width:3.25*rem,height:5.72*rem,fontFamily:'PingFangSC-Regular'}}>
                    <img src={require('./detail1@2.jpg')} style={{width:3.26*rem,height:3.26*rem,marginTop:0.41*rem,marginLeft:0.41*rem}} alt=""/>
                    <div style={{width:3.25*rem,height:2.05*rem,marginLeft:0.41*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <span style={{fontSize:0.26*rem,display:'inline-block',width:'3.26*rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>现代工艺制作的天然美味</span><br/><span style={{fontSize:0.22*rem,color:'#999898'}}>ICA 45%混合水果见过燕麦片750g</span><br/>
                        <span style={{fontSize:0.24*rem}}>￥58</span><span style={{textDecoration:'line-through',fontSize:0.20*rem,color:'#999898'}}>￥68</span>
                    </div>

                </div>
                <div style={{width:3.25*rem,height:5.72*rem,fontFamily:'PingFangSC-Regular',marginLeft:0.2*rem}}>
                    <img src={require('./detail2@2.jpg')} style={{width:3.26*rem,height:3.26*rem,marginTop:0.41*rem,marginLeft:0.41*rem}} alt=""/>
                    <div style={{width:3.25*rem,height:2.05*rem,marginLeft:0.41*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <span style={{fontSize:0.26*rem,width:'3.26*rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>用内联艺术设计出真实的永生花</span><br/><span style={{fontSize:0.22*rem,color:'#999898'}}>英国 Gelei's Story 永生花玻璃瓶</span><br/>
                        <span style={{fontSize:0.24*rem}}>￥58</span><span style={{textDecoration:'line-through',fontSize:0.20*rem,color:'#999898'}}>￥68</span>
                    </div>

                </div>

                <div style={{width:3.25*rem,height:5.72*rem,fontFamily:'PingFangSC-Regular'}}>
                    <img src={require('./detail3@2.jpg')} style={{width:3.26*rem,height:3.26*rem,marginTop:0.41*rem,marginLeft:0.41*rem}} alt=""/>
                    <div style={{width:3.25*rem,height:2.05*rem,marginLeft:0.41*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <span style={{fontSize:0.26*rem,display:'inline-block',width:'3.26*rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>现代工艺制作的天然美味</span><br/><span style={{fontSize:0.22*rem,color:'#999898'}}>ICA 45%混合水果见过燕麦片750g</span><br/>
                        <span style={{fontSize:0.24*rem}}>￥58</span><span style={{textDecoration:'line-through',fontSize:0.20*rem,color:'#999898'}}>￥68</span>
                    </div>

                </div>

                <div style={{width:3.25*rem,height:5.72*rem,fontFamily:'PingFangSC-Regular',marginLeft:0.2*rem}}>
                    <img src={require('./detail4@2.jpg')} style={{width:3.26*rem,height:3.26*rem,marginTop:0.41*rem,marginLeft:0.41*rem}} alt=""/>
                    <div style={{width:3.25*rem,height:2.05*rem,marginLeft:0.41*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <span style={{fontSize:0.26*rem,width:'3.26*rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>用内联艺术设计出真实的永生花</span><br/><span style={{fontSize:0.22*rem,color:'#999898'}}>英国 Gelei's Story 永生花玻璃瓶</span><br/>
                        <span style={{fontSize:0.24*rem}}>￥58</span><span style={{textDecoration:'line-through',fontSize:0.20*rem,color:'#999898'}}>￥68</span>
                    </div>

                </div>
                <div style={{width:3.25*rem,height:5.72*rem,fontFamily:'PingFangSC-Regular'}}>
                    <img src={require('./detail5@2.jpg')} style={{width:3.26*rem,height:3.26*rem,marginTop:0.41*rem,marginLeft:0.41*rem}} alt=""/>
                    <div style={{width:3.25*rem,height:2.05*rem,marginLeft:0.41*rem,borderBottom:'1px solid #e3e4e8'}}>
                        <span style={{fontSize:0.26*rem,display:'inline-block',width:'3.26*rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>现代工艺制作的天然美味</span><br/><span style={{fontSize:0.22*rem,color:'#999898'}}>ICA 45%混合水果见过燕麦片750g</span><br/>
                        <span style={{fontSize:0.24*rem}}>￥58</span><span style={{textDecoration:'line-through',fontSize:0.20*rem,color:'#999898'}}>￥68</span>
                    </div>

                </div>





            </div>
        );
    }

}
export default Detail;

