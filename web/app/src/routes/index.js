import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from '../containers/home/index.js'
import Category from '../containers/category/index.js'
import Communication from '../containers/communication/index.js'
import Cart from '../containers/cart/index.js'
import Mine from '../containers/mine/index.js'
import MoveDetail from '../components/moveDetail/moveDetail.js'
import Share from '../components/share/share.js'
import BuyDetail from '../containers/home/buyDetail/buyDetail.js'
import SortDetail from '../containers/category/sortDetail/sortDetail.js'
import Nav from "../components/nav/nav";
class Routers extends Component {

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/communication" component={Communication}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/mine" component={Mine}/>
                    <Route path="/moveDetail" component={MoveDetail}/>
                    <Route path="/share" component={Share}/>
                    <Route path="/buyDetail" component={BuyDetail}/>
                    <Route path="/sortDetail" component={SortDetail}/>
                    <Nav/>
                </div>

            </BrowserRouter>
        )
    }
}
export default Routers;
