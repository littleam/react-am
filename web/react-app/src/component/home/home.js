import React, { Component } from 'react';
import SeparateLine from '../common/separateLine'
import MoveOne from './moveOne.js';
import Search from '../category/search.js';
import Time from './time.js';
import Rating from './rating.js';
import MoveTwo from './moveTwo.js';
import VideoMore from './videoMore.js';
import Banner from '../common/banner.js';
//import Separate from '../common/separate.js';
//import Category from "../category/category";
//import Cart from '../cart/cart'
import Detail from './detail.js'
//import DetailPage from './detailPage'
//import BuyDetail from './buyDetail'
//import BuyOrder from './buyOrder'
//import BuyWait from "./buyWait";
//import BuySuccess from "./buySuccess";
//import Sort from  '../category/sort'
//import SortDetail from '../category/sortDetail'
//import VideoDetail from '../communication/videoDetail'
//import Special from '../communication/special'
import Map from './map'
//import Nine from './nine'
import Find from './find'
class Home extends Component {

    render() {

        return(
            <div style={{height:'100%',overflow:'auto'}}>
                <Search/>
                <MoveOne/>
                <SeparateLine/>

                <Time/>
                <SeparateLine/>

                <Banner title={'推荐频道'}/>
                <Map/>
                <SeparateLine/>

                <Banner title={'生活研究所'}/>
                <Rating/>
                <SeparateLine/>

                <Banner title={'视频分享'}/>
                <VideoMore/>

                <SeparateLine/>

                <Banner title={'每日好店'}/>
                <MoveTwo/>
                <SeparateLine/>
                    <Banner title={'推荐频道'}/>
                    <Map/>
                    <SeparateLine/>
                    <Banner title={'生活研究所'}/>
                    <Rating/>
                    <SeparateLine/>
                <Banner title={'发现好物'}/>
                <Find/>
                <SeparateLine/>


                <Banner title={'猜你喜欢'}/>
                <Detail/>

                {/*<Category/>
                <Cart/>
                <Detail/>
                <DetailPage/>

                <BuyDetail/>
                <BuyOrder/>
                <BuyWait/>
                <BuySuccess/>
                <Sort/>
                <SortDetail/>
                <VideoDetail/>
                <Special/>*/}
            </div>
        )

    }

}
export default Home;
//http://192.168.16.234:3000

