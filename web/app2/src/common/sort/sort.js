import React, { Component } from 'react';
import SearchOne from  '../search/searchOne'
import { Link } from 'react-router-dom'
import './sort.css'
class Sort extends Component {
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
            <div className="sort-wrap" style={{height:this.state.screenHeight}}>
                <SearchOne/>

                    <div className="sort-out">
                        <div className="sort-l-w">
                            <div className="sort-line"> </div>

                            <div className="sort-cat sort-active">
                                <span>热门</span><br/>
                            </div>

                            <div className="sort-cat">
                                <span>优选美酒</span><br/>
                            </div>
                            <div className="sort-cat">
                                <span>好味美食</span><br/>
                            </div>
                            <div className="sort-cat">
                                <span>好味美食</span><br/>
                            </div>
                        </div>
                        <div>

                            <div className="sort-r-w">
                                <div className="sort-r-title">热门专题</div>
                                <div className="sort-pic-w">

                                        <img src={require('./img/sort1@2.jpg')} className="sort-pic-t" alt=""/>

                                    <img src={require('./img/sort2@2.jpg')} className="sort-pic-t" alt=""/>
                                </div>
                                <div className="sort-r-title">热门分类</div>
                                <div>
                                    <Link to="/sortDetail" className="sort-link">
                                        <img src={require('./img/sort3@2.jpg')} className="sort-pic1" alt=""/>
                                    </Link>
                                    <img src={require('./img/sort4@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort5@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">日用百货</div>
                                        <div className="sort-txt">数码家居</div>
                                        <div className="sort-txt">美容洗护</div>
                                    </div>
                                    <img src={require('./img/sort6@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort7@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort8@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt">花和香薰</div>
                                    </div>
                                    <div className="sort-line-bottom"> </div>
                                </div>
                            </div>



                            <div className="sort-r-w">
                                <div className="sort-r-title">热门专题</div>
                                <div className="sort-pic-w">
                                    <img src={require('./img/sort40@2.jpg')} className="sort-pic-t" alt=""/>
                                    <img src={require('./img/sort41@2.jpg')} className="sort-pic-t" alt=""/>
                                </div>
                                <div className="sort-r-title">优选美酒</div>
                                <div>
                                    <img src={require('./img/sort16@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort17@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort18@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">日用百货</div>
                                        <div className="sort-txt">数码家居</div>
                                        <div className="sort-txt">美容洗护</div>
                                    </div>
                                    <img src={require('./img/sort19@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort20@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort21@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt">花和香薰</div>
                                    </div>
                                    <div className="sort-line-bottom"> </div>
                                </div>
                            </div>

                            <div className="sort-r-w">
                                <div className="sort-r-title">热门专题</div>
                                <div className="sort-pic-w">
                                    <img src={require('./img/sort42@2.jpg')} className="sort-pic-t" alt=""/>
                                    <img src={require('./img/sort43@2.jpg')} className="sort-pic-t" alt=""/>
                                </div>
                                <div className="sort-r-title">好味美食</div>
                                <div>
                                    <img src={require('./img/sort22@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort23@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort24@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">日用百货</div>
                                        <div className="sort-txt">数码家居</div>
                                        <div className="sort-txt">美容洗护</div>
                                    </div>
                                    <img src={require('./img/sort25@2.jpg')} className="sort-pic1"  alt=""/>
                                    <img src={require('./img/sort26@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort27@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt">花和香薰</div>
                                    </div>
                                   
                                    <img src={require('./img/sort31@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort32@2.jpg')} className="sort-pic2" alt=""/>

                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt"> </div>
                                    </div>
                                    <div className="sort-line-bottom"> </div>
                                </div>
                            </div>

                            <div className="sort-r-w">
                                <div className="sort-r-title">热门专题</div>
                                <div className="sort-pic-w">
                                    <img src={require('./img/sort33@2.jpg')} className="sort-pic-t" alt=""/>
                                    <img src={require('./img/sort34@2.jpg')} className="sort-pic-t" alt=""/>
                                </div>
                                <div className="sort-r-title">咖啡和茶</div>
                                <div>
                                    <img src={require('./img/sort35@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort36@2.jpg')} className="sort-pic2" alt=""/>
                                    <img src={require('./img/sort37@2.jpg')} className="sort-pic2" alt=""/>
                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt">花和香薰</div>
                                    </div>
                                    <img src={require('./img/sort38@2.jpg')} className="sort-pic1" alt=""/>
                                    <img src={require('./img/sort39@2.jpg')} className="sort-pic2" alt=""/>

                                    <div className="sort-txt-w">
                                        <div className="sort-txt">国酿</div>
                                        <div className="sort-txt">曲奇饼干</div>
                                        <div className="sort-txt"> </div>
                                    </div>
                                    <div className="sort-line-bottom"> </div>
                                </div>
                            </div>

                        </div>

                    </div>


            </div>
        )
    }
}
export default Sort;
