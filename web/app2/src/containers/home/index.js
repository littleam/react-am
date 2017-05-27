import React, { Component } from 'react';
import SeparateLine from '../../components/separateLine'
import Move from './move/move.js';
import Search from '../category/search/search.js';
import Time from './time/time.js';
import Rating from './rating/rating.js';
import MoveTwo from './moveRow/moveRow.js';
import Video from './video/video.js';
import Banner from '../../components/channel/channel.js';
import Like from './like/like.js'
import Map from './map/map'
import Find from './find/find'


class Home extends Component {

    render() {

        return(
            <div style={{position:'absolute',left:0,top:0,width:'100%',height:'100%',overflow:'auto'}}>
                <div style={{position:'absolute',left:0,top:0,width:'100%'}}>
                    <Search/>

                    <Move/>
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
                    <Video/>

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
                    <Like/>
                </div>
            </div>
        )

    }

}
export default Home;
//http://192.168.16.234:3000

