import React,{ Component } from 'react';
import './cellPicture.css'

export default class CellPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            uri:''
        };
    }
    render() {
        return(
                <div className="cpe-wrap">
                    <div className="cpe-w">
                        <img src={require('./img/mine1@2.jpg')} className="cpe-pic1" alt=""/>
                        <span className="cpe-txt1">{this.props.title}</span>
                    </div>
                    {this.renderRight()}
                </div>

        );
    }
    renderRight(){
        return(
            <div className="cpe-pic-w">
                {this.rightTitle()}
                <img  src={require('./img/mine1@2.jpg')} className="cpe-pic2" alt=""/>
            </div>
        )

    }
    rightTitle() {
        if (this.props.rightTitle) {
            return (
                <span className="cpe-txt2">{this.props.rightTitle}</span>
            )
        }
        return(
            <img src={require(this.props.rightImage)} alt=""/>
        )
    }
}

