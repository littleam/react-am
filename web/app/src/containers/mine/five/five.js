import React,{ Component } from 'react';
import './five.css'
export default class Five extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return(
            <div className="five-wrap">
                <div className="five-w">
                    <img  src={require('./img/mine1@2.jpg')} className="five-pic" alt=""/>
                    <span className="five-txt">{this.props.titleOne}</span>

                </div>
                <div className="five-w">
                    <img  src={require('./img/mine1@2.jpg')} className="five-pic" alt=""/>
                    <span className="five-txt">{this.props.titleTwo}</span>

                </div>
                <div className="five-w">
                    <img  src={require('./img/mine1@2.jpg')} className="five-pic" alt=""/>
                    <span className="five-txt">{this.props.titleThree}</span>

                </div>
                <div className="five-w">
                    <img  src={require('./img/mine1@2.jpg')} className="five-pic" alt=""/>
                    <span className="five-txt">{this.props.titleFour}</span>
                </div>
                <div className="five-w">
                    <img  src={require('./img/mine1@2.jpg')} className="five-pic" alt=""/>
                    <span className="five-txt">{this.props.titleFive}</span>
                </div>
            </div>

        );
    }

}
