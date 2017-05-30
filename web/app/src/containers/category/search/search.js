import React, { Component } from 'react';
import './search.css'
class Search extends Component {
    render() {
        return (
            <div>
                <div className="search-w">
                    <img className="search-scan" src={require('./img/scan@2.png')} alt=""/>
                    <input className="search-inp" type="text" placeholder='输入商品关坚持或用户名'/>
                    <img className="search-s" src={require('./img/search1@2.jpg')} alt=""/>
                    <div className="search-cart-w" href=""><img
                        src={require('./img/cart@2.png')} alt="" className="search-cart"/></div>
                </div>
            </div>
        );
    }

}
export default Search;
