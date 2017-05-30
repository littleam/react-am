import React, { Component } from 'react';

//import SeparateLine from '../../../components/separateLine'
class ShareVideo extends Component {
    constructor(props){
        super(props);
        let html =document.documentElement;
        let hWidth = html.getBoundingClientRect().width;

        let rem =  html.style.fontSize = hWidth/7.5;
        this.state = {
            rem:rem
        };

    }
    render() {
        let rem = this.state.rem;
        return (
            <div>
                hello
            </div>
        );
    }

}
export default ShareVideo;