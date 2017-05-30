import React, { Component } from 'react';
import './interact.css'
class Interact extends Component {
    render() {

        return (
            <div>
                <div className="interact-w1">
                    <div className="interact-w2">
                        <img src={require('./img/interact1@2.jpg')} className="interact-pic" alt=""/><span className="interact-hart">4601</span>
                        <img src={require('./img/interact2@2.jpg')} className="interact-pic" alt=""/><span className="interact-ratting">18340</span>
                        {/*<img src={require('./img/interact3@2.jpg')} className="interact-pic" alt=""/><span className="interact-focus">30495</span>*/}
                    </div>
                </div>
            </div>
        );
    }

}
export default Interact;

