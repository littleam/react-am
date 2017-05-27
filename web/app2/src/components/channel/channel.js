import React, { Component } from 'react';
import './channel.css'

class Channel extends Component {
    render() {
        return (
            <div>
                <div className="cnl-wrap">
                    <div className="cnl-w">
                        <span className="cnl-txt1">__{this.props.title}__</span><br/>
                        <span ><em className="cnl-txt2">CHANNEL</em></span>
                    </div>
                </div>

            </div>
        );
    }

}
export default Channel;

