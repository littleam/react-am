import React, { Component } from 'react';
class MoveOne extends Component {
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
                <div id="div1" style={{width:3.75*rem,height:1.955*rem,position:'relative',overflow:'hidden'}}>
                    <ul style={{margin:0,padding:0,width:22.5*rem,position:'absolute',top:0,left:0}}>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top_visual@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top_5@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top-10@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top_visual@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top_5@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                        <li style={{margin:0,padding:0,listStyle:'none'}}>
                            <img
                                src={require('./top-10@2.jpg')} alt="" style={{margin:0,padding:0,width:3.75*rem,height:1.995*rem,float:'left'}}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    componentDidMount(){
        let rem = this.state.rem;
        let oDiv = document.getElementById('div1');
        let oUl = oDiv.getElementsByTagName('ul')[0];
        let speed = -3.75*rem;
        function move(){
            if(oUl.offsetLeft<=-oUl.offsetWidth/2){oUl.style.left = '0'}
            //if(oUl.offsetLeft>=0){oUl.style.left = '-375px'}
            oUl.style.left = oUl.offsetLeft+speed+'px';
        }
        let timer = setInterval(move,2000);
        oDiv.touchStart = function(){
            clearInterval(timer);
        };
        oDiv.touchEnd = function(){
            timer = setInterval(move,2000)
        }
        // document.getElementsByTagName('span')[0].onPress = function(){
        //     speed = -5;
        // }
        // document.getElementsByTagName('span')[1].onPress = function(){
        //     speed = 5;
        // }
    }
}
export default MoveOne;
//0 1  -375 2 -750 3 -1125 1 -1500 2  -375 2
