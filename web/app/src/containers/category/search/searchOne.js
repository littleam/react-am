import React, { Component } from 'react';
import './searchOne.css'
class SearchOne extends Component {
    render() {
        return (
            <div>
                <div className="soe-w">
                    <input className="soe-inp" type="text" placeholder='输入商品关坚持或用户名'/>
                    <img className="soe-s" src={require('./img/search1@2.jpg')} alt=""/>
                    <div className="soe-cart-w" href=""><img
                        src={require('./img/cart@2.png')} alt="" className="soe-cart"/></div>
                </div>
            </div>
        );
    }

}
export default SearchOne;
