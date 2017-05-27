import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import InteractThree from '../../home/interact/interactThree.js'
import './shareNice.css'
class ShareNice extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected:1,
        };
        this.changeOne = this.changeOne.bind(this);
        this.changeTwo = this.changeTwo.bind(this)
    }
    render(){
        return (
        <div>
            <div className="select-wrap">
                <div className="select-w" onClick={this.changeOne}>
                    <span className={this.state.selected === 1 ? 'select-act' : ''}>精选专辑</span><br/>
                </div>
                <div className="select-w" onClick={this.changeTwo}>
                    <span className={this.state.selected === 2 ? 'select-act' : ''}>视频分享</span><br/>
                </div>
                <div className={this.state.selected === 1 ? 'select-line select-l' : 'select-line select-r' }> </div>
            </div>
            {
                this.state.selected === 1 ?
                    <div>
                        <div className="sne-wrap">
                            <div className="sne-s">
                                <img src={require('./img/user@2.jpg')} className="sne-pic-s" alt=""/>
                                <div >
                                    <span className="sne-name">KISSA</span><br/>
                                    <span className="sne-info">妹子鉴定师，上海，70C</span>
                                </div>
                            </div>
                            <img src={require('./img/chart1@2.png')} className="sne-pic" alt=""/>
                            <div className="sne-txt-w">
                                <span className="sne-title">国货之光，国产口红我就买这些！</span><br/>
                                <span className="sne-size">今天呢，要揭秘我们大天朝的口红榜单。以往大家提到国货呢，就觉得low，
                                    这样的思想是不对的！其实有不少国货做的还是....</span>
                            </div>
                        </div>
                        <InteractThree/>
                        <SeparateLine/>
                    </div>


                    :
                    <div>
                        <div className="sne-wrap">
                            <div className="sne-s">
                                <img src={require('./img/user@2.jpg')} className="sne-pic-s" alt=""/>
                                <div >
                                    <span className="sne-name">KISSA</span><br/>
                                    <span className="sne-info">妹子鉴定师，上海，70C</span>
                                </div>
                            </div>
                            <img src={require('./img/chart14@2.png')} className="sne-pic" alt=""/>
                            <div className="sne-txt-w">
                                <span className="sne-title">国货之光，国产口红我就买这些！</span><br/>
                                <span className="sne-size">今天呢，要揭秘我们大天朝的口红榜单。以往大家提到国货呢，就觉得low，
                                    这样的思想是不对的！其实有不少国货做的还是....</span>
                            </div>
                        </div>
                        <InteractThree/>
                        <SeparateLine/>
                    </div>

            }

        </div>

    )}
    changeOne(){
        this.setState({
            selected:1
        });
        console.log(this.state.selected)
    }
    changeTwo(){
        this.setState({
            selected:2
        });
        console.log(this.state.selected)
    }
}


export default ShareNice;