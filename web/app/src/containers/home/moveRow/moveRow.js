import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import Interact from '../interact/interact.js';
import { Link } from 'react-router-dom'
import './moveRow.css'
class MoveTwo extends Component {
    render() {
        return (
            <div>
                <Link to="/buyDetail" className="mrw-link">
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
                            <img src={require('./img/b42@2.jpg')} className="mrw-pic"  alt=""/>
                            <img src={require('./img/b44@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/b43@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/b44@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/b41@2.jpg')} className="mrw-pic" alt=""/>
                        </div>
                    </div>
                    <div className="mrw-txt-w">
                        <span className="mrw-txt1">#居家 #萌萌哒 #小清新</span><br/>
                        <span className="mrw-txt2">相关品牌：Only Heats</span>
                    </div>

                </div>
                <Interact/>
                <SeparateLine/>
                </Link>
                <Link to="/buyDetail" className="mrw-link">
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
                            <img src={require('./img/a51@2.jpg')} className="mrw-pic"  alt=""/>
                            <img src={require('./img/a52@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/a53@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/a54@2.jpg')} className="mrw-pic" alt=""/>
                            <img src={require('./img/a51@2.jpg')} className="mrw-pic" alt=""/>
                        </div>
                    </div>
                    <div className="mrw-txt-w">
                        <span className="mrw-txt1">#居家 #萌萌哒 #小清新</span><br/>
                        <span className="mrw-txt2">相关品牌：Only Heats</span>
                    </div>

                </div>
                <Interact/>
                <SeparateLine/>
                </Link>
            </div>
        );
    }

}
export default MoveTwo;


