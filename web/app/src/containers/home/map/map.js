import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './map.css'
class Map extends Component {

    render() {

        return (
            <Link to="/sortDetail" className="map-link">
            <div className="map_wrap">
                <div className="map_up">
                    <div className="map_left">
                        <span className="map_up_one">有机蔬果</span><br/>
                        <span className="map_up_two">天然鲜榨果蔬</span><br/>
                        <span className="map_up_three">hot</span>
                        <div className="map_left_wrap">
                            <img src={require('./img/map1@2.jpg')} className="map_up_picture" alt=""/>
                        </div>
                    </div>

                    <div className="map_right">
                        <span className="map_up_one">精品酒</span><br/>
                        <span className="map_up_two">礼盒系列酒</span><br/>
                        <span className="map_up_three">new</span>
                        <div className="map_right_wrap">
                            <img src={require('./img/map2@2.jpg')} className="map_up_picture" alt=""/>
                        </div>

                    </div>
                </div>

                <div className="map_down_out">
                    <div className="map_down_wrap">
                        <span className="map_down_one">甜品站</span><br/>
                        <span className="map_down_two">纯手工制作</span><br/>
                        <img src={require('./img/map3@2.jpg')} className="map_down_picture" alt=""/>
                    </div>
                    <div className="map_down_wrap">
                        <span className="map_down_one">贴心护理</span><br/>
                        <span className="map_down_two">夏日清凉系列</span><br/>
                        <img src={require('./img/map4@2.jpg')} className="map_down_picture" alt=""/>
                    </div>
                    <div className="map_down_wrap">
                        <span className="map_down_one">趣味果酿</span><br/>
                        <span className="map_down_two">趣味特别系列</span><br/>
                        <img src={require('./img/map5@2.jpg')} className="map_down_picture" alt=""/>
                    </div>
                    <div className="map_down_wrap_last">
                        <span className="map_down_one">香氛</span><br/>
                        <span className="map_down_two">手工香薰</span><br/>
                        <img src={require('./img/map6@2.jpg')} className="map_down_picture" alt=""/>
                    </div>
                </div>
            </div>
            </Link>
        );
    }

}
export default Map;

