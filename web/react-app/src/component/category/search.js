import React, { Component } from 'react';
class Search extends Component {
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
                <div style={{display:'flex',flexDirection:'row',height:0.45*rem,width:3.75*rem,backgroundColor:'#f6f7f7',position:'relative'}}>

                    <input style={{position:'relative',width:3.2*rem,height:0.27*rem,marginLeft:0.11*rem,marginTop:0.11*rem,border:'none',borderRadius:1.5*rem,fontFamily:'PingFangSC-Thin',fontSize:0.12*rem,textAlign:'center'}} type="text" placeholder='输入商品关坚持或用户名'/>
                    <img style={{position:'absolute',width:0.18*rem,height:0.18*rem,left:0.88*rem,top:0.17*rem}} src={require('./search@2.jpg')} alt=""/>
                    <a style={{height:0.45*rem,width:0.25*rem,position:'absolute',top:0.14*rem,right:0.13*rem,textDecoration:'none'}} href=""><img
                        src={require('./cart@2.jpg')} alt="" style={{width:0.3*rem,height:0.26*rem}}/></a>
                </div>
            </div>
        );
    }

}
export default Search;
