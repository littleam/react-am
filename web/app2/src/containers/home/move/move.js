import React, { Component } from 'react';
import Swipe from 'react-swipe';
import './move.css';
import { Link } from 'react-router-dom';
class Move extends Component {
    constructor(props){
        super(props);
        this.state = {
            index:0
        };

    }
    render() {

        let opt = {
            auto:1500,
            callback:(index)=>{
                this.setState({
                    index:index
                })
            }
        };
        return (
            <div>
                <Link to="/move">
                    <Swipe className="mov-carousel" swipeOptions={opt}>
                        <div><img
                            src={require('./img/move1@2.jpg')} alt="" /></div>
                        <div><img
                            src={require('./img/move2@2.jpg')} alt="" /></div>
                        <div><img
                            src={require('./img/move3@2.jpg')} alt="" /></div>
                        <div><img
                            src={require('./img/move4@2.jpg')} alt="" /></div>
                        <div><img
                            src={require('./img/move5@2.jpg')} alt="" /></div>
                    </Swipe>
                </Link>

                <ul className="mov-cir-w">
                    <li className={this.state.index === 0 ? "mov-selected" : " "}> </li>
                    <li className={this.state.index === 1 ? "mov-selected" : " "}> </li>
                    <li className={this.state.index === 2 ? "mov-selected" : " "}> </li>
                    <li className={this.state.index === 3 ? "mov-selected" : " "}> </li>
                    <li className={this.state.index === 4 ? "mov-selected" : " "}> </li>
                </ul>


            </div>
        );
    }

}
export default Move;


