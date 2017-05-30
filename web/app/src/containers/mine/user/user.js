import React,{Component} from 'react';
import CellPicture from "../cellPicture/cellPicture.js";
import Cell from "../cell/cell";
import Five from "../five/five";

export default class User extends Component {
    render() {
        return (
            <div className="user-wrap">
                    <div>
                        <Cell title="我的订单" rightTitle="查看更多订单"/>
                    </div>
                    <div>
                        <Five
                            titleOne="卡券包"
                            uriOne="icon_tabbar_mine_selected"
                            titleTwo="蚂蚁花呗"
                            uriTwo="icon_tabbar_mine_selected"
                            titleThree="会员中心"
                            uriThree="icon_tabbar_mine_selected"
                            titleFour="我的小蜜"
                            uriFour="icon_tabbar_mine_selected"
                            titleFive="我的小蜜"
                            uriFive="icon_tabbar_mine_selected"
                        />
                    </div>
                    <div>
                        <Cell title="必备工具" rightTitle="查看全部工具"/>
                    </div>

                    <div>
                        <CellPicture title="我的钱包" rightTitle="办信用卡" uri="draft"/>
                        <CellPicture title="省流量模式" isSwitch={true} uri="like"/>
                        <CellPicture title="抵用券" rightTitle="6" uri="new_friend"/>
                        <CellPicture title="会员卡" rightTitle="0" uri="card"/>
                    </div>
                    <div className="user-mar">
                        <CellPicture title="好友去哪" uri="draft"/>
                        <CellPicture title="我的评价" uri="like" rightImage="me_new"/>
                        <CellPicture title="我的收藏" uri="new_friend"/>
                        <CellPicture title="会员中心" rightTitle="" uri="card"/>
                        <CellPicture title="积分商场" rightTitle="好礼已上线" uri="draft"/>
                    </div>
                    <div className="user-mar">
                        <CellPicture title="客服电话" uri="like"/>
                        <CellPicture title="关于美团" rightTitle="我要合作" uri="new_friend"/>
                    </div>
            </div>
        );
    }

}

