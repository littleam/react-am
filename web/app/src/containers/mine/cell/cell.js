import React,{ Component } from 'react';
import './cell.css'
export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:''
        };
    }
    render() {
        return(

                <div className="cell-wrap">
                    <span className="cell-txt1">{this.props.title}</span>
                    {this.renderRight()}
                </div>

        );
    }
    renderRight(){
        return(
            <div style={{flexDirection:'row'}}>
                {this.rightTitle()}

                <img  src={require('./img/mine1@2.jpg')} className="cell-pic" alt=""/>
            </div>
        )

    }
    rightTitle() {
        if (this.props.rightTitle) {
            return (
                <span className="cell-txt2">{this.props.rightTitle}</span>
            )
        }
    }
}

