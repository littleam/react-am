import React, { Component } from 'react';
import Search from  './search'
class Sort extends Component {
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
            <div style={{width:7.5*rem,height:this.state.screenHeight,overflow:'auto',position:'relative',color:'#3f3f45'}}>
                <Search/>
                <div style={{fontFamily:'PingFangSC-Regular',fontSize:0.27*rem}}>
                    <div style={{display:'flex'}}>
                        <div style={{width:2*rem,position:'relative',backgroundColor:'#f3f4f5'}}>
                            <div style={{position:'absolute',width:0.05*rem,height:1.08*rem,backgroundColor:'#65c4aa'}}></div>

                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8',backgroundColor:'white'}}>
                                <span>热门</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>良品好物</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>优选美酒</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>好味美食</span><br/>
                            </div>
                            <div style={{height:1.08*rem,display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center',borderBottom:'1px solid #e3e4e8'}}>
                                <span>好味美食</span><br/>
                            </div>
                        </div>
                        <div>

                        <div style={{width:5.5*rem,position:'relative',fontSize:0.25*rem}}>
                            <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门专题</div>
                            <div style={{display:'flex',}}>
                                <img src={require('./sort1@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                <img src={require('./sort2@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                            </div>
                            <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门分类</div>
                            <div>
                                <img src={require('./sort3@2.jpg')} style={{width:1.1*rem,marginLeft:0.45*rem}} alt=""/>
                                <img src={require('./sort4@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <img src={require('./sort5@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem,marginBottom:0.42*rem}}>
                                    <div style={{flex:1,textAlign:'center'}}>日用百货</div>
                                    <div style={{flex:1,textAlign:'center'}}>数码家居</div>
                                    <div style={{flex:1,textAlign:'center'}}>美容洗护</div>
                                </div>
                                <img src={require('./sort6@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                <img src={require('./sort7@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <img src={require('./sort8@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                    <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                    <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                    <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                </div>
                                <div style={{width:4.6*rem,borderBottom:'1px solid #e6e6e6',marginTop:0.39*rem,marginLeft:0.45*rem}}></div>
                            </div>
                        </div>

                        <div style={{width:5.5*rem,position:'relative',fontSize:0.25*rem}}>
                            <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门专题</div>
                            <div style={{display:'flex',}}>
                                <img src={require('./sort9@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                <img src={require('./sort10@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                            </div>
                            <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>良品好物</div>
                            <div>
                                <img src={require('./sort3@2.jpg')} style={{width:1.1*rem,marginLeft:0.45*rem}} alt=""/>
                                <img src={require('./sort4@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <img src={require('./sort5@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem,marginBottom:0.42*rem}}>
                                    <div style={{flex:1,textAlign:'center'}}>日用百货</div>
                                    <div style={{flex:1,textAlign:'center'}}>数码家居</div>
                                    <div style={{flex:1,textAlign:'center'}}>美容洗护</div>
                                </div>
                                <img src={require('./sort11@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                <img src={require('./sort12@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <img src={require('./sort13@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                    <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                    <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                    <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                </div>
                                <img src={require('./sort14@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                <img src={require('./sort15@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>

                                <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                    <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                    <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                    <div style={{flex:1,textAlign:'center'}}></div>
                                </div>
                                <div style={{width:4.6*rem,borderBottom:'1px solid #e6e6e6',marginTop:0.39*rem,marginLeft:0.45*rem}}></div>
                            </div>
                        </div>

                            <div style={{width:5.5*rem,position:'relative',fontSize:0.25*rem}}>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门专题</div>
                                <div style={{display:'flex',}}>
                                    <img src={require('./sort40@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                    <img src={require('./sort41@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                </div>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>优选美酒</div>
                                <div>
                                    <img src={require('./sort16@2.jpg')} style={{width:1.1*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort17@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort18@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem,marginBottom:0.42*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>日用百货</div>
                                        <div style={{flex:1,textAlign:'center'}}>数码家居</div>
                                        <div style={{flex:1,textAlign:'center'}}>美容洗护</div>
                                    </div>
                                    <img src={require('./sort19@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort20@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort21@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                    </div>
                                    <div style={{width:4.6*rem,borderBottom:'1px solid #e6e6e6',marginTop:0.39*rem,marginLeft:0.45*rem}}></div>
                                </div>
                            </div>

                            <div style={{width:5.5*rem,position:'relative',fontSize:0.25*rem}}>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门专题</div>
                                <div style={{display:'flex',}}>
                                    <img src={require('./sort42@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                    <img src={require('./sort43@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                </div>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>好味美食</div>
                                <div>
                                    <img src={require('./sort22@2.jpg')} style={{width:1.1*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort23@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort24@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem,marginBottom:0.42*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>日用百货</div>
                                        <div style={{flex:1,textAlign:'center'}}>数码家居</div>
                                        <div style={{flex:1,textAlign:'center'}}>美容洗护</div>
                                    </div>
                                    <img src={require('./sort25@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort26@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort27@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                    </div>
                                    <img src={require('./sort28@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort29@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort30@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                    </div>
                                    <img src={require('./sort31@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort32@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>

                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}></div>
                                    </div>
                                    <div style={{width:4.6*rem,borderBottom:'1px solid #e6e6e6',marginTop:0.39*rem,marginLeft:0.45*rem}}></div>
                                </div>
                            </div>

                            <div style={{width:5.5*rem,position:'relative',fontSize:0.25*rem}}>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>热门专题</div>
                                <div style={{display:'flex',}}>
                                    <img src={require('./sort33@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                    <img src={require('./sort34@2.jpg')} style={{width:2.3*rem,height:1.52*rem,marginLeft:0.3*rem}} alt=""/>
                                </div>
                                <div style={{paddingTop:0.58*rem,paddingBottom:0.58*rem,paddingLeft:0.3*rem}}>咖啡和茶</div>
                                <div>
                                    <img src={require('./sort35@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort36@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <img src={require('./sort37@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>
                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}>花和香薰</div>
                                    </div>
                                    <img src={require('./sort38@2.jpg')} style={{width:1.1*rem,height:1.11*rem,marginLeft:0.45*rem}} alt=""/>
                                    <img src={require('./sort39@2.jpg')} style={{width:1.1*rem,marginLeft:0.65*rem}} alt=""/>

                                    <div style={{width:5.5*rem,display:'flex',fontSize:0.24*rem,marginTop:0.2*rem}}>
                                        <div style={{flex:1,textAlign:'center'}}>国酿</div>
                                        <div style={{flex:1,textAlign:'center'}}>曲奇饼干</div>
                                        <div style={{flex:1,textAlign:'center'}}></div>
                                    </div>
                                    <div style={{width:4.6*rem,borderBottom:'1px solid #e6e6e6',marginTop:0.39*rem,marginLeft:0.45*rem,paddingBottom:0.93*rem}}></div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Sort;