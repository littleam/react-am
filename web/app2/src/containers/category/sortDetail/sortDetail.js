import React, { Component } from 'react';
import Search from '../search/search'
import SeparateLine from '../../../components/separateLine'
import './sortDetail.css'

class ListDetail extends Component {
    render() {
        return (
            <div className="lil-wrap">

                <div className="lil-l-w">
                    <span className="lil-l-txt1">{this.props.title}</span><br/>
                    <span className="lil-l-txt2">￥398.8</span><br/>
                    <span className="lil-l-txt3">七天内可退换</span>
                </div>
                <div className="lil-pic-w">
                    <img src={require('./img/'+this.props.picture+'.jpg')} className="lil-pic" alt=""/>
                </div>

            </div>
        )
    }
}
class SortDetail extends Component {
    constructor(props) {
        super(props);
        let html = document.documentElement;
        let screenHeight = html.getBoundingClientRect().height;
        this.state = {
            screenHeight:screenHeight
        };
    }
    render() {
        return (
            <div className="sdl-wrap" style={{height:this.state.screenHeight}}>
                <Search/>
                <div>
                    <div className="sdl-cat1-w">
                        <div className="sdl-cat1-pic-w">
                            <span>曲奇饼干</span>
                            <img src={require('./img/select1@2.png')} className="sdl-cat1-pic" alt=""/><br/>
                        </div>
                        <div className="sdl-cat1-pic-w">
                            <span>智能排序</span>
                            <img src={require('./img/select1@2.png')} className="sdl-cat1-pic" alt=""/><br/>
                        </div>
                    </div>

                    <div className="sdl-cat2-w">
                        <div className="sdl-cat2-pic-w">
                            <span>可包邮</span>
                        </div>
                        <div className="sdl-cat2-pic-w">
                            <span>口感</span>
                            <img src={require('./img/select1@2.png')} className="sdl-cat1-pic" alt=""/><br/>
                        </div>
                        <div className="sdl-cat2-pic-w">
                            <span>品类</span>
                            <img src={require('./img/select1@2.png')} className="sdl-cat1-pic" alt=""/><br/>
                        </div>

                    </div>

                    <div className="sdl-list-w">
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie6@2'} />
                        <SeparateLine/>
                        <ListDetail title={'AKOKO 多口味曲奇饼干礼盒装 三拼口味' } picture={'cookie7@2'} />
                        <SeparateLine/>
                        <ListDetail title={'[限量特价] Mio.s Lab 喵叔的实验室黄标盒曲奇' } picture={'cookie8@2'} />
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' } picture={'cookie9@2'} />
                        <SeparateLine/>
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie37@2'} />
                        <SeparateLine/>
                        <ListDetail title={'AKOKO 多口味曲奇饼干礼盒装 三拼口味' } picture={'cookie2@2'} />
                        <SeparateLine/>
                        <ListDetail title={'[限量特价] Mio.s Lab 喵叔的实验室黄标盒曲奇' } picture={'cookie3@2'} />
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' }  picture={'cookie33@2'} />
                        <SeparateLine/>
                        <ListDetail title={'Mio.s Lab 喵叔的实验室软糖曲奇口味礼盒16枚入' } picture={'cookie5@2'} />
                        <SeparateLine/>
                        <ListDetail title={'马其顿 Vincinni 芬奇酱夹心饼干威化饼干 3包' } picture={'cookie12@2'} />
                    </div>
                </div>
            </div>
        )
    }
}
export default SortDetail;
