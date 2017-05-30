import React, { Component } from 'react';
import './headerOne.css'
class HeaderOne extends Component {
    render() {
        return (
            <div>
                <div className="hdo-wrap">
                    <span className="hdo-title">{this.props.title}</span>
                    <div className="hdo-editor">
                        <span>编辑</span>
                    </div>
                    <div className="hdo-pic-w">
                        <img src={require('./img/chart@2.png')} alt="" className="hdo-pic"/>
                    </div>
                    <div className="hdo-point"> </div>
                </div>
            </div>
        );
    }

}
export default HeaderOne;
