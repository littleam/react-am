/**
 * Created by ava on 2017/5/7.
 */
import React, { Component } from 'react';
import HeaderOne from './header/headerOne'
import CartList from './cartList/cartList'
class Cart extends Component {

    render() {

        return(
            <div>
                <HeaderOne title={'购物车(3)'}/>
                <CartList/>
            </div>
        )

    }

}
export default Cart;

