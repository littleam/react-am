import React, { Component } from 'react';
import SeparateLine from '../../../components/separateLine'
import './video.css'
class VideoLittle extends Component {
    render() {
        return (
            <div className="vle-wrap">
                <video
                    playsInline="true"
                    src={require('./img/video2.mp4')}
                    poster={require('./img/'+this.props.small+'.jpg')}
                    data-duration="03:24" data-id="3795" className="vle-video">
                </video>
                <div className="vle-play">
                    <img src={require('./img/play@2.png')} className="vle-pic" alt=""/>
                </div>
            </div>
        );
    }

}
class Video extends Component {
    render() {

        return (
            <div>
                <div className="vdo-wrap">
                    <div className="vdo-video-w">
                        <video playsInline="true"
                               src={require('./img/video2.mp4')}
                               poster={require('./img/video1@2.jpg')}
                               data-duration="03:24" data-id="3795" className="vdo-video">
                        </video>
                        <div className="vdo-txt-w">
                            <span className="vdo-txt1">缓慢冷榨HPP超高压灭菌 纯天然不含任何添加剂的优质果汁</span><br/>
                            <span className="vdo-txt2">HeyJuice秉承一贯坚持的品质，经过缓慢的冷榨和HPP超高压灭菌，不添加防腐剂、色素和调味剂等人工添加剂</span>
                        </div>
                        <div className="vdo-play">
                            <img src={require('./img/play@2.png')} className="vdo-pic" alt=""/>
                        </div>
                    </div>

                    <div className="vdo-small-w">
                        <div>
                            <VideoLittle small={'video5@2'}/>
                            <span>EXNIHILO PoetryAir</span>
                        </div>
                        <div>
                            <VideoLittle small={'video6@2'}/>
                            <span>玻璃瓶界的网红 GUIDE 100</span>
                        </div>
                    </div>

                </div>
                <SeparateLine/>
            </div>
        );
    }
}
export default Video;
