import React, { Component } from 'react';
import './time.css'
class Time extends Component {

    render() {

        return (
        <div>
            <div className="time_wrap">
                <div className="time_banner">
                    <div className="time_banner_left">
                        <span className="time_banner_one">今日折扣</span><br/>
                        <span ><i className="time_banner_two">SALES</i></span>
                    </div>
                    <div className="time_banner_right">
                        <span className="time_banner_three">新品入荷</span><br/>
                        <i className="time_banner_four">NEW</i>
                    </div>
                </div>

                <div className="time_line">
                    <div className="time_down">
                        <div className="time_up"> </div>
                    </div>

                </div>



                <div className="time_content">
                    <div className="time_content_left">
                        <span className="time_content_one">距离折扣结束还有</span><br/>
                        <span className="time_content_two"><strong>02：25：37</strong></span><br/>
                        <span className="time_content_three">犀牛小姐 莓果色中高强度美背运动内衣</span><br/>
                        <span className="time_content-four"><strong>￥158</strong></span><br/>
                        <span className="time_content_three">￥328</span>
                    </div>
                    <div className="time_content_right">
                        <img src={require('./img/time@2.jpg')} className="time_picture" alt=""/>
                    </div>

                </div>
                <div className="time_more"><div>查看折扣详情</div></div>

            </div>
        </div>

        );
    }

}
export default Time;

