import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
class Nav extends Component {


    render() {
        return (
            <div className="nav-wrap">
                <Link to="/" className="nav-link">
                    <div className="nave-w">
                        <img src={require('./img/nav6@2.png')} className="nav-pic" alt=""/>
                        <span className="nav-txt nav-active">主页</span>
                    </div>
                </Link>
                <Link to="/category" className="nav-link">
                    <div className="nave-w">
                        <img src={require('./img/nav2@2.png')} className="nav-pic" alt=""/>
                        <span className="nav-txt">分类</span>
                    </div>
                </Link>
                <Link to="/communication" className="nav-link">
                    <div className="nave-w">
                        <img src={require('./img/nav4@2.png')} className="nav-pic" alt=""/>
                        <span className="nav-txt">分享</span>
                    </div>
                </Link>
                <Link to="/cart" className="nav-link">
                    <div className="nave-w">
                        <img src={require('./img/nav3@2.png')} className="nav-pic" alt=""/>
                        <span className="nav-txt">购物车</span>
                    </div>
                </Link>
                <Link to="/mine" className="nav-link">
                    <div className="nave-w">
                        <img src={require('./img/nav5@2.png')} className="nav-pic" alt=""/>
                        <span className="nav-txt">我的</span>
                    </div>
                </Link>
            </div>
        );
    }
}
export default Nav;