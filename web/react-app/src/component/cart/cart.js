/**
 * Created by ava on 2017/5/7.
 */
import React, { Component } from 'react';
import CartHeader from './cartHeader'
import CartList from './cartList'
class Cart extends Component {

    render() {

        return(
            <div>
                <CartHeader title={'购物车(3)'}/>
                <CartList/>
            </div>
        )

    }

}
export default Cart;

