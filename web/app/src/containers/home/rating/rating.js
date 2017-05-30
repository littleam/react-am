import React, { Component } from 'react';
import Interact from '../interact/interact.js';
import { Link } from 'react-router-dom';
import './rating.css'
class Rating extends Component {
    render() {
        return (
            <Link to="/communication" className="rtg-link">
                <div className="rtg-wrap">
                    <div className="rtg-w">
                        <img src={require('./img/rating1@2.jpg')} className="rtg-pic" alt=""/>
                    </div>

                        <div className="rtg-txt-w">
                            <span className="rtg-txt">英国 Not Just Pajama 真丝眼罩</span><br/>
                            <span className="rtg-color">在这里，我们把全世界的新奇潮物带到你的生活，推选最优选的美物给你，希望你喜欢!</span>
                        </div>

                    <Interact/>
                </div>
            </Link>
        );
    }

}
export default Rating;
