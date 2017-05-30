import React, { Component } from 'react';
import './album.css'

class Album extends Component {
    render() {

        return (

            <div>
                <div className="alm-wrap">

                    <img src={require('./img/pageLeft@2.jpg')} className="alm-pic1" alt=""/>
                    <span className="alm-txt">{this.props.title}</span><br/>
                    <img src={require('./img/pageRight@2.jpg')} className="alm-pic2" alt=""/>

                </div>

            </div>


        );
    }

}
export default Album;


