import React, { Component } from 'react';
// import SeparateLine from '../common/separateLine'
// import MoveOne from './moveOne.js';
// import Header from './header.js';
// import Time from './time.js';
// import Rating from './rating.js';
// import MoveTwo from './moveTwo.js';
// import VideoMore from './videoMore.js';
// import Banner from './banner.js';
// import Separate from './separate.js';
// import Category from "../category/category";
// import Cart from '../cart/cart'
// import Detail from './detail.js'
import DetailPage from './detailPage'

class Home extends Component {

    render() {

        return(
            <div style={{height:'100%',overflow:'auto'}}>
                {/*<Header/>
                <MoveOne/>
                <SeparateLine/>
                <Time/>
                <SeparateLine/>
                <Banner title={'生活研究所'}/>
                <Rating/>
                <Separate title={『MAY,05,2017』}/>
                <MoveTwo/>
                <SeparateLine/>
                <Banner title={'视频分享'}/>
                <VideoMore/>
                <Category/>
                <Cart/>
                <Detail/>*/}
                <DetailPage/>
            </div>
        )

    }

}
export default Home;
//http://192.168.16.234:3000

