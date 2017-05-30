import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './headerTwo.css'
class HeaderTwo extends Component {
    render() {
        return (
            <div className="hdt-t-w">
                <span className="hdt-title">{this.props.title}</span>
                <Link to="/" className="hdt-back">
                    <img src={require('./img/back@2.jpg')} alt="" className="hdt-back-pic"/>
                </Link>
                <span>今日推荐精品</span>
                <div className="hdt-hart">
                    <img src={require('./img/hart@2.jpg')} alt="" className="hdt-hart-pic"/>
                </div>
                <div className="hdt-share" onClick={this.share}>
                    <img src={require('./img/share@2.jpg')} alt="" className="hdt-share-pic"/>
                </div>
            </div>
        );
    }

}
export default HeaderTwo;
