import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './like.css'
const Like = (data) => {
    if(!data.data.lists){return(<div>loading....</div>)}
    if(data.data.lists){
        let lists = data.data.lists.data.lists5 ;
        return(
            <div>
                {
                    !data ? <div>loading....</div>: <div className="like-wrap">
                        {
                            lists.map(list=><LikeItem key={list.id} name={list.name} des={list.des} newPrice={list.newPrice} oldPrice={list.oldPrice} pictrue={list.picLike}/>)
                        }
                    </div>
                }
            </div>
        )
    }

}


const LikeItem = ({name,des,newPrice,oldPrice,pictrue}) => (

            <Link to="/buyDetail" className="like-link">
                <div className="like-w">
                    <img src={require(`../../category/sortDetail/img/${pictrue}.jpg`)} className="like-pic" alt=""/>
                    <div className="like-txt">
                        <span className="like-title">{name}</span><br/>
                        <span className="like-des">{des}</span><br/>
                        <span className="like-price-a">￥{newPrice}</span>
                        <span className="like-price-b">￥{oldPrice}</span>
                    </div>
                </div>
            </Link>

    );
const mapStateToProps = state => ({
    data: state.FetchGetList
});

export default connect(
    mapStateToProps
)(Like)

