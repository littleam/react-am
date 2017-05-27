import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import Interact from '../interact/interact.js';
import './moveRow.css'
class MoveTwo extends Component {
    render() {
        return (
            <div>
                <div className="mrw-wrap">
                    <div className="mrw-s">
                        <img src={require('./img/six@2.jpg')} className="mrw-pic-s" alt=""/>
                        <div >
                            <span className="mrw-name">KISSA</span><br/>
                            <span>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <div className="mrw-pic-w1">
                        <div className="mrw-pic-w2">
                            <img src={require('./img/recommend1@2.jpg')} className="mrw-pic"  alt=""/>
                            <img src={require('./img/recommend2@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend6@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend4@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend6@2.jpg')} className="mrw-pic" alt=""/>
                        </div>
                    </div>
                    <div className="mrw-txt-w">
                        <span className="mrw-txt1">#居家 #萌萌哒 #小清新</span><br/>
                        <span className="mrw-txt2">相关品牌：Only Heats</span>
                    </div>

                </div>
                <Interact/>
                <SeparateLine/>
                <div className="mrw-wrap">
                    <div className="mrw-s">
                        <img src={require('./img/six@2.jpg')} className="mrw-pic-s" alt=""/>
                        <div >
                            <span className="mrw-name">KISSA</span><br/>
                            <span>妹子鉴定师，上海，70C</span>
                        </div>
                    </div>
                    <div className="mrw-pic-w1">
                        <div className="mrw-pic-w2">
                            <img src={require('./img/recommend10@2.jpg')} className="mrw-pic"  alt=""/>
                            <img src={require('./img/recommend7@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend10@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend8@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/recommend11@2.jpg')} className="mrw-pic" alt=""/>
                        </div>
                    </div>
                    <div className="mrw-txt-w">
                        <span className="mrw-txt1">#居家 #萌萌哒 #小清新</span><br/>
                        <span className="mrw-txt2">相关品牌：Only Heats</span>
                    </div>

                </div>
                <Interact/>
                <SeparateLine/>
            </div>
        );
    }

}
export default MoveTwo;


