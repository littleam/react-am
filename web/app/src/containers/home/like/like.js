import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './like.css'
class Like extends Component {
    render() {
        return (
            <div className="like-wrap">
                <Link to="/buyDetail" className="like-link">
                    <div className="like-w">
                        <img src={require('./img/detail1@2.jpg')} className="like-pic" alt=""/>
                        <div className="like-txt">
                            <span className="like-title">现代工艺制作的天然美味</span><br/>
                            <span className="like-des">ICA 45%混合水果见过燕麦片750g</span><br/>
                            <span className="like-price-a">￥58</span>
                            <span className="like-price-b">￥68</span>
                        </div>

                    </div>
                </Link>
                <div className="like-w">
                    <img src={require('./img/detail2@2.jpg')} className="like-pic" alt=""/>
                    <div className="like-txt">
                        <span className="like-title">用内联艺术设计出真实的永生花</span><br/>
                        <span className="like-des">英国 Gelei's Story 永生花玻璃瓶</span><br/>
                        <span className="like-price-a">￥58</span>
                        <span className="like-price-b">￥68</span>
                    </div>

                </div>
                <div className="like-w">
                    <img src={require('./img/detail3@2.jpg')} className="like-pic" alt=""/>
                    <div className="like-txt">
                        <span className="like-title">现代工艺制作的天然美味</span><br/>
                        <span className="like-des">ICA 45%混合水果见过燕麦片750g</span><br/>
                        <span className="like-price-a">￥58</span>
                        <span className="like-price-b">￥68</span>
                    </div>

                </div>
                <div className="like-w">
                    <img src={require('./img/detail4@2.jpg')} className="like-pic" alt=""/>
                    <div className="like-txt">
                        <span className="like-title">用内联艺术设计出真实的永生花</span><br/>
                        <span className="like-des">英国 Gelei's Story 永生花玻璃瓶</span><br/>
                        <span className="like-price-a">￥58</span>
                        <span className="like-price-b">￥68</span>
                    </div>

                </div>

            </div>
        );
    }

}
export default Like;

