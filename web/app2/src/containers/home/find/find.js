import React, { Component } from 'react';
import Banner from '../../../components/channel/channel'
import './find.css'
class ListDetail extends Component {
    render() {
        return (
            <div className="find-wrap">
                <img src={require('./img/'+this.props.picture+'.jpg')} className="find-pic" alt=""/>
                <div className="find-text-w">
                    <span className="find-text1">夏天，调了杯蓝莓酒在家等你</span><br/><span className="find-text2">有时蓝莓酒专属酒鬼们的夏日冰凉特饮69元起！</span><br/>
                </div>
            </div>
        )
    }
}
class Find extends Component {

    render() {

        return (
            <div className="find-color">
                <div className="find-detail-w">
                    <ListDetail picture={'find1@2'}/>
                    <ListDetail picture={'find2@2'}/>
                    <ListDetail picture={'find3@2'}/>
                </div>
                <Banner title={'明星产品'}/>
                <div className="find-detail-w">
                    <ListDetail picture={'find5@2'}/>
                    <ListDetail picture={'find4@2'}/>
                    <ListDetail picture={'find6@2'}/>
                </div>
            </div>
        )
    }
}
export default Find;

